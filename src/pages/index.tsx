import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {
  const [randomImageNumber, setRandomImageNumber] = useState(1);

  useEffect(() => {
    // Generate a random number between 1 and 100 (you can adjust the range as needed)
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomImageNumber(randomNumber);
  }, []); // Run this effect only once when the component mounts

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
