import express from "express";
import path from "path";
import cors from "cors";
import ViteExpress from 'vite-express';
import { fileURLToPath } from "url";
import controller from "./controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json())
app.use(cors())

app.get('/api/todos/:user/:sort', controller.sendTodos)
app.get('/api/todos/:user', controller.sendTodos)
app.post('/api/todos/:user', controller.addUser)
app.post('/api/todos', controller.createTodo)
app.put('/api/todos', controller.updateTodo)
app.put('/api/todos/delete', controller.deleteTodo)

//app.use('/', router)

const PORT = 3000

ViteExpress.listen(app, PORT, () => {
  console.log(`App listening on port ${PORT}`);
})