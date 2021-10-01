import './index.css'

const NavBar = props => {
  const {score, topScore, isEnd} = props
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="nav-logo"
          />
          <h1 className="nav-heading">Emoji Game</h1>
        </div>
        {!isEnd ? (
          <div className="nav-text-container">
            <p className="nav-text">Score: {score}</p>
            <p className="nav-text">Top Score: {topScore}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NavBar
