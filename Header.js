import './index.css'

const Header = props => {
  const {timeElapsedInSeconds, score} = props
  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
        className="website-logo-image"
      />
      <div className="nav-last">
        <p className="nav-para">
          Score: <span>{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-image"
        />
        <p>
          <span>{timeElapsedInSeconds} sec</span>
        </p>
      </div>
    </div>
  )
}

export default Header
