import { Button } from "antd";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [time, setTime] = useState(0);
  const [isClick, setIsClick] = useState(true);
  const [isFirstTime, setIsFirstTime] = useState(true);

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
  return (
    <>
      <Button type="primary" onClick={(e) => handleClickButton()}>
        Primary
      </Button>
      <p> you click {time} times</p>
    </>
  );
};
