import db from './db.js';

const controller = {
  sendTodos: (req, res) => {
    res.send(db.verify())
  },
  createTodo: (req, res) => {
    res.send(JSON.stringify(req.body, 'what I got'))
  }
}

export default controller