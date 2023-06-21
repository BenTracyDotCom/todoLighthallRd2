import db from './db.js';

const controller = {
  sendTodos: (req, res) => {
    res.send(db.verify())
  },
  createTodo: (req, res) => {
    console.log(req.body.user, 'made it')
    db.addTodo(req.body, (err, data) => {
      if(err){
        console.log(err)
      }
      console.log(data, 'results')
    })
  }
}

export default controller