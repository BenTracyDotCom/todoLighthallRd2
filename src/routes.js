import * as controller from './controller.js';
import * as express from 'express';
const router = express.Router()

router.get('/', (req, res) => (res.send('ok')))
router.get('/api/todos/:sort', (req, res) => (res.send('ok')))

export default router