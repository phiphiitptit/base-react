import { Button, Divider, Radio, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { ButtonCustom, Paragraph, TableGloabal } from "./styles";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
export const Dashboard = () => {
  const [time, setTime] = useState(0);
  const [isClick, setIsClick] = useState(true);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [selectionType, setSelectionType] = useState("checkbox");

  //   const handleChangeTime = () => {
  //     setTime(555);
  //   };

  useEffect(() => {
    if (!isFirstTime) {
      let time2 = time + 1;
      console.log(time);
      console.log("time", time);
      setTime(time2);
      console.log("click3");
    }
  }, [isClick]);

  // init first time
  useEffect(() => {
    setTime(555);
    console.log("click2");
    setIsFirstTime(false);
  }, []);

  console.log("time", time);

  const handleClickButton = () => {
    console.log("click4");
    // setTime(time + 1);
    setIsClick(!isClick);
  };
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
    },
  ]; // rowSelection object indicates the need for row selection
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <>
      {/* <Button
        className="button-dashboard"
        type="primary"
        onClick={(e) => handleClickButton()}
      >
        Primary
      </Button> */}
      <Content timer={time} handleClickButton={handleClickButton} />
      {/* <Button type="primary" onClick={(e) => handleClickButton()}>
        Primary 2
      </Button>
      <ButtonCustom type="primary" onClick={(e) => handleClickButton()}>
        Primary 3
      </ButtonCustom> */}
      <div>
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group>

        <Divider />

        <TableGloabal
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  );
};
