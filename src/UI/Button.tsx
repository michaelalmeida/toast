import styled from "styled-components";
import { BORDER_RADIUS, SPACING_SMALL } from "../UI/sizes";
import { MAIN_COLOR, WHITE } from "./colors";

export const Button = styled.button`
  padding: ${SPACING_SMALL}px;
  border: 0;
  border-radius: ${BORDER_RADIUS}px;
  background: ${MAIN_COLOR};
  cursor: pointer;
  color: ${WHITE};
`;
