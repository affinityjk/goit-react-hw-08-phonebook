import styled from "@emotion/styled/macro";

export const List = styled.ul`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  padding: 10px 12px;
  background-color: whitesmoke;
  border: 2px solid steelblue;
  border-radius: 5px;
  animation: scaleIn 1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
    box-shadow: rgba(188, 188, 235, 0.3) 0px 2px 8px,
      rgba(188, 188, 235, 0.3) 0px 4px 12px,
      rgba(188, 188, 235, 0.3) 0px 8px 28px;
  }

  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media screen and (min-width: 425px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;

  font-size: 12px;
  font-weight: 700;
  color: whitesmoke;
  background-color: steelblue;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #ca1277;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 425px) {
    min-width: 80px;
    padding: 4px 10px;
  }
  @media screen and (min-width: 768px) {
    min-width: 150px;
    padding: 8px 12px;
  }
`;

export const Div = styled.div`
  color: steelblue;
  & > svg {
    color: steelblue;
    width: 20px;
    margin-right: 3px;
  }

  &:not(:last-child) {
    text-transform: capitalize;
    color: #ca1277;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 725px) {
    & > svg {
      width: 25px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 768px) {
    & > svg {
      width: 35px;
    }
  }
`;
