import controller from './controller.js';
import * as express from 'express';
const router = express.Router()

router.get('/', (req, res) => (res.send('ok')))
router.get('/todos/:sort', controller.sendTodos)
router.post('/todos', controller.createTodo)

export default router