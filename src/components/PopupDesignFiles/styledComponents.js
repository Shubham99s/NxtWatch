import styled from 'styled-components'

export const SideBar = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  font-family: 'Roboto';
`
export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
`
export const SideBarItems = styled.li`
  padding: 10px 20px 10px 20px;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  font-size: 25px;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${props => props.hoverColor};
  }
`
export const SideText = styled.p`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  margin-left: 30px;
  @media screen and (max-width: 1500px) {
    margin-left: 10px;
  }
`
