import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Home() {
  const [randomImageNumber, setRandomImageNumber] = useState(1);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 156) + 1;
    setRandomImageNumber(randomNumber);
  }, []); 

  return (
    <>
      <Head>
        <meta property="og:title" content="Tarot Frame" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="Pull" />
      </Head>
      <Script id="dynamic-meta">
        {`
          document.head.querySelector('meta[property="og:image"]').content = 'https://tarot-frame.vercel.app/${randomImageNumber}.png';
          document.head.querySelector('meta[property="fc:frame:image"]').content = 'https://tarot-frame.vercel.app/${randomImageNumber}.png';
        `}
      </Script>
    </>
  );
}
