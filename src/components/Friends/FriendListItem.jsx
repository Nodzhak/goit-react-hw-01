import PropTypes from 'prop-types';
import './friends.css'; 

const FriendListItem = ( {avatar, name, isOnline} ) =>(
    <div className={`friend-item ${isOnline ? 'online' : 'offline'}`}>
    <img src={avatar} alt={name} width="48" />
    <p className="friend-name">{name}</p>
    <p className={`friend-status ${isOnline ? 'online' : 'offline'}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>)

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  };
  

export default FriendListItem