import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import {ImFire} from 'react-icons/im'

import {
  FailureView,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
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
import TrendingVideos from '../TrendingVideos'
import Context from '../../Context/Context'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jsToken = Cookie.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const option = {
      headers: {
        Authorization: `Bearer ${jsToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, option)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {videosList, apiStatus} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {darkTheme, changeSidebarId} = value

          const renderFailureView = () => (
            <FailureView>
              <FailureImg
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <FailureHeading color={darkTheme ? '#f9f9f9' : '#181818'}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureDescription>
                We are having some trouble to complete your request.
                <br />
                Please try again.
              </FailureDescription>
              <RetryButton type="button" onClick={this.getVideosList}>
                Retry
              </RetryButton>
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
              <TrendingBanner
                data-testid="banner"
                backgroundColor={darkTheme ? '#181818' : '#ebebeb'}
              >
                <BannerBox backgroundColor={darkTheme ? '#0f0f0f' : '#f4f4f4'}>
                  <ImFire color="#ff0000" />
                </BannerBox>
                <TrendingText color={darkTheme ? '#f9f9f9' : '#181818'}>
                  Trending
                </TrendingText>
              </TrendingBanner>
              <VideosList>
                {videosList.map(each => (
                  <TrendingVideos
                    data={each}
                    key={each.id}
                    darkTheme={darkTheme}
                  />
                ))}
              </VideosList>
            </>
          )

          const renderAllViews = () => {
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderVideosView()
              case apiStatusConstants.inProgress:
                return renderLoaderView()
              case apiStatusConstants.failure:
                return renderFailureView()
              default:
                return null
            }
          }

          return (
            <FullView
              data-testid="trending"
              onLoad={() => {
                changeSidebarId('TRENDING')
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

export default Trending
