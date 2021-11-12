import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async (req, res) => {
  const { text } = req.body;
  const tweet = await prisma.tweet.create({ data: { text } });
  res.json(tweet);
};