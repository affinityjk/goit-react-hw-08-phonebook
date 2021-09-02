import styled from "@emotion/styled/macro";

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 20px;
  background-color: whitesmoke;
  color: #ca1277;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: lightsteelblue;
    color: white;
    box-shadow: 0px 1px 12px 4px rgba(255, 255, 255, 0.3);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  color: darkblue;
  background-color: whitesmoke;
  border: 2px solid steelblue;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 14px;
  &:hover,
  &:focus {
    box-shadow: rgba(188, 188, 235, 0.3) 0px 2px 8px,
      rgba(188, 188, 235, 0.3) 0px 4px 12px,
      rgba(188, 188, 235, 0.3) 0px 8px 28px;
  }
`;
