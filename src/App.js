
import './App.css';
import { Principal } from "./Paginas/Principal.jsx";
import { DetallePelicula } from './Paginas/DetallePelicula.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route
            path="/detalle/:id"
            element={<DetallePelicula />}
          ></Route>
        </Routes>
      </Router>
  );
}

export default App;
