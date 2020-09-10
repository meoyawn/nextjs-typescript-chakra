import React from "react";
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { captureException } from "@sentry/minimal";

process.on('unhandledRejection', err => captureException(err))
process.on('uncaughtException', err => captureException(err))

// noinspection JSUnusedGlobalSymbols
export default class MyDocument extends Document {

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href={process.env.MANIFEST} />

          {process.env.THEME_COLOR && <meta name="theme-color" content={process.env.THEME_COLOR} />}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
