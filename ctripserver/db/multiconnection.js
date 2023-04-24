const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin123",
  database: "login",
  multipleStatements: true,
});
module.exports = (sql, arr, callback) => {
  connection.query(sql, arr, function (error, result) {
    if (error) {
      return console.log(error);
    }
    callback(result);
  });
};
