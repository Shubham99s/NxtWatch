import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoCardView,
  Thumbnail,
  DescBox,
  ChannelImg,
  VideoDescBox,
  ChannelText,
} from './styledComponents'

const VideoCard = props => {
  const {data, darkTheme} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data

  return (
    <VideoCardView hoverColor={darkTheme ? '#383838' : '#e2e8f0'}>
      <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <DescBox>
          <ChannelImg src={channel.profile_image_url} alt="channel logo" />
          <VideoDescBox>
            <ChannelText color={darkTheme ? '#f9f9f9' : '#181818'}>
              {title}
            </ChannelText>
            <ChannelText color={darkTheme ? '#64748b' : '#606060'}>
              {channel.name}
            </ChannelText>
            <ChannelText color={darkTheme ? '#64748b' : '#606060'}>
              {viewCount} | {formatDistanceToNow(new Date(publishedAt))}
            </ChannelText>
          </VideoDescBox>
        </DescBox>
      </Link>
    </VideoCardView>
  )
}

export default VideoCard
