import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const NameLabel = styled.label`
  margin-bottom: 10px;
`;

export const NameInput = styled.input`
  width: 300px;
  margin-bottom: 10px;
`;

export const AddContactBtn = styled.button`
  max-width: 120px;
  padding: 5px;
  border-radius: 4px;
  border: none;
  transition: 300ms;
  &:hover {
    color: #ffffff;
    background-color: #343434;
    outline: 1px solid #242424;
  }
`;
