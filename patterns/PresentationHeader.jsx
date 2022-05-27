import React from "react";
import styled from "styled-components";

import { Title } from "./Title";
import { Link } from "./Link";
import RouteLink from "next/link";

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 0 0 22px 0;
`;

const PresentsToYou = styled.img`
  left: 50%;
  width: 120px;
  height: 22px;
  position: absolute;
  transform: translate(-50%, -25%);
`;

export function PresentationHeader() {
  return (
    <Container>
      <RouteLink href="/" passHref>
        <Link title="Take my back to start!">
          <Title>KrieselReihe</Title>
        </Link>
      </RouteLink>
      <picture>
        <source type="image/webp" srcSet="/images/presents-to-you.webp" />
        <PresentsToYou
          src="/images/presents-to-you.png"
          alt="presents to you"
          width="196"
          height="37"
        />
      </picture>
    </Container>
  );
}
