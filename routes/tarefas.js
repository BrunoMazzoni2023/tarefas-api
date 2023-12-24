import express from "express";
import { getTarefas, addTarefa, updateTarefa, deleteTarefa,getTarefaPorId} from "../controllers/tarefa.js";

const router = express.Router();

// Rota para obter todas as tarefas
router.get("/tarefas", getTarefas);

// Rota para obter uma tarefa por ID
router.get("/tarefas/:id", getTarefaPorId);

// Rota para adicionar uma nova tarefa
router.post("/tarefas", addTarefa);

// Rota para atualizar uma tarefa por ID
router.put("/tarefas/:id", updateTarefa);

// Rota para deletar uma tarefa por ID
router.delete("/tarefas/:id", deleteTarefa);

export default router