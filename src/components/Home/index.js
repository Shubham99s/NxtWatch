import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GrClose, GrSearch} from 'react-icons/gr'

import {
  FailureView,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
  LoaderView,
  VideosList,
  BannerBox,
  BannerInfo,
  Logo,
  BannerText,
  BannerButton,
  CloseButton,
  FullView,
  MainView,
  VideosView,
  SearchBox,
  SearchInput,
  SearchButton,
  SideView,
} from './styledComponents'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import VideoCard from '../VideoCard'
import Context from '../../Context/Context'
import Failure from '../Failure'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    search: '',
    apiStatus: apiStatusConstants.initial,
    bannerView: true,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jsToken = Cookie.get('jwt_token')
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
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

  closeBanner = () => {
    this.setState({bannerView: false})
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onPressEnter = event => {
    if (event.key === 'Enter') {
      this.getVideosList()
    }
  }

  onClickSearchButton = () => {
    this.getVideosList()
  }

  render() {
    const {videosList, search, apiStatus, bannerView} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {darkTheme, changeSidebarId} = value

          const renderFailureView = () => (
            <Failure onRetry={this.getVideosList} darkTheme={darkTheme} />
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

          const renderVideosView = () => {
            const showVideosList = videosList.length > 0

            console.log(showVideosList)

            return showVideosList ? (
              <VideosList>
                {videosList.map(each => (
                  <VideoCard data={each} key={each.id} darkTheme={darkTheme} />
                ))}
              </VideosList>
            ) : (
              <FailureView>
                <FailureImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <FailureHeading color={darkTheme ? '#f9f9f9' : '#181818'}>
                  No Search Result Found
                </FailureHeading>
                <FailureDescription>
                  Try different keyword or remove search filter
                </FailureDescription>
                <RetryButton type="button" onClick={this.getVideosList}>
                  Retry
                </RetryButton>
              </FailureView>
            )
          }

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

          const renderBannerView = () => (
            <BannerBox
              data-testid="banner"
              image="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
            >
              <BannerInfo>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerText>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerText>
                <BannerButton type="button">GET IT NOW</BannerButton>
              </BannerInfo>
              <CloseButton data-testid="close" type="button">
                <GrClose
                  style={{cursor: 'pointer'}}
                  size="20"
                  color="#000000"
                  onClick={this.closeBanner}
                />
              </CloseButton>
            </BannerBox>
          )

          return (
            <FullView
              onLoad={() => {
                changeSidebarId('HOME')
              }}
            >
              <Navbar />
              <MainView>
                <SideView>
                  <Sidebar />
                </SideView>
                <VideosView
                  data-testid="home"
                  backgroundColor={darkTheme ? '#181818' : '#f9f9f9'}
                >
                  {bannerView ? <>{renderBannerView()}</> : ''}
                  <SearchBox>
                    <SearchInput
                      type="search"
                      onChange={this.onChangeSearchInput}
                      value={search}
                      placeholder="Search"
                      onKeyDown={this.onPressEnter}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      onClick={this.onClickSearchButton}
                      backgroundColor={darkTheme ? '#383838' : '#ebebeb'}
                    >
                      <GrSearch color={darkTheme ? '#ffffff' : '#231f20'} />
                    </SearchButton>
                  </SearchBox>
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

export default Home
