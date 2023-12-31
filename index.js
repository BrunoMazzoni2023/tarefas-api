import express from "express";
import tarefaRoutes from "./routes/tarefas.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", tarefaRoutes);

app.listen(8800);