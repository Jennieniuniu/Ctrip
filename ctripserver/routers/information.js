const db = require("../db");
const connection = require("../db/multiconnection");

// 管理员修改用户信息、删除信息
module.exports = (req, res) => {
  if (req.body.hasOwnProperty("operate")) {
    if (req.body.operate === "修改信息") {
      const { workid, name, balance, coupon, phone, cardid, email, role } =
        req.body.row;
      let sqlupdate =
        "UPDATE user SET username=?,balance=?,coupon=?,phone=?,cardid=?,email=?,role=? WHERE workid=?;SELECT * FROM user";
      connection(
        sqlupdate,
        [name, balance, coupon, phone, cardid, email, role, workid],
        (result) => {
          const tabledata = result[1];
          return res.send({
            status: 0,
            msg: "数据库数据同步更新成功！",
            tabledata,
          });
        }
      );
    } else if (req.body.operate === "删除信息") {
      const { workid } = req.body.record;
      let sqldelete = "DELETE  FROM user WHERE workid=?;SELECT * FROM user";
      connection(sqldelete, workid, (result) => {
        const tabledata = result[1];
        return res.send({
          status: 0,
          msg: "数据库数据删除成功！",
          tabledata,
        });
      });
    } else {
      // 添加数据
      const { workid, role } = req.body.newData;
      let sqladd = "INSERT INTO user(workid,role) VALUES(?);SELECT * FROM user";
      connection(sqladd, [[workid, role]], (result) => {
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
