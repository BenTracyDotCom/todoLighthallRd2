import db from './db.js';

const controller = {
  sendTodos: (req, res) => {
    db.getTodos(req.params.user, (err, data) => {
      if(err){
        res.status(400).send(err)
      } else {
        res.send(data)
      }
    })
  },
  createTodo: (req, res) => {
    db.addTodo(req.body, (err, data) => {
      if(err){
        console.log(err)
      } else {
        res.status(202).send(data)
      }
    })
  }
}

export default controller