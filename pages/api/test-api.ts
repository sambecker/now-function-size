import { NextApiRequest, NextApiResponse } from 'next';
import getScreenshot from '../../screenshot';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const file = await getScreenshot();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.end(file);
}
