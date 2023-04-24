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
function Pictureshow(props) {
  const { adminFn } = props;
  let pictureAll = JSON.parse(localStorage.getItem("pictureAll"));
  pictureAll = pictureAll.map((item, index) => ({
    key: index,
    authorid: item.authorid,
    thumb: item.thumb,
    name: item.name,
    theme: item.theme,
    picture:
      item.url === null ? (
        ""
      ) : (
        <img
          src={item.url}
          alt="图片"
          style={{ minWidth: "10rem", maxHeight: "10rem" }}
        />
      ),
    url: item.url,
  }));

  const [dataSource, setDataSource] = useState(pictureAll);
  const [count, setCount] = useState(pictureAll.length);
  const [authorid, setauthorid] = useState(
    pictureAll[pictureAll.length - 1].authorid
  );
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
      dataIndex: "authorid",
      width: "5%",
      editable: true,
      sorter: (a, b) => a.authorid - b.authorid,
    },
    {
      align: "center",
      title: "姓名",
      dataIndex: "name",
      width: "5%",
      editable: true,
    },
    {
      align: "center",
      title: "点赞量",
      dataIndex: "thumb",
      width: "5%",
      sorter: (a, b) => a.balance - b.balance,
      editable: true,
    },
    {
      align: "center",
      title: "主题",
      dataIndex: "theme",
      width: "7%",
      editable: true,
    },
    {
      align: "center",
      title: "图片",
      dataIndex: "picture",
      width: "12%",
    },
    {
      align: "center",
      title: "地址",
      dataIndex: "url",
      width: "13%",
      editable: true,
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
              const { data } = await adminFn.pictureAc({ operate, record });
              console.log(data);
              if (data.status === 0) {
                success(data.msg);
                localStorage.setItem(
                  "pictureAll",
                  JSON.stringify(data.tabledata)
                );
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
      authorid: authorid + 1,
    };
    const operate = "添加信息";
    const { data } = await adminFn.pictureAc({ operate, newData });
    console.log(data);
    if (data.status === 0) {
      success(data.msg);
      localStorage.setItem("pictureAll", JSON.stringify(data.tabledata));
    }
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    setauthorid(authorid + 1);
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
    const { data } = await adminFn.pictureAc({ operate, row });
    console.log(data);

    if (data.status === 0) {
      success(data.msg);
      localStorage.setItem("pictureAll", JSON.stringify(data.tabledata));
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
        align: "center",
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
export default connect(mapStateToProps, mapDispatchToProps)(Pictureshow);
