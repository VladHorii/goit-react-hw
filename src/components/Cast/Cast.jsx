import { useState, useEffect } from 'react';
import MovieService from '../../services/moviesApi';
const movieService = new MovieService();

export default function Cast({ id, imgPath, imgNotFound }) {
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    movieService.fetchMovieCast(id).then(r => setCasts(r.cast));
  }, [id]);

  return (
    <>
      {casts?.length ? (
        <ul>
          {casts.map(author => (
            <li key={author.id}>
              <img
                src={
                  author.profile_path
                    ? `${imgPath}${author.profile_path}`
                    : imgNotFound
                }
                alt={author.name}
                width="100"
              />
              <h3>{author.name}</h3>
              <p>Character: {author.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any casts for this movie.</p>
      )}
    </>
  );
}
