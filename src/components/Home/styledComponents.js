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
  @media screen and (max-width: 768px) {
    width: 80%;
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

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
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
`

export const BannerBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url(${props => props.image});
  background-size: cover;
  padding: 40px;
  border: 2px solid #f1f1f1;
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  margin-bottom: 30px;
  margin-top: 30px;
`

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 5px;
`

export const BannerText = styled.p`
  font-size: 20px;
  color: #1e293b;
  font-weight: 300;
  margin-bottom: 50px;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  width: 200px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  align-self: flex-start;
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
  width: 85vw;
  height: 92vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  overflow: auto;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
  width: 50%;
  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 20px;
    align-self: center;
  }
`

export const SearchInput = styled.input`
  border: 0;
  outline: 0;
  font-family: 'Roboto';
  color: #616e7c;
  background-color: transparent;
  border: 1px solid #616e7c;
  padding: 10px;
  font-size: 16px;
  width: 100%;
`

export const SearchButton = styled.button`
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  font-size: 20px;
  color: #ffffff;
  width: 100px;
  height: 100%;
  border: 1px solid #616e7c;
`
export const SideView = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
