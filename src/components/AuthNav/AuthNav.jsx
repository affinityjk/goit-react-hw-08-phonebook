import { NavWrap, NavLinkStyled } from "styles/common.styled";

function AuthNav() {
  return (
    <NavWrap>
      <NavLinkStyled activeStyle={{ color: "#5e0c77" }} to="/register" exact>
        Join
      </NavLinkStyled>
      <NavLinkStyled activeStyle={{ color: "#5e0c77" }} to="/login" exact>
        Login
      </NavLinkStyled>
    </NavWrap>
  );
}

export default AuthNav;
