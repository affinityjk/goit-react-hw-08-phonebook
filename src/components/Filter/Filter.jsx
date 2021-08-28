import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Label, Input } from "./Filter.styled";
import { actions } from "redux/contacts";
import { getFilterValue } from "redux/contacts/contacts-selectors";

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor={`id-${nanoid(3)}`}>Find contacts by name</Label>
      <Input
        id={`id-${nanoid(3)}`}
        type="text"
        name="name"
        value={filter}
        onChange={(event) =>
          dispatch(actions.getFilterValue(event.target.value))
        }
        placeholder="Search"
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
