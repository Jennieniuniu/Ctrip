const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const connection = require("../db/multiconnection");

module.exports = (req, res) => {
  // 1.查询用户名是否存在
  const sql =
    "SELECT * FROM user WHERE workid=?;SELECT * FROM picture;SELECT * FROM user;SELECT * FROM myorder";
  connection(sql, [parseInt(req.body.workid)], (result) => {
    if (result[0].length === 0) {
      return res.send({
        status: 1,
        msg: "用户不存在！",
      });
    }
    // 2.查询用户名登陆密码是否正确
    const psRes = bcrypt.compareSync(req.body.password, result[0][0].password);
    if (!psRes) {
      return res.send({
        status: 2,
        msg: "密码错误",
      });
    }
    // 判断用户是员工还是管理员
    if (result[0][0].role === "员工") {
      // 3. 根据用户信息生成 token
      const token = jwt.sign({ ...result[0][0] }, config.jwtKey, {
        expiresIn: "1h",
      });
      const pictureAll = result[1];
      res.send({
        status: 0,
        msg: "员工登录成功！",
        token,
        pictureAll,
      });
    } else {
      // 3. 根据用户信息生成 token
      const token = jwt.sign({ ...result[0][0] }, config.jwtKey, {
        expiresIn: "1h",
      });
      const pictureAll = result[1];
      const userAll = result[2];
      const orderAll = result[3];
      res.send({
        status: 0,
        msg: "管理员登录成功！",
        token,
        pictureAll,
        userAll,
        orderAll,
      });
    }
  });
};
