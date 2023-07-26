import styled from 'styled-components'

export const VideoCardView = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 40px 10px;
  :hover {
    background-color: ${props => props.hoverColor};
  }
  width: 315px;
  height: 350px;
  @media screen and (max-width: 1600px) {
    width: 260px;
    height: 300px;
  }

  @media screen and (max-width: 994px) {
    width: 45%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin: 0px 1px 40px 0px;
    height: fit-content;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

export const DescBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60px;
  align-self: flex-start;
  margin-right: 10px;
`

export const VideoDescBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
`

export const ChannelText = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Roboto';
  margin: 0;
`
