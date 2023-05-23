
import PropTypes from "prop-types";
import css from 'components/ProfileCard/ProfileCard.module.css'

const ProfileCard = ({avatar, username, tag, location, stats}) => {
    return <div className={css.profile}>
        <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name }> {username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
  </div>

      <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>: { stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>: { stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>: { stats.likes}</span>
    </li>
  </ul>
</div>
};

ProfileCard.propTypes = {
  // avatar: PropTypes.img,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}

export default ProfileCard;