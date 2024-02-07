import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.jsx'
import './friends.css'; 

const FriendList = ({ friends }) =>(
<ul className="friend-list">
    <li>
    { friends.map(({ avatar, name, isOnline, id }) =>
    <FriendListItem 
    key = { id }
    avatar = { avatar }
    name = { name }
    isOnline = { isOnline }
    />)}
    </li>
	
</ul>)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({ 
        id:PropTypes.number.isRequired })).isRequired
}


export default FriendList;