const db = require("../db");

module.exports = (req, res) => {
  if (req.body.hasOwnProperty("operate")) {
    const { operate } = req.body;
    // 1.搜索操作
    if (operate === "search") {
      const { value, dbname, select } = req.body;
      // 判断搜哪个表
      let sql =
        typeof dbname === "number"
          ? "SELECT * FROM location WHERE location=? AND name LIKE " +
            "'%" +
            `${value}` +
            "%'"
          : "SELECT * FROM location WHERE theme=? and name LIKE " +
            "'%" +
            `${value}` +
            "%'";
      db(sql, select, (result) => {
        if (result.length === 0) {
          return res.send({
            status: 1,
            msg: "无效搜索内容！",
          });
        }
        return res.send(result);
      });
    }
    // 2.价格排序
    if (operate === "priceRank") {
      const { value, dbname, select } = req.body;
      // 判断搜哪个表
      let sqlASC =
        typeof dbname === "number"
          ? "SELECT * FROM location WHERE location=? ORDER BY price ASC"
          : "SELECT * FROM location WHERE theme=? ORDER BY price ASC";
      let sqlDESC =
        typeof dbname === "number"
          ? "SELECT * FROM location WHERE location=? ORDER BY price DESC"
          : "SELECT * FROM location WHERE theme=? ORDER BY price DESC";
      if (value === "priceAscend") {
        db(sqlASC, select, (result) => {
          return res.send(result);
        });
      } else {
        db(sqlDESC, select, (result) => {
          return res.send(result);
        });
      }
    }
    // 3.评分排序
    if (operate === "scoreRank") {
      const { value, dbname, select } = req.body;
      // 判断搜哪个表
      let sqlASC =
        typeof dbname === "number"
          ? "SELECT * FROM location WHERE location=? ORDER BY score ASC"
          : "SELECT * FROM location WHERE theme=? ORDER BY score ASC";

      let sqlDESC =
        typeof dbname === "number"
          ? "SELECT * FROM location WHERE location=? ORDER BY score DESC"
          : "SELECT * FROM location WHERE theme=? ORDER BY score DESC";
      if (value === "scoreAscend") {
        db(sqlASC, select, (result) => {
          return res.send(result);
        });
      } else {
        db(sqlDESC, select, (result) => {
          return res.send(result);
        });
      }
    }
    // 3.综合排序
    if (operate === "firstRank") {
      const { value, dbname, select } = req.body;
      // 判断搜哪个表
      let sqlPrice =
        typeof dbname === "number"
          ? "SELECT * FROM location WHERE location=? ORDER BY price ASC,score DESC"
          : "SELECT * FROM location WHERE theme=? ORDER  BY price ASC,score DESC";
      let sqlScore =
        typeof dbname === "number"
          ? "SELECT * FROM location WHERE location=? ORDER  BY score DESC,price ASC"
          : "SELECT price FROM location WHERE theme=? ORDER  BY score DESC,price ASC";
      if (value === "priceFirst") {
        db(sqlPrice, select, (result) => {
          return res.send(result);
        });
      } else {
        db(sqlScore, select, (result) => {
          return res.send(result);
        });
      }
    }
  }
  // 返回选择地点的票数据
  let sql =
    typeof req.body.kind === "number"
      ? "SELECT * FROM location WHERE location=?"
      : "SELECT * FROM location WHERE theme=?";
  db(sql, req.body.select, (result) => {
    return res.send(result);
  });
};
