import './index.css'

const ItemList = props => {
  const {eachList, delItem, listing} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachList

  const deleteItem = () => {
    delItem(id)
  }
  console.log(listing.length)

  return (
    <li className="list-style">
      <div className="first-part">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="icon" />
        <p className="heading">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div className="second-part">
        <button type="button" onClick={deleteItem} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ItemList
