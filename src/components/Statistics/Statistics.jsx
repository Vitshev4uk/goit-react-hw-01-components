// import data from 'data/data.json';
import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ stats, title }) => {
  return  <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : null}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}: </span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  ;
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
       id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
    })
    )
};

export default Statistics;
