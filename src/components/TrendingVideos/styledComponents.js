import styled from 'styled-components'

export const VideoCardView = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 10px;
  :hover {
    background-color: ${props => props.hoverColor};
  }

  @media screen and (max-width: 670px) {
    flex-direction: column;

    margin: 0px 0px 20px 0px;
  }
`

export const Thumbnail = styled.img`
  width: 450px;
  @media screen and (max-width: 1000px) {
    width: 350px;
    height: 200px;
  }

  @media screen and (max-width: 670px) {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
`

export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 1000px) {
    gap: 20px;
    padding: 0px 0px 0px 20px;
  }

  @media screen and (max-width: 670px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
  }
`

export const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60px;

  @media screen and (max-width: 670px) {
    order: -1;
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
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`
export const ChannelMainText = styled.p`
  color: ${props => props.color};
  font-size: 26px;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`
