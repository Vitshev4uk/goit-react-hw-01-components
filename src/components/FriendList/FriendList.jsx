import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return <ul className={css.FriendsList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={css.status}>{friend.isOnline}</span>
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
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  // avatar: PropTypes.img,
  name: PropTypes.string,
};

export default FriendList;
