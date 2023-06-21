import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todos'
})

export default {
  verify: () => {
    return ("it's working!")
  },
  addUser: (name) => {
    const query = `INSERT INTO users VALUES (?)`
    return connection.query(query, [name])
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
    const query = `SELECT * FROM todos INNER JOIN users ON todos.owner = users.id WHERE users.name = ?`
    connection.query(query, [user.toLowerCase()], (err, results) => {
      if (err) {
        cb(err, null)
      } else {
        cb(null, results)
      }
    })
  }
}