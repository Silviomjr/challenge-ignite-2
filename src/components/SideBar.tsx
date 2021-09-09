import { Button } from './Button';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SideBarProps {
  selectedGenredId: number;
  onChangeSelectedGenreId: (id: number) => void;
  genres: GenreResponseProps[];
}

export function SideBar({selectedGenredId, onChangeSelectedGenreId, genres}: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => {onChangeSelectedGenreId(genre.id)}}
            selected={selectedGenredId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}