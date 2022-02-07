import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div className={styles.genres}>
        {genres.map((g) => (
          <p key={g}>{g}</p>
        ))}
      </div>
      <p className={styles.summary}>{summary}</p>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
