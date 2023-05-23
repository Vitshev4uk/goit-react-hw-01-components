import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return <ul className={css.FriendsList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={friend.isOnline ? css.status : css.statusOffline}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  ;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
       id: PropTypes.number.isRequired,
       isOnline: PropTypes.bool.isRequired,
       name: PropTypes.string.isRequired,
    })
  )
}

export default FriendList;
