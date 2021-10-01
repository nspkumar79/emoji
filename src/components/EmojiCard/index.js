import './index.css'

const EmojiCard = props => {
  const {eachItem, onClicked} = props
  const {id, emojiUrl, emojiName} = eachItem
  const clicked = () => {
    onClicked(id)
  }

  return (
    <li className="list-item-container">
      <button onClick={clicked} type="button" className="emoji-card">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
