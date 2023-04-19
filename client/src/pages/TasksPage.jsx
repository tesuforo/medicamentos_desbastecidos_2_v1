import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {

  const {tasks, loadTasks} = useTasks();


  useEffect(() => {
    loadTasks();
  }, []);

  function rederMain() {
    if (tasks.length === 0) return <h1>No hay SOlicitudes</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div >

    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Solicitudes para Revisión por parte de la enfermera, Medicamento Desabastecido
        </div>
      </div>

      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
           <a href="/Call_center" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Ingreso a Call Center <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
           <a href="/Linea_de_frente" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Ingreso a Linea de frente <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      {rederMain()}
    </div>
  );
}
export default TasksPage;
