import { api } from '~/network/api'
import { FetchDataResponse } from '~/types'

export const getNodes = async (): Promise<FetchDataResponse> => {
  const url = `/prediction/graph/search?node_type=['Episode']&include_properties=true&includeContent=true&sort_by=date&limit=20`

  const response = await api.get<FetchDataResponse>(url)

  return response
}
