import styled from 'styled-components'

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 20px;
  height: 100%;
`

export const FailureImg = styled.img`
  width: 600px;
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
  color: #909090;
  font-weight: 300;
  text-align: center;
  margin: 10px 0px 30px 0px;
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
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
