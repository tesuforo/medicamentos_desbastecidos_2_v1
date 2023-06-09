import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/new" className="text-white font-bold">
     
        <h1> 💊 Registro de Medicamentos Desabastecidos</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
         
        </li>
        <li>
          <Link to="/new" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Crear</Link>
        </li>
        
      </ul>
    </div>

  );
}

export default Navbar;



