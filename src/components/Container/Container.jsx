import PropTypes from "prop-types";
import { StyledWrapper } from "./Container.styled";

function Container({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
