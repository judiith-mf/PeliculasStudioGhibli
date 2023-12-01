import infoPeliculas from "../studioGhibli.json";
import { Pelicula } from "../Componentes/Pelicula.jsx";
import estilos from "./Peliculas.module.css";

export function Peliculas() {
  return (
    <div className={estilos.container__pelicula}>
      {infoPeliculas.films.map((pelicula) => (
        <Pelicula key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
}
