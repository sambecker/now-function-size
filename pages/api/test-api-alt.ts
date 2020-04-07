import { NextApiRequest, NextApiResponse } from 'next';
import firebase from 'firebase';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const temp = `${firebase.firestore.FieldValue}`;
  res.statusCode = 200;
  res.json({ temp });
}
