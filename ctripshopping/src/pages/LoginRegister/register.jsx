import React, { useState } from "react";
import { Alert, Button, Radio, Form, Input } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  PhoneOutlined,
  MailOutlined,
  CrownOutlined,
} from "@ant-design/icons";

// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as registerActionCreator } from "./registerstore";
// 路由
import { useNavigate } from "react-router-dom";

// ===================================注册模块========================================
function Register(props) {
  const { registerFn } = props;
  const navigate = useNavigate();
  const [errMsg, seterrMsg] = useState(null);
  const [successMsg, setsuccessMsg] = useState(null);
  // 角色选择
  const options = ["员工", "管理员"];
  const [rolevalue, setRoleValue] = useState("员工");
  const onChange = ({ target: { value } }) => {
    setRoleValue(value);
  };
  // 注册提交
  const onFinish = async (values) => {
    values.role = rolevalue;
    // console.log(values)
    const { data } = await registerFn.registerAc(values);
    // console.log(data);
    // console.log(data.status);
    switch (data.status) {
      case 0:
        seterrMsg((errMsg) => (errMsg = null));
        setsuccessMsg((successMsg) => (successMsg = "注册成功！"));
        navigate("/login");
        break;
      case 1:
        setsuccessMsg((successMsg) => (successMsg = null));
        seterrMsg((errMsg) => (errMsg = "用户不存在！"));
        break;
      case 2:
        setsuccessMsg((successMsg) => (successMsg = null));
        seterrMsg((errMsg) => (errMsg = "角色身份选择有误！"));
        break;
      default:
        console.log("注册失败！");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("注册失败");
  };

  return (
    <div className="login">
      <Form
        className="login-form"
        wrapperCol={{ span: 24 }}
        style={{ width: "15rem" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* 用户名 */}
        <Form.Item
          name="workid"
          style={{ margin: "0.5rem 0" }}
          rules={[
            {
              required: true,
              message: "请输入你的用户名!",
            },
            {
              pattern: /^[a-zA-Z0-9]{4,12}$/,
              message: "用户名必须是4-12位的英文、数字组成!",
            },
          ]}
        >
          <Input placeholder="用户名" prefix={<UserOutlined />} />
        </Form.Item>

        {/* 密码 */}
        <Form.Item
          name="password"
          style={{ margin: "0.5rem 0" }}
          rules={[
            {
              required: true,
              message: "请输入你的密码!",
            },
            {
              pattern: /^[a-zA-Z0-9]{4,12}$/,
              message: "密码必须是4-12位的英文、数字组成!",
            },
          ]}
        >
          <Input.Password
            placeholder="密码"
            prefix={<KeyOutlined />}
            autoComplete="off"
          />
        </Form.Item>

        {/* 身份证 */}
        <Form.Item
          name="cardid"
          style={{ margin: "0.5rem 0" }}
          rules={[
            {
              required: true,
              message: "请输入你的身份证号!",
            },
            {
              pattern: /^\d{17}(\d|X|x)$/,
              message: "请输入正确的身份证号!",
            },
          ]}
        >
          <Input placeholder="身份证号" prefix={<CrownOutlined />} />
        </Form.Item>

        {/* 手机号 */}
        <Form.Item
          name="phone"
          style={{ margin: "0.5rem 0" }}
          rules={[
            {
              required: true,
              message: "请输入你的手机号!",
            },
            {
              pattern: /^\d{11}$/,
              message: "请输入正确手机号!",
            },
          ]}
        >
          <Input placeholder="手机号" prefix={<PhoneOutlined />} />
        </Form.Item>

        {/* 邮箱 */}
        <Form.Item
          name="email"
          style={{ margin: "0.5rem 0 0.3rem" }}
          rules={[
            {
              required: true,
              message: "请输入你的邮箱地址!",
            },
            {
              pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
              message: "请输入正确邮箱地址格式!",
            },
          ]}
        >
          <Input placeholder="邮箱" prefix={<MailOutlined />} />
        </Form.Item>

        {/* 角色 */}
        <Form.Item
          name="role"
          style={{
            margin: "0.3rem 0 0",
            display: "flex",
            justifyContent: "center",
          }}
          valuePropName="checked"
          wrapperCol={{
            span: 24,
          }}
        >
          <Radio.Group
            options={options}
            value={rolevalue}
            onChange={onChange}
          />
        </Form.Item>

        {/* 注册 */}
        <Form.Item
          style={{
            margin: "0",
          }}
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
              margin: "0",
            }}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
      {/* 提示报错信息 */}
      {errMsg == null ? null : <Alert type="error" message={errMsg} showIcon />}
      {successMsg == null ? null : (
        <Alert type="success" message={successMsg} showIcon />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    RegisterData: state.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerFn: bindActionCreators(registerActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
