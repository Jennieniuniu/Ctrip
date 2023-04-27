const db = require("../db");
const dateFormat = require("../utils/dateformat");
const connection = require("../db/multiconnection");
// 选购门票信息
module.exports = (req, res) => {
  if (req.body.hasOwnProperty("chooseDate")) {
    const choosedate = dateFormat(req.body.chooseDate);
    let sql = "SELECT * FROM ticket WHERE name=? and date=?";
    db(sql, [req.body.selectlocation, choosedate], (result) => {
      return res.send(result);
    });
  } else {
    const defaultdate = dateFormat(new Date());
    // 返回选择地点当天的票价数据
    let sqlnow =
      "SELECT * FROM ticket WHERE name=? and date=?;SELECT * FROM myorder WHERE status='未支付'";
    connection(sqlnow, [req.body.selectlocation, defaultdate], (result) => {
      if (result[1].length === 0) {
        const data = result[0];
        return res.send({ status: 0, data });
      } else {
        return res.send({
          status: 1,
          msg: "当前有订单尚未完成！请去我的订单处理未支付订单~",
        });
      }
    });
  }
};
