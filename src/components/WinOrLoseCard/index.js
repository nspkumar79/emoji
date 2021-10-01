import './index.css'

const WinOrLoseCard = props => {
  const {eachItem, score, playAgain} = props

  const imageUrl = eachItem
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = eachItem ? 'You Won' : 'You Lose'
  const scoreText = eachItem ? 'Best Score' : 'Score'

  const onClicked = () => {
    playAgain()
  }

  return (
    <div className="result-container">
      <div className="card-container">
        <div className="text-container">
          <h1 className="result">{result}</h1>
          <p className="score-text">{scoreText}</p>
          <p className="score">{score}/12</p>
          <button onClick={onClicked} type="button" className="button">
            Play Again
          </button>
        </div>
        <img className="image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
