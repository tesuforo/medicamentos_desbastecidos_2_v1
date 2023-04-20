import { Route, Routes } from "react-router-dom";
import formula from './assets/img/MED0012x_100.jpg'
import TasksPage  from  './pages/TasksPage';
import TaskForm  from  './pages/TaskForm';
import TaskForm_edit  from  './pages/TaskForm_edit';
import NotFound from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "./components/Navbar";
import TaskForm_call_center from "./pages/TaskForm_call_center";
import TaskForm_linea_de_frente from "./pages/TaskForm_linea_de_frente";





function App() {
  return (
    <div  className="bg-slate-50 h-screen" >
<TaskContextProvider>
 
    <Navbar/>
    
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm/>} />
            <Route path="/call_center" element={<TaskForm_call_center/>} />
            <Route path="/farmacia" element={<TaskForm_farmacia/>} />
            <Route path="/linea_de_frente" element={<TaskForm_linea_de_frente/>} />
            <Route path="/edit/:id" element={<TaskForm/>} />
            <Route path="/edit_enfermeria/:id" element={<TaskForm_edit/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>

          </TaskContextProvider>    



    </div>
  )


}

export default App;
