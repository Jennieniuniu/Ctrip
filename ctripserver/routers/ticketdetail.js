const db = require("../db");
const dateFormat = require("../utils/dateformat");

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
    let sqlnow = "SELECT * FROM ticket WHERE name=? and date=?";
    db(sqlnow, [req.body.selectlocation, defaultdate], (result) => {
      return res.send(result);
    });
  }
};
