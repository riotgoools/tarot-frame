import type { NextApiRequest, NextApiResponse } from 'next'
import { BASE_URL, pullTarotCard } from '@/utils'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const randomImageNumber = Math.floor(Math.random() * 156) + 1;
  const imageUrl = `https://elle-tarot-frame.vercel.app/${randomImageNumber}.png`;

  const html = pullTarotCard(imageUrl);

  return res.status(200).setHeader('Content-Type', 'text/html').send(html);
}

