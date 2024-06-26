import { isDevelopment, isE2E } from '~/constants'
import { mock } from '~/mocks/getMockGraphData/mockResponse'
import { api } from '~/network/api'
import { FetchNodeParams } from '~/stores/useDataStore'
import { FetchDataResponse } from '~/types'
import { getLSat } from '~/utils/getLSat'
import { payLsat } from '~/utils/payLsat'
import { defaultData } from './const'
import { formatFetchNodes } from './helpers'

export const fetchGraphData = async (
  graphStyle: 'split' | 'force' | 'sphere' | 'earth',
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
) => {
  try {
    return getGraphData(graphStyle, setBudget, params, signal, setAbortRequests)
  } catch (e) {
    return defaultData
  }
}

const fetchNodes = async (
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => {
  const args = new URLSearchParams({
    ...(isDevelopment ? { free: 'true' } : {}),
    ...params,
  }).toString()

  if (!params.word) {
    return fetchLatestContent(args, signal, setAbortRequests)
  }

  if (isDevelopment && !isE2E) {
    return fetchSearchData(args, signal)
  }

  return fetchProtectedSearchData(args, signal, setBudget, params, setAbortRequests)
}

const fetchLatestContent = async (
  args: string,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => {
  try {
    const response = await api.get<FetchDataResponse>(`/prediction/content/latest?${args}`, undefined, signal)

    return response
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (e: any) {
    handleFetchError(e, setAbortRequests)

    return mock as FetchDataResponse
  }
}

const fetchSearchData = async (args: string, signal: AbortSignal): Promise<FetchDataResponse> => {
  const response = await api.get<FetchDataResponse>(`/v2/search?${args}`, undefined, signal)

  return response
}

const fetchProtectedSearchData = async (
  args: string,
  signal: AbortSignal,
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => {
  const lsatToken = await getLSat()

  try {
    const response = await api.get<FetchDataResponse>(
      `/v2/search?${args}`,
      {
        Authorization: lsatToken,
      },
      signal,
    )

    return response
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.status === 402) {
      await payLsat(setBudget)

      return fetchNodes(setBudget, params, signal, setAbortRequests)
    }

    throw error
  }
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const handleFetchError = (error: any, setAbortRequests: (status: boolean) => void) => {
  console.error(error)

  if (error?.message.includes('aborted')) {
    setAbortRequests(true)
  }
}

const getGraphData = async (
  graphStyle: 'split' | 'force' | 'sphere' | 'earth',
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
) => {
  try {
    const dataInit = await fetchNodes(setBudget, params, signal, setAbortRequests)

    return formatFetchNodes(dataInit, params?.word || '', graphStyle)
  } catch (e) {
    console.error(e)

    return defaultData
  }
}
