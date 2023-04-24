const db = require("../db/");
const connection = require("../db/multiconnection");
const timeFormat = require("../utils/timeformat");

// 未支付订单和支付订单 与数据库同步
module.exports = (req, res) => {
  const { orderStatusStr } = req.body;
  let multiValues = [];

  if (orderStatusStr == "未支付") {
    const { selectInfo, ticketChooseInfo, userInfoArr, userData } = req.body;
    ticketChooseInfo.ticketAll.map((item, index) => {
      // 预定订单编号 下单时间+workid
      let datecode = new Date().getTime();
      let orderid = "" + datecode + index + userData.workid;

      multiValues.push([
        orderid,
        userData.workid,
        orderStatusStr,
        selectInfo.name,
        item,
        1,
        ticketChooseInfo.priceArr[index],
        index == 0 ? userData.coupon : 0,
        ticketChooseInfo.ticketStr,
        ticketChooseInfo.ticketDate,
        userInfoArr[index * 3],
        userInfoArr[index * 3 + 1],
        userInfoArr[index * 3 + 2],
      ]);
    });

    let sqlUnpay =
      " INSERT INTO myorder(orderid,workid,status,locationname,kind,number,price,coupon,numStr,date,username,userphone,usercardid) VALUES(?) ";
    multiValues.map((item, index) => {
      if (index != 0) sqlUnpay += ",(?)";
    });

    db(sqlUnpay, multiValues, (result) => {
      return res.send(result);
    });
  }

  if (orderStatusStr == "已支付") {
    const { newBalance, newCoupon, workid } = req.body;
    // 支付时间
    let paydate = timeFormat(new Date());
    const sqlMyOrder =
      "UPDATE user SET balance=?,coupon=? WHERE workid=?;UPDATE myorder SET status=?,paydate=? WHERE workid=?";
    connection(
      sqlMyOrder,
      [newBalance, newCoupon, workid, orderStatusStr, paydate, workid],
      () => {
        return res.send({
          status: "支付过啦！",
        });
      }
    );
  }
};
