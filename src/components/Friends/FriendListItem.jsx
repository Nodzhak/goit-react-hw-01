import PropTypes from 'prop-types';
import styles from './Friends.module.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={`${styles.friendItem} ${isOnline ? styles.online : styles.offline}`}>
    <img src={avatar} alt={name} width="48" />
    <p className={styles.friendName}>{name}</p>
    <p className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
  
export default FriendListItem;