import { useSelector } from "react-redux";
import { getUserIsLoggedIn } from "redux/auth";
import { NavWrap, NavLinkStyled } from "styles/common.styled";

function MainNav() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return (
    <NavWrap>
      <NavLinkStyled activeStyle={{ color: "#ca1277" }} to="/" exact>
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled activeStyle={{ color: "#ca1277" }} to="/contacts" exact>
          Contacts
        </NavLinkStyled>
      )}
    </NavWrap>
  );
}

export default MainNav;
