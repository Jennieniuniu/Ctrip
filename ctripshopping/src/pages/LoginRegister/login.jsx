import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as loginActionCreator } from "./loginstore";
// 路由
import { useNavigate } from "react-router-dom";
// jwt解析token
import decode from "jwt-decode";
// ========================================登陆模块=======================================
function Login(props) {
  const { loginFn } = props;
  const navigate = useNavigate();
  // 发送请求报错信息
  const [errMsg, seterrMsg] = useState(null);
  // 提交登陆信息
  const onFinish = async (values) => {
    const { data } = await loginFn.loginAc(values);

    switch (data.status) {
      case 0:
        seterrMsg((errMsg) => (errMsg = null));
        // 存储TOKEN到本地
        localStorage.setItem("@#@TOKEN", data.token);
        // 同步用户状态和用户信息到Redux
        loginFn.syncInfoAc(decode(data.token));
        if (decode(data.token).role === "员工") {
          // 存储图片到本地
          localStorage.setItem("pictureAll", JSON.stringify(data.pictureAll));
          localStorage.setItem("localBalance", decode(data.token).balance);
          localStorage.setItem("localCoupon", decode(data.token).coupon);
          // 登录成功跳转
          navigate("/user");
        } else {
          // 存储信息到本地
          localStorage.setItem("localBalance", decode(data.token).balance);
          localStorage.setItem("localCoupon", decode(data.token).coupon);
          localStorage.setItem("pictureAll", JSON.stringify(data.pictureAll));
          localStorage.setItem("userAll", JSON.stringify(data.userAll));
          localStorage.setItem("orderAll", JSON.stringify(data.orderAll));
          // 登录成功跳转
          navigate("/admin");
        }
        break;
      case 1:
        seterrMsg((errMsg) => (errMsg = "用户不存在！"));
        break;
      case 2:
        seterrMsg((errMsg) => (errMsg = "用户密码有误！"));
        break;
      default:
        console.log("登录失败！");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <div className="login">
      <Form
        className="login-form"
        wrapperCol={{
          span: 24,
        }}
        style={{
          width: "15rem",
          height: "10rem",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="workid"
          style={{
            margin: "0.5rem 0",
          }}
          // 声明式验证
          rules={[
            {
              required: true,
              message: "请输入你的用户名!",
            },
            {
              pattern: /^[a-zA-Z0-9]{4,12}$/,
              message: "请注意用户名输入格式!",
            },
          ]}
        >
          <Input placeholder="用户名" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
          style={{
            margin: "0.5rem 0 0",
          }}
          rules={[
            {
              required: true,
              message: "请输入你的密码!",
            },
            {
              pattern: /^[a-zA-Z0-9]{4,12}$/,
              message: "请注意密码输入格式!",
            },
          ]}
        >
          <Input.Password
            placeholder="密码"
            prefix={<KeyOutlined />}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="remember"
          style={{
            margin: "0.5rem 0 0",
          }}
          valuePropName="checked"
          wrapperCol={{
            span: 24,
          }}
        >
          <Checkbox>自动登录</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              width: "100%",

              margin: "0.5rem 0 0",
            }}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
      {errMsg == null ? null : <Alert type="error" message={errMsg} showIcon />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loginData: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFn: bindActionCreators(loginActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
