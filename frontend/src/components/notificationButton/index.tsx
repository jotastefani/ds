import axios from 'axios';
import btn from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
  saleId : number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    
  })
}

function NotificationButton( {saleId} : Props ) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={btn} alt="Icon Notification SMS"/>
    </div>
  )
};

export default NotificationButton;
