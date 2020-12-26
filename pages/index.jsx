import React from "react";
import RouteLink from "next/link";
import Head from "next/head";

import { Page } from "../components/Page";
import { Link } from "../patterns/Link";
import { Text } from "../patterns/Text";
import { Headline } from "../patterns/Headline";
import { Center } from "../patterns/Center";
import { Marked } from "../patterns/Marked";

function Index() {
  return (
    <Page>
      <Head>
        <link rel="preload" as="image" href="/images/selenium.png" />
        <link rel="preload" as="image" href="/images/presents-to-you.png" />
      </Head>
      <br />
      <Headline>Games</Headline>
      <Text>
        <Marked>Selenium</Marked> is a text based adventure game where you will
        decide the way ahead.
      </Text>
      <Center>
        <RouteLink href="/selenium" passHref>
          <Link title="Read more about the upcoming text adventure Selenium.">
            &lt; Find out more &gt;
          </Link>
        </RouteLink>
      </Center>
      <br />
      <br />
      <Headline>Developer tools</Headline>
      <Text>
        <Marked>Litr</Marked> (Language Independent Task Runner) lets you
        configure and then run any tasks you want for any language.{" "}
        <Link
          title="Go to GitHub and checkout Litr to run all your tasks."
          href="https://github.com/krieselreihe/litr"
        >
          &gt;&nbsp;To&nbsp;GitHub
        </Link>
      </Text>
      <Text>
        <Marked>Natr</Marked> Not another test runner! But it is (for
        JavaScript), and it is a highly opinionated one.{" "}
        <Link
          title="Visit GitHub for the JavaScript project Natr."
          href="https://github.com/krieselreihe/natr"
        >
          &gt;&nbsp;To&nbsp;GitHub
        </Link>
      </Text>
    </Page>
  );
}

export default Index;
