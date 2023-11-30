
import { del, list } from '@vercel/blob';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET() {
    const { blobs } = await list()
    const urls = blobs.map(blob => blob.url)

    del(urls)
}