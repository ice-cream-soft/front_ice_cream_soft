import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  background: #000000aa;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 800px;

  background: #fff;
  border-radius: 8px;

  padding: 2rem 0;
  position: relative;

  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: #e7e7e7;
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c9c9c9;
  }

  .close {
    position: absolute;
    right: 25px;
    top: 25px;

    font-size: 25px;
    color: #1a1a1a;

    cursor: pointer;
  }

  h3 {
    margin: 0.5rem 0 0;
    padding: 0.5rem 1rem;
    color: #1a1a1a;
    border-bottom: 1px solid #e7e7e7;
  }

  .textarea {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;

    textarea {
      width: 100%;
      padding: 20px;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0.5rem 1rem 0 1rem;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  span,
  label {
    color: #1a1a1a;
  }

  input {
    margin-right: 0.5rem;
  }

  label {
    display: flex;
    align-items: center;
    margin: 0.25rem 0;

    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0.5rem 0 0.25rem;
  padding: 0.5rem 1rem;
  background: #d9edf7;

  h4,
  p {
    color: #1a1a1a;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;

  width: 100%;

  color: #3a4c55;
`;

export const Subtitle = styled.h5`
  display: flex;
  justify-content: center;

  width: 100%;

  font-size: 1rem;

  color: #4caf50;
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;

  margin: 1rem;
  border-radius: 8px;
  border: 1px solid #646464;

  color: #1a1a1a;
  overflow: hidden;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    border: none;

    background: #f54f48;

    font-size: 2rem;
    color: #fff;

    &.more {
      background: #4caf50;
    }
  }

  .quantity_display {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const ModalSettings = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 0;

  button {
    width: 100%;
    max-width: 200px;
    padding: 1rem 0.5rem;
    cursor: pointer;

    border: none;
    border-radius: 8px;

    & + button {
      background: #4caf50;
      color: #fff;
    }
  }
`;
