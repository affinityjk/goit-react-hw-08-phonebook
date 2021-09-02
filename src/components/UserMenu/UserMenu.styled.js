import styled from "@emotion/styled/macro";

export const MenuWrapper = styled.div`
  display: flex;
  color: #ca1277;
  align-items: center;
  & > p {
    display: none;
  }
  @media screen and (min-width: 768px) {
    & > p {
      display: block;
      font-size: 12px;
      font-weight: 500;
      text-transform: capitalize;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 700;
  background-color: steelblue;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #ca1277;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
`;
