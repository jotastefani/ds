import btn from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={btn} alt="Icon Notification SMS"/>
    </div>
  )
}

export default NotificationButton
