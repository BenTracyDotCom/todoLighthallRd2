import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todos'
})

export default {
  verify: () => {
    return("it's working!")
  }
}