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
  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const isWon = true

    return (
      <div className="bg-container">
        <NavBar total="0" />
        {isWon ? (
          <div className="responsive-container">
            <div className="emoji-container">
              {shuffledEmojisList().map(eachItem => (
                <EmojiCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </div>
          </div>
        ) : (
          <WinOrLoseCard eachItem="false" />
        )}
      </div>
    )
  }
}

export default EmojiGame
