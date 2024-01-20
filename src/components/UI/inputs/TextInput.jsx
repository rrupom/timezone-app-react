import styled from "styled-components";

const TextInput = styled.input`
  width: inherit;
  border: ${(props) => (props.error ? "2px solid red" : "1px slid #232323")};
  outline: none;
  padding: 0.25rem 1rem;
  background: transparent;
  font-size: 0.9rem;
  color: #333;
  &:focus {
    border: 2px solid skyblue;
  }
`;

export default TextInput;
