import React from "react";
import styled from "styled-components";

import { Text } from "./Text";

const StyledAddress = styled.address`
  font-style: italic;
`;

export const Address = ({ children }) => (
  <StyledAddress>
    <Text>{children}</Text>
  </StyledAddress>
);
