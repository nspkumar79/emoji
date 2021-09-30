import './index.css'

const NavBar = props => {
  const {total} = props
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-logo"
        />
        <div className="nav-text-container">
          <p className="nav-text">Score: {total}</p>
          <p className="nav-text">Top Score: 0</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
