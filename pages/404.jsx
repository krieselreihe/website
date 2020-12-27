import React from "react";
import Head from "next/head";
import RouteLink from "next/link";

import { Page } from "../components/Page";
import { Headline } from "../patterns/Headline";
import { Text } from "../patterns/Text";
import { Link } from "../patterns/Link";
import { Center } from "../patterns/Center";

const Error404 = () => (
  <Page title="page not found">
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `plausible("404", { props: { path: document.location.pathname } });`,
        }}
      />
    </Head>
    <Headline>Page not found!</Headline>
    <Text>
      Nothing here apparently. Maybe there never was? If you are sure there
      should be something you can contact us here:{" "}
      <RouteLink href="/legal-notice#contact" passHref>
        <Link title="Here you can find contact information.">
          &gt;&nbsp;Contact
        </Link>
      </RouteLink>
    </Text>
    <Center>
      <RouteLink href="/" passHref>
        <Link title="Head back to the homepage">&lt; Head back home &gt;</Link>
      </RouteLink>
    </Center>
  </Page>
);

export default Error404;
