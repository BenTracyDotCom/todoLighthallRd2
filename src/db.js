import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todos'
})

export default {
  verify: () => {
    return("it's working!")
  },
  addUser: (name) => {
    const query = `INSERT INTO users VALUES (?)`
    return connection.query(query, [name])
  },
  addTodo: (todo) => {
    const userQuery = `SELECT id FROM users WHERE name = ?`
    return connection.query(query, [todo.user], (err, results) => {
      if(err){
        return err
      }
      console.log(results)
    })

  }
}