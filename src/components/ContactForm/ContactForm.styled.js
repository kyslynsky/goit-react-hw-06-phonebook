import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 7px;
  font-weight: 500;

  &:hover {
    color: #007fff;
  }
`;

export const Input = styled.input`
  margin-top: 3px;
  padding: 5px 7px 5px;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -5px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:hover,
  &:focus {
    outline: 1px solid #007fff;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const Button = styled.button`
  width: 105px;
  padding: 7px;
  margin-top: 12px;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.3;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  &:hover,
  &:focus {
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
