import * as db from './db.js';

const controller = {
  sendTodos: (req, res) => {
    res.send('made it to the controller')
  }
}

export default controller