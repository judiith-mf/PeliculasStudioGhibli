import estilos from "./Pelicula.module.css";
import { Link } from "react-router-dom";


export function Pelicula({ pelicula }) {
    return (
      <div className={estilos.contenedorCard} key={pelicula.id}>
        <img src={pelicula.poster} alt="" />
        <div className={estilos.hover}>
            <h2>{pelicula.title}</h2>
            <p>
                {pelicula.description}
            </p>

            {/* Link al boton para que nos linkee a detalle seguido del id de la pelicula */}
            <Link to={"/detalle/" + pelicula.id}>
              <button>Ver detalles</button>
            </Link>
            
        </div>
      </div>
    );
}