module.exports = function dateFormat(dateData) {
  var date = new Date(dateData);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  const time = y + "-" + m + "-" + d;
  return time;
};
