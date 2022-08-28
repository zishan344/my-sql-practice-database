const mysql = require("mysql");
const databaseConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "school",
};
const connection = mysql.createConnection(databaseConfig);
connection.connect((error) => {
  if (!error) {
    console.log("Connection Successfully");
  } else {
    console.log("Connection Failure");
  }
});

module.exports = connection;
