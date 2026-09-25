import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEventItem = () => {
    onClickEvent(id)
  }

  return (
    <li className="event-item">
      <button className="image" type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={onClickEventItem}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
