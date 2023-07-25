import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import {BsFolderPlus, BsFillHouseDoorFill} from 'react-icons/bs'
import {ImFire} from 'react-icons/im'

import Context from '../../Context/Context'

import {
  SideBar,
  SidebarList,
  SideBarItems,
  SideText,
  ContactUsBox,
  Contact,
  SocialMediaBox,
  SocialIcons,
  ContactText,
} from './styledComponents'

const items = [
  {displayText: 'Home', id: 'HOME', path: '/'},
  {
    displayText: 'Trending',
    id: 'TRENDING',
    path: '/trending',
  },
  {displayText: 'Gaming', id: 'GAMING', path: '/gaming'},
  {
    displayText: 'Saved videos',
    id: 'VIDEOS',
    path: '/saved-videos',
  },
]

const Sidebar = () => (
  <Context.Consumer>
    {value => {
      const {darkTheme, sidebarId, changeSidebarId} = value
      const bColor = darkTheme ? '#606060' : '#e2e8f0'
      const iconColor = darkTheme ? '#909090' : '#606060'

      const renderSidebarList = () => (
        <SidebarList>
          <Link style={{'text-decoration': 'none'}} to={items[0].path}>
            <SideBarItems
              hoverColor={darkTheme ? '#383838' : '#f1f1f1'}
              backgroundColor={
                items[0].id === sidebarId ? bColor : 'transparent'
              }
              key={items[0].id}
              onClick={() => {
                changeSidebarId(items[0].id)
              }}
            >
              <BsFillHouseDoorFill
                color={items[0].id === sidebarId ? '#ff0000' : iconColor}
              />
              <SideText
                color={darkTheme ? '#ffffff' : '#000000'}
                fontWeight={items[0].id === sidebarId ? '800' : '400'}
              >
                {items[0].displayText}
              </SideText>
            </SideBarItems>
          </Link>
          <Link style={{'text-decoration': 'none'}} to={items[1].path}>
            <SideBarItems
              hoverColor={darkTheme ? '#383838' : '#f1f1f1'}
              backgroundColor={
                items[1].id === sidebarId ? bColor : 'transparent'
              }
              key={items[1].id}
              onClick={() => {
                changeSidebarId(items[1].id)
              }}
            >
              <ImFire
                color={items[1].id === sidebarId ? '#ff0000' : iconColor}
              />
              <SideText
                color={darkTheme ? '#ffffff' : '#000000'}
                fontWeight={items[1].id === sidebarId ? '800' : '400'}
              >
                {items[1].displayText}
              </SideText>
            </SideBarItems>
          </Link>
          <Link style={{'text-decoration': 'none'}} to={items[2].path}>
            <SideBarItems
              hoverColor={darkTheme ? '#383838' : '#f1f1f1'}
              backgroundColor={
                items[2].id === sidebarId ? bColor : 'transparent'
              }
              key={items[2].id}
              onClick={() => {
                changeSidebarId(items[2].id)
              }}
            >
              <SiYoutubegaming
                color={items[2].id === sidebarId ? '#ff0000' : iconColor}
              />
              <SideText
                color={darkTheme ? '#ffffff' : '#000000'}
                fontWeight={items[2].id === sidebarId ? '800' : '400'}
              >
                {items[2].displayText}
              </SideText>
            </SideBarItems>
          </Link>
          <Link style={{'text-decoration': 'none'}} to={items[3].path}>
            <SideBarItems
              hoverColor={darkTheme ? '#383838' : '#f1f1f1'}
              backgroundColor={
                items[3].id === sidebarId ? bColor : 'transparent'
              }
              key={items[3].id}
              onClick={() => {
                changeSidebarId(items[3].id)
              }}
            >
              <BsFolderPlus
                color={items[3].id === sidebarId ? '#ff0000' : iconColor}
              />
              <SideText
                color={darkTheme ? '#ffffff' : '#000000'}
                fontWeight={items[3].id === sidebarId ? '800' : '400'}
              >
                {items[3].displayText}
              </SideText>
            </SideBarItems>
          </Link>
        </SidebarList>
      )

      return (
        <SideBar backgroundColor={darkTheme ? '#212121' : '#ffffff'}>
          {renderSidebarList()}
          <ContactUsBox>
            <Contact color={darkTheme ? '#ffffff' : '#424242'}>
              CONTACT US
            </Contact>
            <SocialMediaBox>
              <a href="/#">
                <SocialIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </a>
              <a href="/#">
                <SocialIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </a>
              <a href="/#">
                <SocialIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </a>
            </SocialMediaBox>
            <ContactText color={darkTheme ? '#ffffff' : '#424242'}>
              Enjoy! Now to see your channels and recommendations!
            </ContactText>
          </ContactUsBox>
        </SideBar>
      )
    }}
  </Context.Consumer>
)

export default Sidebar
