
import PropTypes from "prop-types";
import css from 'components/ProfileCard/ProfileCard.module.css'

const ProfileCard = ({user}) => {
    return <div className={css.profile}>
        <div className={css.description}>
    <img
      src={user.avatar}
      alt={user.username}
      className={css.avatar}
    />
    <p className={css.name }> {user.username}</p>
      <p className={css.tag}>@{user.tag}</p>
      <p className={css.location}>{user.location}</p>
  </div>

      <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>: { user.stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>: { user.stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>: { user.stats.likes}</span>
    </li>
  </ul>
</div>
};

ProfileCard.propTypes = {
  // avatar: PropTypes.img,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}

export default ProfileCard;