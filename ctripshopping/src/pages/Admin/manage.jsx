import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table, Modal } from "antd";
// redux配置
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as adminActionCreator } from "./adminstore";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
function Manage(props) {
  const { adminFn } = props;
  let userAll = JSON.parse(localStorage.getItem("userAll"));
  userAll = userAll.map((item, index) => ({
    key: index,
    workid: item.workid,
    name: item.username,
    balance: item.balance,
    coupon: item.coupon,
    cardid: item.cardid,
    phone: item.phone,
    email: item.email,
    role: item.role,
  }));
  // console.log(userAll);
  const [dataSource, setDataSource] = useState(userAll);
  const [count, setCount] = useState(2);
  const success = (msg) => {
    Modal.success({
      title: "数据操作",
      content: msg,
    });
  };
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: "工号",
      dataIndex: "workid",
      width: "10%",
      editable: true,
      sorter: (a, b) => a.workid - b.workid,
    },
    {
      title: "姓名",
      dataIndex: "name",
      width: "10%",
      editable: true,
    },
    {
      title: "余额",
      dataIndex: "balance",
      width: "8%",
      editable: true,
      sorter: (a, b) => a.balance - b.balance,
    },
    {
      title: "优惠券",
      dataIndex: "coupon",
      width: "7%",
      editable: true,
      sorter: (a, b) => a.coupon - b.coupon,
    },
    {
      title: "身份证",
      dataIndex: "cardid",
      width: "20%",
      editable: true,
      sorter: (a, b) => a.cardid - b.cardid,
    },
    {
      title: "手机号",
      dataIndex: "phone",
      width: "13%",
      editable: true,
    },
    {
      title: "邮箱",
      dataIndex: "email",
      width: "12%",
      editable: true,
    },
    {
      title: "角色",
      dataIndex: "role",
      width: "10%",
      editable: true,
      filters: [
        {
          text: "管理员",
          value: "管理员",
        },
        {
          text: "员工",
          value: "员工",
        },
      ],
      onFilter: (value, record) => record.role.startsWith(value),
      filterSearch: true,
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: "5%",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="确认删除?"
            onConfirm={async () => {
              handleDelete(record.key);
              const operate = "删除信息";
              const { data } = await adminFn.adminAc({ operate, record });
              console.log(data);
              if (data.status === 0) {
                success(data.msg);
                localStorage.setItem("userAll", JSON.stringify(data.tabledata));
              }
            }}
          >
            <a>删除</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: { count },
      workid: "1310",
      name: "刘雅洁",
      balance: "1000",
      coupon: "20",
      cardid: "321023199806280226",
      phone: "19822715316",
      email: "lyjennie@163.com",
      role: "管理员",
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  // 修改数据
  const handleSave = async (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    const operate = "修改信息";
    console.log(index, row);
    setDataSource(newData);
    const { data } = await adminFn.adminAc({ operate, row });
    console.log(data);

    if (data.status === 0) {
      success(data.msg);
      localStorage.setItem("userAll", JSON.stringify(data.tabledata));
    }
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        添加
      </Button>
      <Table
        size="small"
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
        scroll={{
          // x: 500,
          y: "calc(1000px + 50%)",
        }}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    adminData: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adminFn: bindActionCreators(adminActionCreator, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Manage);
