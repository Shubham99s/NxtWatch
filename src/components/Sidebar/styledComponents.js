import styled from 'styled-components'

export const SideBar = styled.div`
  height: 92vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.backgroundColor};
  font-family: 'Roboto';
`
export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`
export const SideBarItems = styled.li`
  width: 15vw;
  background-color: ${props => props.backgroundColor};
  margin: 0;
  padding-left: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${props => props.hoverColor};
  }
  @media screen and (max-width: 1500px) {
    font-size: 1.5vw;
    padding-left: 8px;
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
export const ContactUsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1500px) {
    font-size: 1.5vw;
    padding: 0;
  }
`
export const Contact = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  @media screen and (max-width: 1500px) {
    font-size: 1.5vw;
    padding-left: 8px;
  }
`
export const SocialMediaBox = styled.div`
  display: flex;
  align-items: center;
`
export const SocialIcons = styled.img`
  width: 40px;
  margin-right: 10px;
  @media screen and (max-width: 1500px) {
    width: 60%;
    margin-left: 8px;
  }
`
export const ContactText = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  @media screen and (max-width: 1500px) {
    font-size: 1.5vw;
    padding-left: 8px;
  }
`
