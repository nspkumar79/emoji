import './index.css'

const WinOrLoseCard = props => {
  const {eachItem} = props

  const imageUrl = !eachItem
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="result-container">
      <div className="card-container">
        <div className="text-container">
          <p className="result">your won</p>
          <p className="score-text">best {eachItem}</p>
          <p className="score">12/12</p>
          <button type="button" className="button">
            Play Again
          </button>
        </div>
        <img className="image" src={imageUrl} alt="game" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
