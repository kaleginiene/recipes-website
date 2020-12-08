import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 0.5em;
  height: ${(props) => props.theme.primary.height};
  margin: 1em 0;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 0.5em;
  margin: 1em 0;
  &&:focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 5px;
`;
export const Radio = styled.input`
  width: 15px;
  margin-right: 10px;
  margin-left: 5px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  margin: 10px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.primary.color};
  font-size: 0.8em;
  text-align: right;
  margin-top: 2em;
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-top: 2em;
  }
`;
