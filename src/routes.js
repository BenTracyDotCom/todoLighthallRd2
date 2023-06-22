import controller from './controller.js';
import * as express from 'express';
const router = express.Router()

router.get('/', (req, res) => (res.send('ok')))
router.get('/todos/:user/:sort', controller.sendTodos)
router.get('/todos/:user', controller.sendTodos)
router.post('/todos/:user', controller.addUser)
router.post('/todos', controller.createTodo)
router.put('/todos', controller.updateTodo)
router.put('/todos/delete', controller.deleteTodo)

export default router