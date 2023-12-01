import infoPeliculas from "../studioGhibli.json";
import { Cabecera } from "../Componentes/Cabecera.jsx";
import estilos from "./DetallePelicula.module.css";
import { useParams } from 'react-router-dom';

export function DetallePelicula() {
    let parametro = useParams().id;
    console.log(parametro.id);

    const elemento= infoPeliculas.films.find(pelicula=>pelicula.id===parametro);
    console.log(elemento);
  return (
    <div>
        <Cabecera/>

        <div className={estilos.container__detalles}>
            <div className={estilos.poster__info}>
                <img src={elemento.poster} alt="poster" className={estilos.poster}/>
                <div className={estilos.info}>
                    <h1>{elemento.title}</h1>
                    <h3>DIRECTOR</h3><p>{elemento.director}</p>
                    <h3>PRODUCTOR</h3><p>{elemento.producer}</p>
                    <h3>AÑO DE PRODUCCIÓN</h3><p>{elemento.release_date}</p>
                </div>
                <div className={estilos.puntuacion}>
                    <h2>{elemento.rt_score}%</h2>
                </div>
            </div>
            <h2 className={estilos.titPersonajes}>PERSONAJES</h2>
            <div className={estilos.personajes}>
            {elemento.people.map((personaje, index) => (
                <div className={estilos.personaje} key={index}>
                <img src={personaje.img} alt="" />
                <h2>{personaje.name}</h2>
                <h3>Edad</h3><p>{personaje.age}</p>
                <h3>Género</h3><p>{personaje.gender}</p>
                <h3>Color de los ojos</h3><p>{personaje.eye_color}</p>
                <h3>Color del pelo</h3><p>{personaje.hair_color}</p>
                <h3>Especie</h3><p>{personaje.specie}</p>
                </div>
            ))}
            </div>
        </div> 

    </div>
  );
}