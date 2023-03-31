import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {

  const {tasks, loadTasks} = useTasks();
 

  useEffect(() => {
    loadTasks();
  }, []);

  function rederMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div >
        
      <div>
      Solicitudes de revision de Medicamento Desabastecido
</div>
      {rederMain()}
    </div>
  );
}
export default TasksPage;
