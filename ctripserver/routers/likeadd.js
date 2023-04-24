const db = require("../db");
const connection = require("../db/multiconnection");
// 点赞＋1
module.exports = (req, res) => {
  let sqllike =
    "UPDATE picture SET thumb=thumb+1 WHERE authorid=?;SELECT * FROM picture ORDER BY thumb DESC";
  connection(sqllike, req.body.authorid, (result) => {
    let pictureAll = result[1];
    return res.send({
      status: 0,
      pictureAll,
    });
  });
};
