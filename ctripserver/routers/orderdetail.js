const db = require("../db/");
const connection = require("../db/multiconnection");

// 订单的修改信息、去支付、取消订单功能
module.exports = (req, res) => {
  if (req.body.hasOwnProperty("operate")) {
    if (req.body.operate === "取消订单") {
      const { status, workid, orderid, orderprice, ordercoupon } = req.body;
      let cost = orderprice - ordercoupon < 0 ? 0 : orderprice - ordercoupon;
      if (status === "已支付") {
        let sqlOrderCancel =
          "DELETE FROM myorder WHERE orderid=?;UPDATE user SET balance=balance+?,coupon=coupon+? WHERE workid=?;SELECT * FROM user WHERE workid=?;SELECT * FROM myorder WHERE workid=?";
        connection(
          sqlOrderCancel,
          [orderid, cost, ordercoupon, workid, workid, workid],
          (result) => {
            if (result[3].length === 0) {
              result[3] = ["暂无订单，快去选购吧！"];
            }
            return res.send(result);
          }
        );
      } else {
        let sqlOrderCancel =
          "DELETE FROM myorder WHERE orderid=?;UPDATE user SET balance=balance,coupon=coupon WHERE workid=?;SELECT * FROM user WHERE workid=?;SELECT * FROM myorder WHERE workid=?";
        connection(
          sqlOrderCancel,
          [orderid, workid, workid, workid],
          (result) => {
            if (result[3].length === 0) {
              result[3] = ["暂无订单，快去选购吧！"];
            }
            return res.send(result);
          }
        );
      }
    }
    if (req.body.operate === "修改订单") {
      const { orderid, name, phone, cardid, workid } = req.body;
      const sqlOrderCancel =
        "UPDATE myorder SET username=?,userphone=?,usercardid=? WHERE orderid=?;SELECT * FROM user WHERE workid=?;SELECT * FROM myorder WHERE workid=?";
      connection(
        sqlOrderCancel,
        [name, phone, cardid, orderid, workid, workid],
        (result) => {
          if (result[2].length === 0) {
            result[2] = ["暂无订单，快去选购吧！"];
          }
          return res.send(result);
        }
      );
    }
    if (req.body.operate === "去支付") {
      const { orderid, price, coupon, workid } = req.body;
      let cost = price - coupon < 0 ? 0 : price - coupon;
      const sqlOrderCancel =
        "UPDATE myorder SET status=? WHERE orderid=?;UPDATE user SET balance=balance-?,coupon=coupon-? WHERE workid=?;SELECT * FROM user WHERE workid=?;SELECT * FROM myorder WHERE workid=?";
      connection(
        sqlOrderCancel,
        ["已支付", orderid, cost, coupon, workid, workid, workid],
        (result) => {
          if (result[3].length === 0) {
            result[3] = ["暂无订单，快去选购吧！"];
          }
          return res.send(result);
        }
      );
    }
  } else {
    // 我的订单页所有信息
    const { workid } = req.body;
    const sqlOrderDetail =
      "SELECT * FROM user WHERE workid=?;SELECT * FROM myorder WHERE workid=?;SELECT * FROM picture ORDER BY thumb DESC";
    connection(sqlOrderDetail, [workid, workid], (result) => {
      if (result[1].length === 0) {
        result[1] = ["暂无订单，快去选购吧！"];
      }
      return res.send(result);
    });
  }
};
