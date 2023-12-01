import { Cabecera } from "../Componentes/Cabecera.jsx";
import estilos from "./Principal.module.css";
import { Peliculas } from "../Componentes/Peliculas.jsx";

export function Principal() {
  return (
    <div className={estilos.container}>
      <Cabecera />
      <Peliculas />
    </div>
  );
}
