import logo from "../img/logo2.png";
import estilos from "./Cabecera.module.css";
import fotoTotoro from "../img/ghibli_logo_gold.png";
import { Link } from "react-router-dom";

export function Cabecera() {
  return (
    <>
      <div className={estilos.cabecera}>
        <div className={estilos.cabecera__img}>
          <img src={logo} alt="StudioGhibli" className={estilos.img} />
        </div>
        <div className={estilos.cabecera__nav}>
          <nav>
            <ul className={estilos.ul}>
              <Link to="/" className={estilos.inicio}>
                <li>Inicio</li>
              </Link>
              
            </ul>
          </nav>
        </div>
      </div>
      <div className={estilos.imgTotoro}>
        <figure>
          <img src={fotoTotoro} alt="error" />
        </figure>
        
      </div>
    </>
  );
}
