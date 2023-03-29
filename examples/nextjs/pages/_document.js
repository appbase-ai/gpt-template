import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="apple-mobile-web-app-title" content="appbase.ai: ai powered chatgpt4 plugin widgets" />
                <meta name="application-name" content="appbase.ai: ai powered gpt4 plugin widgets" />
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
