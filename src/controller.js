import db from './db.js';

//TODO: protect routes via cookies

const controller = {
  addUser: (req, res) => {
    db.addUser(req.params.user, (err, data) => {
      if(err){
        res.status(400).send(err)
      } else {
        res.status(200).end()
      }
    })
  },
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
        res.status(400).send(err)
      } else {
        res.status(201).send(data)
      }
    })
  },
  updateTodo: (req, res) => {
    db.updateTodo(req.body, (err, data) => {
      if(err){
        res.status(400).send(err)
      } else {
        res.status(202).send(data)
      }
    })
  },
  deleteTodo: (req, res) => {
    db.deleteTodo(req.body, (err, data) => {
      if(err){
        res.status(400).send(err)
      } else {
        res.status(202).send(data)
      }
    })
  }
}

export default controller