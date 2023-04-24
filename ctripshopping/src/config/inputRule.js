const nameRule = [
  {
    required: true,
    message: "请输入姓名!",
  },
];
const phoneRule = [
  {
    required: true,
    message: "请输入手机号!",
  },
  {
    pattern: /^\d{11}$/,
    message: "请输入正确手机号!",
  },
];
const cardidRule = [
  {
    required: true,
    message: "请输入身份证号!",
  },
  {
    pattern: /^\d{17}(\d|X|x)$/,
    message: "请输入正确的身份证号!",
  },
];
export { nameRule, phoneRule, cardidRule };
