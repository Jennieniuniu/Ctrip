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
function Information(props) {
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
  const [count, setCount] = useState(userAll.length);
  const [workid, setWorkid] = useState(userAll[userAll.length - 1].workid);
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
      align: "center",
      title: "工号",
      dataIndex: "workid",
      width: "10%",
      editable: true,
      sorter: (a, b) => a.workid - b.workid,
    },
    {
      align: "center",
      title: "姓名",
      dataIndex: "name",
      width: "10%",
      editable: true,
    },
    {
      align: "center",
      title: "余额",
      dataIndex: "balance",
      width: "8%",
      editable: true,
      sorter: (a, b) => a.balance - b.balance,
    },
    {
      align: "center",
      title: "优惠券",
      dataIndex: "coupon",
      width: "8%",
      editable: true,
      sorter: (a, b) => a.coupon - b.coupon,
    },
    {
      align: "center",
      title: "身份证",
      dataIndex: "cardid",
      width: "20%",
      editable: true,
      sorter: (a, b) => a.cardid - b.cardid,
    },
    {
      align: "center",
      title: "手机号",
      dataIndex: "phone",
      width: "13%",
      editable: true,
    },
    {
      align: "center",
      title: "邮箱",
      dataIndex: "email",
      width: "18%",
      editable: true,
    },
    {
      align: "center",
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
      align: "center",
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
  const handleAdd = async () => {
    const newData = {
      key: count + 1,
      workid: workid + 1,
      name: "姓名 ",
      balance: "余额 ",
      coupon: "优惠券",
      cardid: "身份证",
      phone: "手机",
      email: "邮箱",
      role: "员工",
    };
    const operate = "添加信息";
    const { data } = await adminFn.adminAc({ operate, newData });
    // console.log(data);
    if (data.status === 0) {
      success(data.msg);
      localStorage.setItem("userAll", JSON.stringify(data.tabledata));
    }
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    setWorkid(workid + 1);
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
        align: "center",
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
export default connect(mapStateToProps, mapDispatchToProps)(Information);
