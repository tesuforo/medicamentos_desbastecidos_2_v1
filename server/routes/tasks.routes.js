
import { Router } from "express";
import {
    getTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask,
} from "../controllers/tasks.controllers.js";

const router = Router ();


router.get("/tasks", getTasks);//listar todos los pedidos de medicamentos  desabastecidos

router.post("/tasks", createTask);//guardar todos los pedidos de medicamentos  desabastecidos

router.put("/tasks/:id", updateTask);//actualizar uno los pedidos de medicamentos  desabastecidos

router.get("/tasks/:id",getTask);//trae uno los pedidos de medicamentos  desabastecidos

router.delete("/tasks/:id",deleteTask);//borra uno los pedidos de medicamentos  desabastecidos



export default router ;