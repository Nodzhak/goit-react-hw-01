import PropTypes from 'prop-types';
import './profile.css'; 

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="value">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="value">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="value">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;