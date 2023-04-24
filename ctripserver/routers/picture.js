const db = require("../db");
const connection = require("../db/multiconnection");

// 管理员更改照片墙的信息
module.exports = (req, res) => {
  if (req.body.hasOwnProperty("operate")) {
    if (req.body.operate === "修改信息") {
      const { authorid, name, thumb, theme, url } = req.body.newData;
      let sqlupdate =
        "UPDATE picture SET name=?,thumb=?,theme=?,url=? WHERE authorid=?;SELECT * FROM picture";
      connection(sqlupdate, [name, thumb, theme, url, authorid], (result) => {
        const tabledata = result[1];
        return res.send({
          status: 0,
          msg: "数据库数据同步更新成功！",
          tabledata,
        });
      });
    } else if (req.body.operate === "删除信息") {
      const { authorid } = req.body.record;
      let sqldelete =
        "DELETE  FROM picture WHERE authorid=?;SELECT * FROM picture";
      connection(sqldelete, authorid, (result) => {
        const tabledata = result[1];
        return res.send({
          status: 0,
          msg: "数据库数据删除成功！",
          tabledata,
        });
      });
    } else {
      // 添加数据
      const { authorid } = req.body.newData;
      let sqladd =
        "INSERT INTO picture(authorid) VALUES(?);SELECT * FROM picture";
      connection(sqladd, [[authorid]], (result) => {
        const tabledata = result[1];
        return res.send({
          status: 0,
          msg: "数据库数据添加成功！",
          tabledata,
        });
      });
    }
  } else {
    let sqluser = "SELECT * FROM user";
    db(sqluser, [], (result) => {
      return res.send(result);
    });
  }
};
