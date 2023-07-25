import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookie from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun, FiMenu, FiX} from 'react-icons/fi'
import Context from '../../Context/Context'
import PopupDesign from '../PopupDesignFiles'

import {
  Nav,
  Logo,
  LogoutBox,
  Profile,
  Logout,
  SmallLogout,
  View,
  Box,
  Text,
  ButtonBox,
  Button,
  BigPopup,
  SmallPopup,
  ThemeButton,
  MenuButton,
  SidebarView,
  CloseButton,
  PopupView,
} from './styledComponents'

const Navbar = props => (
  <Context.Consumer>
    {value => {
      const {darkTheme, toggleTheme, changeSidebarId} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const changeSidebar = () => {
        changeSidebarId('HOME')
      }

      const onLogout = () => {
        const {history} = props
        Cookie.remove('jwt_token')
        history.replace('/login')
      }

      const logo = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <Nav backgroundColor={darkTheme ? '#212121' : '#ffffff'}>
          <Link to="/">
            <Logo src={logo} alt="website logo" onClick={changeSidebar} />
          </Link>
          <LogoutBox>
            {darkTheme ? (
              <li>
                <ThemeButton
                  type="button"
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  <FiSun size="28" color="#ffffff" />
                </ThemeButton>
              </li>
            ) : (
              <li>
                <ThemeButton
                  type="button"
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  <FaMoon size="28" color="#000000" />
                </ThemeButton>
              </li>
            )}
            <li>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </li>
            <li>
              <Popup
                modal
                trigger={
                  <MenuButton>
                    <FiMenu
                      size="30"
                      color={darkTheme ? '#ffffff' : '#000000'}
                    />
                  </MenuButton>
                }
              >
                {close => (
                  <PopupView>
                    <SidebarView
                      backgroundColor={darkTheme ? '#212121' : '#ffffff'}
                    >
                      <CloseButton onClick={close}>
                        <FiX
                          size="30"
                          color={darkTheme ? '#ffffff' : '#000000'}
                        />
                      </CloseButton>
                      <PopupDesign />
                    </SidebarView>
                  </PopupView>
                )}
              </Popup>
            </li>
            <li>
              <BigPopup>
                <Popup
                  modal
                  trigger={
                    <Logout
                      type="button"
                      hoverColor={darkTheme ? '#606060' : '#e2e8f0'}
                      color={darkTheme ? '#ffffff' : '#1b82f6'}
                      border={
                        darkTheme ? '1px solid #ffffff' : '1px solid #1b82f6'
                      }
                    >
                      Logout
                    </Logout>
                  }
                >
                  {close => (
                    <View>
                      <Box backgroundColor={darkTheme ? '#212121' : '#ebebeb'}>
                        <Text color={darkTheme ? '#ebebeb' : '#212121'}>
                          Are you sure, you want to logout
                        </Text>
                        <ButtonBox>
                          <Button
                            backgroundColor="transparent"
                            color={darkTheme ? '#909090' : '#383838'}
                            border={
                              darkTheme
                                ? '1px solid #909090'
                                : '1px solid #383838'
                            }
                            type="button"
                            onClick={close}
                          >
                            Cancel
                          </Button>
                          <Button
                            backgroundColor="#3b82f6"
                            color="#ebebeb"
                            border="0"
                            type="button"
                            onClick={onLogout}
                          >
                            Confirm
                          </Button>
                        </ButtonBox>
                      </Box>
                    </View>
                  )}
                </Popup>
              </BigPopup>
            </li>
            <li>
              <SmallPopup>
                <Popup
                  modal
                  trigger={
                    <SmallLogout type="button">
                      <FiLogOut
                        size="30"
                        color={darkTheme ? '#ffffff' : '#000000'}
                      />
                    </SmallLogout>
                  }
                >
                  {close => (
                    <View>
                      <Box backgroundColor={darkTheme ? '#212121' : '#ebebeb'}>
                        <Text color={darkTheme ? '#ebebeb' : '#212121'}>
                          Are you sure you want to logout?
                        </Text>
                        <ButtonBox>
                          <Button
                            backgroundColor="transparent"
                            color={darkTheme ? '#909090' : '#383838'}
                            border={
                              darkTheme
                                ? '1px solid #909090'
                                : '1px solid #383838'
                            }
                            type="button"
                            onClick={close}
                          >
                            Cancel
                          </Button>
                          <Button
                            backgroundColor="#3b82f6"
                            color="#ebebeb"
                            border="0"
                            type="button"
                            onClick={onLogout}
                          >
                            Confirm
                          </Button>
                        </ButtonBox>
                      </Box>
                    </View>
                  )}
                </Popup>
              </SmallPopup>
            </li>
          </LogoutBox>
        </Nav>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Navbar)
