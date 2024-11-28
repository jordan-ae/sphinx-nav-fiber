import styled from 'styled-components'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { MediaPlayer } from '~/modules/mindset/components/MediaPlayer'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { Transcript } from './Transcript'

export const SideBar = () => {
  const { selectedEpisodeLink, selectedEpisode } = useMindsetStore((s) => s)

  return (
    <Wrapper align="stretch" basis="100%" grow={1} shrink={1}>
      <MediaWrapper>
        {selectedEpisode?.node_type && <Summary>{selectedEpisode?.node_type}</Summary>}
        {selectedEpisode?.name && <EpisodeTitle>{selectedEpisode?.name}</EpisodeTitle>}
        {selectedEpisodeLink && <MediaPlayer mediaUrl={selectedEpisodeLink} />}
      </MediaWrapper>
      <Transcript />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  padding: '20px',
  background: 'transparent',
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
  },
}))

const Summary = styled(Text)`
  font-family: Inter;
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
`

const EpisodeTitle = styled(Text)`
  font-family: Inter;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
`

const MediaWrapper = styled(Flex)(({ theme }) => ({
  width: '100%',
  margin: '16px auto',
  zIndex: 29,
  [theme.breakpoints.up('sm')]: {
    width: '390px',
  },
}))
