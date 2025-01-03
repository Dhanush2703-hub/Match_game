import './index.css'

const TabItem = props => {
  const {eachitemDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = eachitemDetails
  const useClass = isActive ? 'm' : 'm1'
  const handleClick = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button-style-tab ${useClass}`}
        onClick={handleClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
