import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/auth";
import { logOut } from "redux/auth";
import { MenuWrapper, Button } from "components/UserMenu/UserMenu.styled";
import defaultAvatar from "images/defaultImage.jpg";

function UserMenu() {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  const handleLogOutOnClick = () => {
    dispatch(logOut());
  };

  return (
    <MenuWrapper>
      <img src={avatar} alt="" width="38" />
      <p> {`Welcome, ${user}`}</p>
      <Button type="button" onClick={handleLogOutOnClick}>
        Log Out
      </Button>
    </MenuWrapper>
  );
}

export default UserMenu;
