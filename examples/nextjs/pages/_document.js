import Document, { Head, Html, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
        <meta name="apple-mobile-web-app-title" content="appbase.ai: ai powered widgets"/>
        <meta name="application-name" content="appbase.ai: ai powered widgets" />
        <link
           href="https://cdn.appbase.ai/widget/index.css"
           rel="stylesheet"
        />
        <script
           id="appbase-widget"
           data-deploymentKey="497683dd476b4773928be41a19a3e146"
           defer
           type="module"
           src="https://cdn.appbase.ai/widget/index.js"
        />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
