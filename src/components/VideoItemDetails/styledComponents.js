import styled from 'styled-components'

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 20px;
`

export const FailureImg = styled.img`
  width: 400px;
`

export const SideView = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const FailureHeading = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
  font-weight: 400;
  text-align: center;
  margin: 20px 0px 0px 0px;
`

export const FailureDescription = styled.p`
  font-size: 20px;
  color: #94a3b8;
  font-weight: 300;
  text-align: center;
  margin: 10px 0px 30px 0px;
`

export const RetryButton = styled.button`
  border: 0;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16spx;
  font-weight: 500;
  background-color: #4f46e5;
  padding: 15px 30px 15px 30px;
  border-radius: 5px;
  cursor: pointer;
`

export const LoaderView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const FullView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export const MainView = styled.div`
  display: flex;
`

export const VideosView = styled.div`
  width: 90vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: ${props => props.backgroundColor};
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`

export const VideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto';
  padding: 20px;
  width: 100%;
`

export const Player = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-size: 25px;
  font-weight: 300;
  margin: 20px 0px 0px 0px;
`

export const VideoInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VideoText = styled.p`
  font-size: 18px;
  color: ${props => props.color};
  font-weight: 400;
`

export const LikeDislikeSaveBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const LikeDislikeSaveButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${props => props.color};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  color: ${props => props.color};
  border: 0;
  height: 1px;
`

export const VideoDescBox = styled.div`
  display: flex;
  margin-top: 20px;
`

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`

export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 400;
  margin: 0px 0px 15px 0px;
`

export const ChannelSubs = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 300;
  margin: 0px 0px 25px 0px;
`

export const Description = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 300;
  margin: 0;
`
