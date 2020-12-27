import React from "react";
import RouteLink from "next/link";
import Head from "next/head";

import { StyleContext } from "../patterns/StyleContext";
import { HeroBackground } from "../patterns/HeroBackground";
import { Title } from "../patterns/Title";
import { Link } from "../patterns/Link";
import { Footer } from "../patterns/Footer";
import { Content } from "../patterns/Content";
import { Main } from "../patterns/Main";

export const Page = ({
  children,
  title = "",
  description = "",
  showHeader = true,
}) => (
  <StyleContext>
    <Head>
      <title>Krieselreihe{title ? ` | ${title}` : ""}</title>
      {description && <meta type="description" content={description} />}
    </Head>
    <HeroBackground>
      <Content>
        {showHeader && (
          <header>
            <RouteLink href="/" passHref>
              <Link title="Take my back to start!">
                <Title>KrieselReihe</Title>
              </Link>
            </RouteLink>
          </header>
        )}
        <Main>{children}</Main>
        <Footer>
          <RouteLink href="/legal-notice" passHref>
            <Link title="Legal notice page with contact information">
              Legal notice
            </Link>
          </RouteLink>
          {" | "}
          <RouteLink href="/privacy-policy" passHref>
            <Link title="Privacy policy page">Privacy policy</Link>
          </RouteLink>
          {" | "}
          <Link
            href="https://github.com/krieselreihe"
            title="View project and tools from Krieselreihe on Github"
          >
            GitHub
          </Link>
        </Footer>
      </Content>
    </HeroBackground>
  </StyleContext>
);
