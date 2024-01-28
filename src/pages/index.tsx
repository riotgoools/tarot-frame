import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Tarot Frame" />
        <meta property="og:image" content="https://tarot-frame.vercel.app/molemon01.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://tarot-frame.vercel.app/molemon01.png" />
        <meta property="fc:frame:button:1" content="Pull Card" />
        <meta property="fc:frame:post_url" content="https://tarot-frame.vercel.app/api/post" />
      </Head>
    </>
  )
}
