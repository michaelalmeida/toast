import styled from "styled-components";
import { SPACING_BIG } from "../../UI/sizes";

export const HomeWrapper = styled.div`
  padding: ${SPACING_BIG}px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
  grid-template-rows: 1fr auto;
  max-width: 500px;
`;
