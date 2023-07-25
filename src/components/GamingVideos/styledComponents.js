import styled from 'styled-components'

export const VideoCardView = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 10px;
  :hover {
    background-color: ${props => props.hoverColor};
  }
`

export const Thumbnail = styled.img`
  width: 300px;
  @media screen and (max-width: 1582px) {
    width: 15vw;
  }
  @media screen and (max-width: 815px) {
    width: 20vw;
  }
  @media screen and (max-width: 768px) {
    width: 25vw;
  }
  @media screen and (max-width: 535px) {
    width: 35vw;
  }
  @media screen and (max-width: 380px) {
    width: 60vw;
  }
`

export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 1582px) {
    padding: 10px 0px 0px 0px;
  }
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
  @media screen and (max-width: 1300px) {
    font-size: 12px;
  }
`
export const ChannelMainText = styled.p`
  color: ${props => props.color};
  font-size: 22px;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }
`
