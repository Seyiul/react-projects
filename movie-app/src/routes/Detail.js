import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/detail.module.css";
function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <div className={styles.bgimg}>
            <img src={movie.background_image}></img>
            <div className={styles.cvimg}>
              <img src={movie.large_cover_image}></img>
            </div>
            <div className={styles.title}>
              <h1>{movie.title}</h1>
            </div>
          </div>
          <div className={styles.info}>
            <strong>🎬 {movie.year}</strong>
            <strong>⭐ {movie.rating}</strong>
            <strong>🕒 {movie.runtime} min</strong>
          </div>
          <p className={styles.description}>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
