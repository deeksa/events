// Write your code here
import './index.css'

const EventItem = props => {
  const {each, onTapImage} = props
  const onTapImageIcon = () => {
    onTapImage(each.registrationStatus)
  }
  return (
    <li>
      <button type="button" onClick={onTapImageIcon}>
        <img src={each.imageUrl} alt="event" className="image1" />
      </button>
      <p>{each.name}</p>
      <p>{each.location}</p>
    </li>
  )
}
export default EventItem
