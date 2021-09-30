import './index.css'

const EmojiCard = props => {
  const {eachItem} = props
  const {emojiUrl, emojiName} = eachItem

  return (
    <button type="button" className="emoji-card">
      <img src={emojiUrl} alt={emojiName} className="emoji" />
    </button>
  )
}

export default EmojiCard
