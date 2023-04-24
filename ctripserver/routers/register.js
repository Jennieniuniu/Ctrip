const db = require("../db");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
  // 1.查询用户名是否存在
  const sql = "SELECT * FROM user WHERE workid=?";
  db(sql, req.body.workid, (result) => {
    if (result.length === 0) {
      return res.send({
        status: 1,
        msg: "用户不存在！",
      });
    }
    // 2.查询用户名角色是否匹配
    const sqlRole = "SELECT * FROM user WHERE workid=? AND role=?";
    db(sqlRole, [req.body.workid, req.body.role], (result) => {
      if (result.length === 0) {
        return res.send({
          status: 2,
          msg: "用户角色不匹配！",
        });
      }
      // 3.更新注册用户和密码加密
      const sqlRegister =
        "UPDATE user SET password=?,cardid=?,phone=?,email=? WHERE workid=?";
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const { workid, password, cardid, phone, email } = req.body;
      db(sqlRegister, [password, cardid, phone, email, workid], (result) => {
        res.send({
          status: 0,
          msg: "注册成功！",
        });
      });
    });
  });
};
