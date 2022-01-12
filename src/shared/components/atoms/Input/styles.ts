import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(102, 99, 96);
  border: 2px solid #ffffff;

  input {
    flex: 1 1 0%;
    background: transparent;
    border: 0px;
    color: #321409;

    &::placeholder {
      color: #242424;
    }
  }
`;
