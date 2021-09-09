import {MovieCard} from './MovieCard';
import {Header} from './Header';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
};

interface GenreResponseProps {
  id: number;
  name: string;
  title: string;
};

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({selectedGenre, movies}:ContentProps) {
  return (
    <div className="container">

      <Header 
        title={selectedGenre.title}
      />

      <main>
        <div className="movies-list">
          {movies.map((movie:any) => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}

// finalizar o component container
