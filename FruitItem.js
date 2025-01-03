import './index.css'

const FruitItem = props => {
  const {eachitemDetails, onClickThumbnailFruitItem} = props
  const {thumbnailUrl, category} = eachitemDetails

  const handleClickThumbnail = () => {
    onClickThumbnailFruitItem(eachitemDetails)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="button-style-fruit"
        onClick={handleClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="fruit-item" />
      </button>
    </li>
  )
}

export default FruitItem
