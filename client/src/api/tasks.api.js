import axios from 'axios'


export const getTasksRequest = async () =>
await axios.get("http://5.183.11.6:4001/tasks");


 export const createTaskRequest = async (task) =>
  await axios.post("http://5.183.11.6:4001/tasks", task);


  export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://5.183.11.6:4001/tasks/${id}`);

  export const getTaskRequest = async (id) =>
  await axios.get(`http://5.183.11.6:4001/tasks/${id}`);

 
  export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://5.183.11.6:4001/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://5.183.11.6:4001/tasks/${id}`, {
    done,
  });
