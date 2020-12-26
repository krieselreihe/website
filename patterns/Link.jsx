import styled from "styled-components";

import { Text } from "./Text";

export const Link = styled.a`
  font-family: var(--base-font);
  font-size: 1.2rem;
  color: var(--color-white);
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;

  ${Text} > & {
    color: var(--color-pink-500);
  }

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: var(--size-200);
  }
`;
