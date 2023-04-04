import { Route, Routes } from "react-router-dom";
import formula from './assets/img/MED0012x_100.jpg'
import TasksPage  from  './pages/TasksPage';
import TaskForm  from  './pages/TaskForm';
import TaskForm_edit  from  './pages/TaskForm_edit';
import NotFound from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskContext";

import Navbar from "./components/Navbar";





function App() {
  return (
    <div  className="bg-slate-50 h-screen" >
<TaskContextProvider>
    <Navbar/>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm/>} />
            <Route path="/edit/:id" element={<TaskForm/>} />
            <Route path="/edit_enfermeria/:id" element={<TaskForm_edit/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          </TaskContextProvider>



    </div>
  )
}

export default App;
