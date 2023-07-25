import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {BsFolderPlus} from 'react-icons/bs'

import {
  FailureView,
  FailureImg,
  FailureHeading,
  FailureDescription,
  LoaderView,
  VideosList,
  BannerBox,
  FullView,
  MainView,
  VideosView,
  TrendingBanner,
  TrendingText,
  SideView,
} from './styledComponents'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Saved from '../Saved'
import Context from '../../Context/Context'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SavedVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    this.setState({apiStatus: apiStatusConstants.success})
  }

  render() {
    const {apiStatus} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {darkTheme, savedVideos, changeSidebarId, deleteVideos} = value

          const savedVideoStatus = savedVideos.length > 0

          const onDeleteVideos = video => {
            deleteVideos(video)
          }

          const renderFailureView = () => (
            <FailureView>
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <FailureHeading color={darkTheme ? '#f9f9f9' : '#181818'}>
                No saved videos found
              </FailureHeading>
              <FailureDescription>
                You can save your videos while watching them
              </FailureDescription>
            </FailureView>
          )

          const renderLoaderView = () => (
            <LoaderView data-testid="loader">
              <Loader
                type="ThreeDots"
                color={darkTheme ? '#f9f9f9' : '#181818'}
                height="50"
                width="50"
              />
            </LoaderView>
          )

          const renderVideosView = () => (
            <>
              {savedVideoStatus ? (
                <>
                  <TrendingBanner
                    data-testid="banner"
                    backgroundColor={darkTheme ? '#181818' : '#ebebeb'}
                  >
                    <BannerBox
                      backgroundColor={darkTheme ? '#0f0f0f' : '#f4f4f4'}
                    >
                      <BsFolderPlus color="#ff0000" />
                    </BannerBox>
                    <TrendingText color={darkTheme ? '#f9f9f9' : '#181818'}>
                      Saved Videos
                    </TrendingText>
                  </TrendingBanner>
                  <VideosList>
                    {savedVideos.map(each => (
                      <Saved
                        data={each}
                        key={each.id}
                        darkTheme={darkTheme}
                        onDeleteVideos={onDeleteVideos}
                      />
                    ))}
                  </VideosList>
                </>
              ) : (
                <>{renderFailureView()}</>
              )}
            </>
          )

          const renderAllViews = () => {
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderVideosView()
              case apiStatusConstants.inProgress:
                return renderLoaderView()
              default:
                return null
            }
          }

          return (
            <FullView
              data-testid="savedVideos"
              onLoad={() => {
                changeSidebarId('VIDEOS')
              }}
            >
              <Navbar />
              <MainView>
                <SideView>
                  <Sidebar />
                </SideView>
                <VideosView backgroundColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
                  {renderAllViews()}
                </VideosView>
              </MainView>
            </FullView>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SavedVideos
