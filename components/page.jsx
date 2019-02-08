import React from "react";
import RouteLink from "next/link";
import Head from "next/head";

const Page = ({ children, title = "", description = "" }) => (
  <>
    <Head>
      <title>krieselreihe.com{title ? ` | ${title}` : ""}</title>
      {description && <meta type="description" content={description} />}
    </Head>
    <div>
      <header>
        <RouteLink href="/" passHref>
          <a title="Take my back to start!">
            <h1>KrieselReihe</h1>
          </a>
        </RouteLink>
      </header>
      <main>{children}</main>
      <footer>
        <RouteLink href="/legal-notice" passHref prefetch>
          <a title="Legal notice page with contact information">Legal notice</a>
        </RouteLink>
        {" | "}
        <RouteLink href="/privacy-policy" passHref prefetch>
          <a title="Privacy policy page">Privacy policy</a>
        </RouteLink>
        {" | "}
        <a
          href="https://github.com/MartinHelmut/krieselreihe"
          title="View the sources of this website on Github"
        >
          Website sources
        </a>
      </footer>
    </div>
  </>
);

export default Page;
