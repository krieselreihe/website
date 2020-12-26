import styled from "styled-components";

export const Title = styled.p`
  font-family: var(--base-font);
  font-size: 11.8vw;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 -1px 0 #fff;
  line-height: 1.65;
  margin: 0;
  padding: 0;
  color: var(--color-blue-500);
  text-align: center;

  @media (min-width: 428px) {
    font-size: 3rem;
  }
`;
