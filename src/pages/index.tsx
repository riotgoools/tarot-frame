import Head from 'next/head'

export default function Home() {
  // Generate a random number between 1 and 100 (you can adjust the range as needed)
  const randomImageNumber = Math.floor(Math.random() * 156) + 1;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Tarot Frame" />
        <meta property="og:image" content="https://tarot-frame.vercel.app/1.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://tarot-frame.vercel.app/1.png" />
        <meta property="fc:frame:button:1" content="Pull" />
        <meta property="fc:frame:post_url" content="https://tarot-frame.vercel.app/api/post" />
      </Head>
    </>
  )
}
