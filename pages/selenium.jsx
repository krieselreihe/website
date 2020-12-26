import React from "react";
import styled from "styled-components";

import { Page } from "../components/Page";
import { PresentationHeader } from "../patterns/PresentationHeader";
import { Text } from "../patterns/Text";
import { Link } from "../patterns/Link";
import RouteLink from "next/link";
import { Center } from "../patterns/Center";

const Container = styled.header`
  margin: 0;
`;

const Name = styled.h1`
  background: url("/images/selenium.png") 50% 50% no-repeat;
  font-family: monospace;
  background-size: 100%;
  text-transform: uppercase;
  text-indent: -99999em;
  font-size: var(--size-1000);
  margin: -85px 0 0 0;
  padding: var(--size-800) 0;

  @media (min-width: 768px) {
    background-size: 105%;
    margin: -65px -70px 0 -70px;
  }
`;

const LegalNotice = () => (
  <Page title="Selenium, text based adventure" showHeader={false}>
    <Container>
      <PresentationHeader />
      <Name>Selenium</Name>
    </Container>
    <Text>
      A text based adventure game where you will decide the way ahead.
    </Text>
    <Text>Just type anything and see what will happen.</Text>
    <Text>Coming soon …</Text>
    <Center>
      <RouteLink href="/" passHref>
        <Link title="Go back to the star page of Krieselreihe Games">
          &lt; Back to home &gt;
        </Link>
      </RouteLink>
    </Center>
  </Page>
);

export default LegalNotice;
