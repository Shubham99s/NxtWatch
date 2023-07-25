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
  @media screen and (max-width: 768px) {
    width: 80%;
  }
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

export const LoaderView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const VideosList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 30px 5px 30px 30px;
  overflow: auto;
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

  @media screen and (max-width: 670px) {
    margin: 5px 5px 5px 5px;
  }
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

export const TrendingBanner = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: 1000px) {
    padding: 10px;
  }
  @media screen and (max-width: 500px) {
    padding: 6px;
  }
`

export const BannerBox = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 30px 30px 30px 30px;
  border-radius: 60px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
    padding: 20px 20px 20px 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 5vw;
    padding: 5vw;
  }
`

export const TrendingText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 600;
  margin-left: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 24px;
    margin-left: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 5vw;
  }
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
