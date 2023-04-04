import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
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



      class="table table-bordered">
        <thead class="border-b font-medium dark:border-neutral-500">

          <tr>
            <th data-field="col1"  class="px-6 py-4" >Id </th>
            <th data-field="col2"  class="px-6 py-4">Sede </th>


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
             Descartar Caso
            </th>
            <th data-field="col20"  class="px-6 py-4" data-sortable="true">
              Revisar Caso
            </th>
            <th data-field="col21"  class="px-6 py-4" data-sortable="true">
              Marcar Solcitud
            </th>
          </tr>
        </thead>


<tbody>






        <tr  class="border-b dark:border-neutral-500">
          <td class="whitespace-nowrap px-6 py-4 font-medium">{task.id}</td>



          <td class="whitespace-nowrap px-6 py-4">{task.title}</td>


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
              Solicitud Revisada            </button>
          </td>
        </tr>



 </tbody>


</table>


  );

};

export default TaskCard;
