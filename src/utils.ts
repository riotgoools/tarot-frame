export const BASE_URL = process.env.BASE_URL

export function pullTarotCard(image: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:image:aspect_ratio" content="1:1" />
      <meta property="fc:frame:button:1" content="Pull Card" />
      <meta property="fc:frame:post_url" content="https://elle-tarot-frame.vercel.app/api/post" />
    </head>
    <body>
      
    </body>
    </html>
  `
}
