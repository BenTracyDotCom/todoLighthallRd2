import db from './db.js';

const controller = {
  sendTodos: (req, res) => {
    res.send(db.verify())
  }
}

export default controller