import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoCardView,
  Thumbnail,
  DescBox,
  ChannelImg,
  VideoDescBox,
  ChannelText,
  ChannelMainText,
} from './styledComponents'

const TrendingVideos = props => {
  const {data, darkTheme} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data

  return (
    <Link style={{textDecoration: 'none', margin: '10px'}} to={`/videos/${id}`}>
      <VideoCardView hoverColor={darkTheme ? '#383838' : '#e2e8f0'}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <DescBox>
          <VideoDescBox>
            <ChannelMainText color={darkTheme ? '#f9f9f9' : '#181818'}>
              {title}
            </ChannelMainText>
            <ChannelText color={darkTheme ? '#64748b' : '#606060'}>
              {channel.name}
            </ChannelText>
            <ChannelText color={darkTheme ? '#64748b' : '#606060'}>
              {viewCount} | {formatDistanceToNow(new Date(publishedAt))}
            </ChannelText>
          </VideoDescBox>
          <ChannelImg src={channel.profile_image_url} alt="channel logo" />
        </DescBox>
      </VideoCardView>
    </Link>
  )
}

export default TrendingVideos
