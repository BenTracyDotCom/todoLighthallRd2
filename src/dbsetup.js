import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todos',
  multipleStatements: true
})

const query = `
  CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
  );

  CREATE TABLE todos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    owner INT,
    title VARCHAR(255),
    description TEXT,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),
    due DATETIME,
    FOREIGN KEY (owner) REFERENCES users(id)
  );
`

connection.query(query, function(err, results, fields){
  if(err){console.log(err)};
  console.log(results, 'results');
  console.log(fields, 'fields');
})
