import {Link} from 'react-router-dom'
import {
  VideoCardView,
  Thumbnail,
  DescBox,
  VideoDescBox,
  ChannelText,
  ChannelMainText,
} from './styledComponents'

const GamingVideos = props => {
  const {data, darkTheme} = props

  const {id, title, thumbnailUrl, viewCount} = data

  return (
    <Link
      style={{textDecoration: 'none', 'margin-bottom': '20px'}}
      to={`/videos/${id}`}
    >
      <VideoCardView hoverColor={darkTheme ? '#383838' : '#e2e8f0'}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <DescBox>
          <VideoDescBox>
            <ChannelMainText color={darkTheme ? '#f9f9f9' : '#181818'}>
              {title}
            </ChannelMainText>
            <ChannelText color={darkTheme ? '#64748b' : '#606060'}>
              {viewCount} Watching WorldWide
            </ChannelText>
          </VideoDescBox>
        </DescBox>
      </VideoCardView>
    </Link>
  )
}

export default GamingVideos
