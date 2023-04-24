const mysql = require("mysql");

var db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin123",
  database: "login",
});

module.exports = (sql, arr, callback) => {
  db.query(sql, arr, function (error, result) {
    if (error) {
      return console.log(error);
    }
    callback(result);
  });
};
