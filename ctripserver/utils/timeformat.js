module.exports = function timeFormat(dateData) {
  var date = new Date(dateData);
  var y = date.getFullYear();
  var M = date.getMonth() + 1;
  M = M < 10 ? "0" + M : M;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  h = h < 10 ? "0" + h : h;
  var m = date.getMinutes();
  m = m < 10 ? "0" + m : m;

  const time = y + "-" + M + "-" + d + " " + h + ":" + m;
  return time;
};
