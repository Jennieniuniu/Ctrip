const connection = require("../db/multiconnection");

// 管理员取消订单
module.exports = (req, res) => {
  if (req.body.hasOwnProperty("operate")) {
    if (req.body.operate === "取消订单") {
      const { workid, orderid, price, coupon } = req.body.record;
      const sqlOrderCancel =
        "DELETE FROM myorder WHERE orderid=?;UPDATE user SET balance=balance+?,coupon=coupon+? WHERE workid=?;SELECT * FROM user;SELECT * FROM myorder";
      connection(sqlOrderCancel, [orderid, price, coupon, workid], (result) => {
        return res.send({
          status: 0,
          msg: "订单取消成功！",
          result,
        });
      });
    }
  }
};
