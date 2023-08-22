import styled from "styled-components";
import { BORDER_RADIUS, SPACING_SMALL } from "./sizes";
import { BLACK, MAIN_COLOR, WHITE } from "./colors";

export const Input = styled.input`
  padding: ${SPACING_SMALL}px;
  border: 1px solid ${MAIN_COLOR};
  border-radius: ${BORDER_RADIUS}px;
  background: ${WHITE};
  color: ${BLACK};
`;

export const Select = styled.select`
  padding: ${SPACING_SMALL}px;
  border: 1px solid ${MAIN_COLOR};
  border-radius: ${BORDER_RADIUS}px;
  background: ${WHITE};
  color: ${BLACK};
`;
