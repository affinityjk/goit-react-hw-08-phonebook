import styled from "@emotion/styled/macro";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Button = styled.div`
  position: absolute;
  top: -3%;
  right: -3%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  color: #ca1277;
  border: 3px solid steelblue;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: white;
    background-color: lightsteelblue;
    box-shadow: 0px 1px 12px 4px rgba(255, 255, 255, 0.3);
  }
`;
