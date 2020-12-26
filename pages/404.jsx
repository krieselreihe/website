import React from "react";
import Head from "next/head";

import { Page } from "../components/Page";

const Error404 = () => (
  <Page title="page not found">
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `plausible("404", { props: { path: document.location.pathname } });`,
        }}
      />
    </Head>
    <h1>Page not found!</h1>
    <p>Nothing here apparently ...</p>
  </Page>
);

export default Error404;
