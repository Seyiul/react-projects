import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(keyword);
  return (
    <div>
      <h1>🎬 MOVIES 🎬</h1>
      <div className={styles.search}>
        <input value={keyword} onChange={onChange}></input>
        <span>🔎</span>
      </div>
      {keyword
        ? movies
            .filter((searchMovie) =>
              searchMovie.title
                .toLowerCase()
                .includes(keyword.toLocaleLowerCase())
            )
            .map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))
        : movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
    </div>
  );
}
export default Home;
