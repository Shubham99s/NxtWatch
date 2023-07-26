import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {AiFillDelete} from 'react-icons/ai'

import {
  VideoCardView,
  Thumbnail,
  DescBox,
  ChannelImg,
  VideoDescBox,
  ChannelText,
  ChannelMainText,
  DeleteButton,
} from './styledComponents'

const Saved = props => {
  const {data, darkTheme, onDeleteVideos} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = data

  return (
    <>
      <Link
        style={{textDecoration: 'none', margin: '10px'}}
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
      <DeleteButton
        type="button"
        onClick={() => {
          onDeleteVideos(data)
        }}
      >
        <AiFillDelete size="25" color={darkTheme ? '#f9f9f9' : '#383838'} />
      </DeleteButton>
    </>
  )
}

export default Saved
