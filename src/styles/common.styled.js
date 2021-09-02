import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
import { Form, Field } from "formik";

export const NavWrap = styled.div`
  & > a:first-of-type {
    margin-right: 10px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &:hover,
  &:focus {
    color: steelblue;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 35px 20px;
  border: 5px solid steelblue;
  border-radius: 5px;
  background-color: lightsteelblue;

  @media screen and (min-width: 425px) {
    width: 325px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 30px;
    width: 420px;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: purple;
  font-size: 20px;
  @media screen and (min-width: 425px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 8px 0 8px 4px;
  margin-bottom: 5px;
  background-color: whitesmoke;
  font-size: 16px;
  color: darkblue;
  border: none;
  outline: none;
  border-bottom: 2px solid steelblue;
  &:focus,
  &:hover {
    border-bottom: 2px solid #ca1277;
  }
  &::placeholder {
    color: grey;
    font-size: 14px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #ca1277;
  margin-top: 15px;
  margin-bottom: 5px;
  & > svg {
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 12px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: steelblue;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #ca1277;
    box-shadow: 0px 1px 12px 4px rgba(255, 255, 255, 0.3);
  }
`;

export const ValidationMessage = styled.div`
  font-size: 14px;
  color: darkblue;
  margin-top: 5px;
  margin-bottom: 5px;
`;
