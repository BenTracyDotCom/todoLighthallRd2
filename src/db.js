import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ec2',
  database: 'todos',
  password: 'imalittleteapot'
})

export default {
  verify: () => {
    return ("it's working!")
  },
  addUser: (name, cb) => {
    const query = `SELECT * FROM users WHERE name = ?`
    connection.query(query, [name], (err, results) => {
      if(err){
        cb(err, null)
      } else if (results && results.length){
        cb(null, 'exists')
      } else {
        const insert = 'INSERT INTO users (name) VALUES (?)'
        connection.query(insert, [name], (err, results) => {
          if(err){
            cb(err, null)
          } else {
            cb(null, 'created')
          }
        })
      }
    })
  },
  addTodo: (todo, cb) => {
    const userQuery = `SELECT id FROM users WHERE name = ?`
    connection.query(userQuery, [todo.user.toLowerCase()], (err, results) => {
      if (err) {
        cb(err, null)
      } else {
        const userId = results[0].id;
        const todoQuery = 'INSERT INTO todos (owner, title, description, createdat, due, status) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(todoQuery, [userId, todo.title, todo.description, new Date(), todo.due, todo.status], (err, results) => {
          if (err) {
            cb(err, null)
          } else {
            connection.query(`SELECT * FROM todos WHERE owner = ?`, [userId], (err, results) => {
              if (err) {
                cb(err, null)
              } else {
                cb(null, results)
              }
            })
          }
        })

      }
    })
  },
  getTodos: (user, cb) => {
    const query = `SELECT todos.id, users.name, title, description, createdat, status, due FROM todos INNER JOIN users ON todos.owner = users.id WHERE users.name = ?`
    connection.query(query, [user.toLowerCase()], (err, results) => {
      if (err) {
        cb(err, null)
      } else {
        cb(null, results)
      }
    })
  },
  updateTodo: (todo, cb) => {
    const query = `UPDATE todos SET status = ? WHERE id = ?`
    connection.query(query, [todo.status, todo.id], (err, results) => {
      if (err) {
        cb(err, null)
      } else {
        connection.query(`SELECT todos.id, title, description, createdat, status, due FROM todos INNER JOIN users ON todos.owner = users.id WHERE users.name = ?`, [todo.name], (err, results) => {
          if (err) {
            cb(err, null)
          } else {
            cb(null, results)
          }
        })
      }
    })
  },
  deleteTodo: (todo, cb) => {
    connection.query(`DELETE FROM todos WHERE id = ?`, [todo.id], (err, results) => {
      if (err) {
        cb(err, null)
      } else {
        connection.query(`SELECT todos.id, title, description, createdat, status, due FROM todos INNER JOIN users ON todos.owner = users.id WHERE users.name = ?`, [todo.name], (err, results) => {
          if (err) {
            cb(err, null)
          } else {
            cb(null, results)
          }
        })
      }
    })
  },
  filteredTodos: (user, filter) => {
    //TODO
  },
  sortTodos: (user, sort) => {
    //TODO
  }
}