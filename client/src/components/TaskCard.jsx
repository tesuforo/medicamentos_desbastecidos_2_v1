import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTable } from 'react-table'

import TasksPage from "../pages/TasksPage";









function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };


  return (

<table
         id="table_id"
  data-toggle="table"
  data-search="true"
  data-pagination="true"
  data-show-refresh="true"
  data-show-toggle="true"
  data-show-columns="true"
  data-show-footer="false"



      class="table table-bordered table-secondary">
        <thead class="border-b font-medium dark:border-neutral-500">

          <tr className= "table-light">
            <th data-field="col1"  class="px-6 py-4" >Id </th>
            <th data-field="col2"  class="px-6 py-4">Sede </th>
            <th data-field="col555"  class="px-6 py-4">Remite </th>


            <th data-field="col5"  class="px-6 py-4" data-sortable="true">
              Identificación
            </th>
            <th data-field="col6"  class="px-6 py-4" data-sortable="true">
              Nombres
            </th>
            <th data-field="col7"  class="px-6 py-4" data-sortable="true">
              Tel 1
            </th>


            <th data-field="col10"  class="px-6 py-4" data-sortable="true">
              Gestante
            </th>
            <th data-field="col11"  class="px-6 py-4" data-sortable="true">
              Programa
            </th>

            <th data-field="col13"  class="px-6 py-4" data-sortable="true">
              Fecha Vigencia Formula
            </th>
            <th data-field="col14"  class="px-6 py-4" data-sortable="true">
              Medicamento
            </th>
            <th data-field="col15"  class="px-6 py-4" data-sortable="true">
              Medicamento2
            </th>
            <th data-field="col18"  class="px-6 py-4" data-sortable="true">
              Estado
            </th>
            <th data-field="col19"  class="px-6 py-4" data-sortable="true">
              Fecha de Creación
            </th>
            <th data-field="col22"  class="px-6 py-4" data-sortable="true">
             Descartar
            </th>
            <th data-field="col20"  class="px-6 py-4" data-sortable="true">
              Revisar
            </th>
            <th data-field="col21"  class="px-6 py-4" data-sortable="true">
             Remitir
            </th>
          </tr>
        </thead>


<tbody>


          <td class="whitespace-nowrap px-6 py-4">{task.id}</td>

          <td class="whitespace-nowrap px-6 py-4">{task.title}</td>
          <td class="whitespace-nowrap px-6 py-4">{task.remite}</td>


          <td class="whitespace-nowrap px-6 py-4">{task.numeroid}</td>
          <td class="whitespace-nowrap px-6 py-4">{task.nombre}</td>
          <td class="whitespace-nowrap px-6 py-4">{task.telefono1}</td>


          <td class="whitespace-nowrap px-6 py-4">{task.gestante}</td>
          <td class="whitespace-nowrap px-6 py-4">{task.pertenece_programa}</td>

          <td class="whitespace-nowrap px-6 py-4">{task.fecha_vigencia_formula}</td>
          <td class="whitespace-nowrap px-6 py-4"> MD :{task.md_medicamento}</td>
          <td class="whitespace-nowrap px-6 py-4"> MD 2 :{task.md_medicamento_dos}</td>

          <td>
            <span>
              {task.done == 1
                ? "Revisado✔️"
                : "❌"}{" "}
            </span>{" "}
          </td>
          <td>
            {task.createAt}
          </td>
          <td>

            <button className="bg-slate-200 px-2 py-1 text-black" onClick={() => deleteTask(task.id)}> 🗑️</button>
          </td>

          <td>
            <button className="bg-slate-400 px-2 py-1 text-black" onClick={() => navigate(`/edit_enfermeria/${task.id}`)}>
              🖉
            </button>
          </td>
          <td>
            {" "}
            <button className="bg-slate-200 px-2 py-1 text-black" onClick={() => handleDone(task.done)}>
             ✅            </button>
          </td>


 </tbody>


</table>


  );

};

export default TaskCard;
