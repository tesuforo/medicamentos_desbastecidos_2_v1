import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskContext";







function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
  
      <table class="table table-striped table-hover">
        <thead >
           
          <tr>
            <th data-field="col1">Id </th>
            <th data-field="col2">Sede </th>
         
           
            <th data-field="col5" data-sortable="true">
              Numero ID.
            </th>
            <th data-field="col6" data-sortable="true">
              Nombres.
            </th>
            <th data-field="col7" data-sortable="true">
              Tel 1.
            </th>
            
      
            <th data-field="col10" data-sortable="true">
              Gestante
            </th>
            <th data-field="col11" data-sortable="true">
              Programa
            </th>
           
            <th data-field="col13" data-sortable="true">
              Fecha Vigencia Formula
            </th>
            <th data-field="col14" data-sortable="true">
              Md Medicamento
            </th>
            <th data-field="col15" data-sortable="true">
              MD Medicamento 2
            </th>
          
            
            <th data-field="col18" data-sortable="true">
              Estado
            </th>
            <th data-field="col19" data-sortable="true">
              Fecha de Creación
            </th>
            <th data-field="col22" data-sortable="true">
             Descartar Caso
            </th>
            <th data-field="col20" data-sortable="true">
              Revisar Caso
            </th>
            <th data-field="col21" data-sortable="true">
              Marcar Solcitud
            </th>
          </tr>
        </thead>
<tbody>
        <tr>
          <td>{task.id}</td>
          <td>{task.title}</td>
         
          
          <td>{task.numeroid}</td>
          <td>{task.nombre}</td>
          <td>{task.telefono1}</td>
         
          
          <td>{task.gestante}</td>
          <td>{task.pertenece_programa}</td>
         
          <td>{task.fecha_vigencia_formula}</td>
          <td> MD :{task.md_medicamento}</td>
          <td> MD 2 :{task.md_medicamento_dos}</td>
          
          <td>
            <span>
              {task.done == 1
                ? "Medicamento Revisado✔️"
                : "Medicamento por Revisar❌"}{" "}
            </span>{" "}
          </td>
          <td>
            {task.createAt}
          </td>
          <td>
            
            <button className="bg-slate-200 px-2 py-1 text-black" onClick={() => deleteTask(task.id)}> Decartar caso</button>
          </td>

          <td>
            <button className="bg-slate-400 px-2 py-1 text-black" onClick={() => navigate(`/edit_enfermeria/${task.id}`)}>
              {" "}
              Revisar Caso
            </button>
          </td>
          <td>
            {" "}
            <button className="bg-slate-200 px-2 py-1 text-black" onClick={() => handleDone(task.done)}>
              Solicitud Revisada{" "}
            </button>
          </td>
        </tr>

        </tbody>
      </table>
    
    
  );
}

export default TaskCard;
