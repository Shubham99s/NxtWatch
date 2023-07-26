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
