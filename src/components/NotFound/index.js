import {
  FailureView,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FullView,
  MainView,
  VideosView,
  SideView,
} from './styledComponents'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Context from '../../Context/Context'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <FullView>
          <Navbar />
          <MainView>
            <SideView>
              <Sidebar />
            </SideView>
            <VideosView backgroundColor={darkTheme ? '#0f0f0f' : '#f1f5f9'}>
              <FailureView>
                <FailureImg
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <FailureHeading color={darkTheme ? '#f9f9f9' : '#181818'}>
                  Page Not Found
                </FailureHeading>
                <FailureDescription>
                  YWe are sorry the page you requested could not be found.
                </FailureDescription>
              </FailureView>
            </VideosView>
          </MainView>
        </FullView>
      )
    }}
  </Context.Consumer>
)

export default NotFound
