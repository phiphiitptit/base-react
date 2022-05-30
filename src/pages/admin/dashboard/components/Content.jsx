import { Button } from "antd";
import { Paragraph } from "../styles";

export const Content = ({ timer, handleClickButton }) => {
  const clickinFunc = () => {
    handleClickButton();
    //fun2
    //fun3
  };
  return (
    <>
      <p>ahihi</p>
      <Button onClick={() => clickinFunc()}>Click me</Button>
      <Paragraph value={2}> you click {timer} times</Paragraph>
    </>
  );
};
