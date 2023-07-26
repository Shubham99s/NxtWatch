import {
  FailureView,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const Failure = props => {
  const {onRetry, darkTheme} = props
  const onClickRetry = () => {
    onRetry()
  }
  return (
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
      <RetryButton type="button" onClick={onClickRetry}>
        Retry
      </RetryButton>
    </FailureView>
  )
}

export default Failure
