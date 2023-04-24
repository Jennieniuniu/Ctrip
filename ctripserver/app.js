const { urlencoded } = require("express");
const express = require("express");
const app = express();

//  解析传过来的application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
//  解析传过来的application/json
app.use(express.json());

app.use("/api/register", require("./routers/register"));
app.use("/api/login", require("./routers/login"));
app.use("/api/ticket", require("./routers/ticket"));
app.use("/api/ticketdetail", require("./routers/ticketdetail"));
app.use("/api/order", require("./routers/order"));
app.use("/api/orderdetail", require("./routers/orderdetail"));
app.use("/api/likeadd", require("./routers/likeadd"));
app.use("/api/information", require("./routers/information"));
app.use("/api/adminorder", require("./routers/adminorder"));
app.use("/api/picture", require("./routers/picture"));
app.listen(8080, () => console.log("Server running on http://localhost:8080"));
