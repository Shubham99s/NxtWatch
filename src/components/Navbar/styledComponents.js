import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  padding: 10px 10px 10px 10px;

  @media screen and (min-width: 768px) {
    padding: 10px 40px 10px 60px;
  }
`

export const Logo = styled.img`
  width: 200px;

  @media screen and (max-width: 768px) {
    width: 40vw;
  }
  @media screen and (max-width: 500px) {
    width: 50vw;
  }
`

export const LogoutBox = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 8px;
  }
`

export const Profile = styled.img`
  width: 38px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Logout = styled.button`
  background-color: transparent;
  border: ${props => props.border};
  color: ${props => props.color};
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Bree Serif';
  font-size: 20px;
  padding: 5px 20px 5px 20px;
  :hover {
    background-color: ${props => props.hoverColor};
  }
`

export const SmallLogout = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`
export const View = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #31313150;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 20px;
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`

export const Text = styled.p`
  margin: 0px 0px 20px 0px;
  color: ${props => props.color};
  font-size: 25px;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => props.border};
  padding: 15px 30px 15px 30px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto';
  cursor: pointer;
`

export const BigPopup = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SmallPopup = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export const MenuButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupView = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #21212150;
`

export const SidebarView = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.backgroundColor};
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
