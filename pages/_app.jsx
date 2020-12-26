import React from "react";
import App from "next/app";
import Head from "next/head";

// This is a workaround for the following bug:
// https://github.com/zeit/next.js/issues/3520
const globalStyle = {
  __html: `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  @font-face {
    font-family: 'VCR';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/vcr.woff2') format('woff2'),
         url('/fonts/vcr.woff') format('woff'),
         url('/fonts/vcr.ttf') format('truetype');
    font-display: swap;
  }

  ::selection {
    background: #c63ae3;
    color: white;
  }
`,
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#1d0525"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#1d0525" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#1d0525" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="google-site-verification"
            content="z4O0vcBkI0Rh3oC08_MPreiNSUeo0wCjkTYuT--eKas"
          />
          <style dangerouslySetInnerHTML={globalStyle} />
          <script
            async
            defer
            data-domain="krieselreihe.com"
            src="https://analytics.krieselreihe.com/js/index.outbound-links.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
            }}
          />
          <meta
            name="description"
            content="Website for Krieselreihe Games awesome text adventures!
"
          />
          <link
            rel="preload"
            href="/fonts/vcr.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/vcr.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
