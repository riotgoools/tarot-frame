import Head from 'next/head'

export default function Home() {
  // Generate a random number between 1 and 100 (you can adjust the range as needed)
  const randomImageNumber = Math.floor(Math.random() * 156) + 1;

  return (
    <>
      <Head>
        <meta property="og:title" content="Tarot frame" />
        <meta property="og:image" content="tarot-frame.vercel.app/${randomImageNumber}.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="tarot-frame.vercel.app/${randomImageNumber}.png" />
        <meta property="fc:frame:button:1" content="Pull" />
      </Head>
    </>
  )
}
