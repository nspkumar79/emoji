/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, selectedList: [], isWon: false, isEnd: false}

  playAgain = () => {
    this.setState({score: 0, selectedList: [], isWon: false, isEnd: false})
  }

  satisfy = () => {
    const {score} = this.state

    if (score === 11) {
      this.setState(prevState => ({
        isWon: !prevState.isWon,
        score: prevState.score + 1,
        isEnd: !prevState.isEnd,
        topScore: prevState.topScore + 1,
      }))
    } else {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState(prevState => ({
        topScore:
          prevState.topScore < prevState.score
            ? prevState.score
            : prevState.topScore,
      }))
    }
  }

  unsatisfy = () => {
    this.setState(prevState => ({isEnd: !prevState.isEnd}))
  }

  onClicked = id => {
    const {selectedList} = this.state
    const {emojisList} = this.props
    let isPresent = 0
    console.log(isPresent)

    selectedList.forEach(eachListItem => {
      if (eachListItem.id === id) {
        isPresent += 1
      }
    })

    if (isPresent === 0) {
      const filterItem = emojisList.filter(eachItem => eachItem.id === id)

      this.setState(prevState => ({
        selectedList: [...prevState.selectedList, ...filterItem],
      }))
      this.satisfy()
    } else {
      this.unsatisfy()
    }
  }

  render() {
    const {score, topScore, isWon, isEnd} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        {!isEnd ? (
          <div className="responsive-container">
            <div className="emoji-container">
              {shuffledEmojisList().map(eachItem => (
                <EmojiCard
                  onClicked={this.onClicked}
                  eachItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </div>
          </div>
        ) : (
          <WinOrLoseCard
            playAgain={this.playAgain}
            eachItem={isWon}
            score={score}
            topScore={topScore}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
