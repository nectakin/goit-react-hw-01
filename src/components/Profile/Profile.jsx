import styles from './Profile.module.css';

import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.intro}>
        <img className={styles.avatar} src={image} alt={`${name} avatar`} />
        <p className={styles.userName}>{name}</p>
        <p className={styles.secondaryInfo}>@{tag}</p>
        <p className={styles.secondaryInfo}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsListItem}>
          <span>Followers</span>
          <span className={styles.statCount}>{followers}</span>
        </li>
        <li className={styles.statsListItem}>
          <span>Views</span>
          <span className={styles.statCount}>{views}</span>
        </li>
        <li className={styles.statsListItem}>
          <span>Likes</span>
          <span className={styles.statCount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};