import styled, { css } from "styled-components";
import { Button, Table } from "antd";
export const Paragraph = styled.p`
  //   color: ${(props) => (props.value == 1 ? "red" : "blue")};
  font-size: 18px;
  ${(props) =>
    props.value == 1
      ? css`
          color: red;
          font-weight: bold;
          font-size: 8px;
        `
      : css`
          color: blue;
          font-size: 38px;
        `}
`;

export const ButtonCustom = styled(Button)`
  background-color: black;
  &.ant-btn-primary:hover {
    background: red !important;
  }
`;

export const TableGloabal = styled(Table)`
  .ant-table-thead tr th {
    color: red;
  }
`;
