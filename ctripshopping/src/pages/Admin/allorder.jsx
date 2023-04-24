import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Input, Popconfirm, Table, Modal } from "antd";
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
function Allorder(props) {
  const { adminFn } = props;
  let orderAll = JSON.parse(localStorage.getItem("orderAll"));
  orderAll = orderAll.map((item, index) => ({
    align: "center",
    key: index,
    orderid: item.orderid,
    status: item.status,
    workid: item.workid,
    location: item.locationname,
    kind: item.kind,
    name: item.username,
    price: item.price,
    coupon: item.coupon,
  }));
  // console.log(orderAll);
  const [dataSource, setDataSource] = useState(orderAll);
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
      title: "订单编号",
      dataIndex: "orderid",
      width: "15%",
      editable: true,
      sorter: (a, b) => a.workid - b.workid,
    },
    {
      align: "center",
      title: "状态",
      dataIndex: "status",
      width: "5%",
      // editable: true,
    },
    {
      align: "center",
      title: "下单工号",
      dataIndex: "workid",
      width: "6%",
      sorter: (a, b) => a.workid - b.workid,
    },
    {
      align: "center",
      title: "地点",
      dataIndex: "location",
      width: "10%",
    },
    {
      align: "center",
      title: "门票类型",
      dataIndex: "kind",
      width: "6%",
    },
    {
      align: "center",
      title: "游客姓名",
      dataIndex: "name",
      width: "6%",
      editable: true,
    },
    {
      align: "center",
      title: "票价",
      dataIndex: "price",
      width: "6%",
    },
    {
      align: "center",
      title: "优惠券",
      dataIndex: "coupon",
      width: "6%",
    },

    {
      align: "center",
      title: "操作",
      dataIndex: "operation",
      width: "5%",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="取消订单?"
            onConfirm={async () => {
              handleDelete(record.key);
              const operate = "取消订单";
              const { data } = await adminFn.orderAc({ operate, record });
              console.log(data);
              if (data.status === 0) {
                success(data.msg);
                localStorage.setItem("userAll", JSON.stringify(data.result[2]));
                localStorage.setItem(
                  "orderAll",
                  JSON.stringify(data.result[3])
                );
              }
            }}
          >
            <a>取消</a>
          </Popconfirm>
        ) : null,
    },
  ];

  // 修改数据
  const handleSave = async (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
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
export default connect(mapStateToProps, mapDispatchToProps)(Allorder);
