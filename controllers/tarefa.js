import { db } from "../db.js";

export const getTarefas = (_, res) => {
    const q = "SELECT * FROM tarefas";

    db.query(q, (err, data)=> {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addTarefa = (req, res) => {
    const q =
    "INSERT INTO tarefas(`titulo`, `descricao`) VALUES(?)";

    const values = [
        req.body.titulo,
        req.body.descricao,
    
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Tarefa criada com sucesso.");
    });
};

export const updateTarefa = (req, res) => {
    const q = 
    "UPDATE tarefas SET `titulo` = ?, `descricao` = ? WHERE `id` = ?";
    

    const values = [
        req.body.titulo,
        req.body.descricao,
    
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
        
        return res.status(200).json("Tarefa atualizada com sucesso");
    });
};

export const deleteTarefa = (req, res) => {
    const q = "DELETE FROM tarefas WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Tarefa deletada com sucesso.");
    });

    
};


export const getTarefaPorId = (req, res) => {
    const taskId = parseInt(req.params.id);

    const q = "SELECT * FROM tarefas WHERE id = ?";
  
    db.query(q, [taskId], (err, results) => {
        if (err) {
            console.error('Erro ao obter tarefa do MySQL:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } else if (results.length > 0) {
            const tarefa = results[0];
            res.json(tarefa);
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    });
};
