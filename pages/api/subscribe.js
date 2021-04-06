import redis from '@/lib/redis';
import { uuid } from 'uuidv4';

export default async (req, res) => {
  const { email } = req.body;

  return res.status(501).json({
    error: 'Not available yet'
  });

  if (!email) {
    return res.status(400).json({
      error: 'Email is required'
    });
  }

  const subscriber = JSON.parse((await redis.hget('subscribers', email)) || 'null');

  if(subscriber !== null) {
    return res.status(409).json({
      error: 'You are already subscribed to the newsletter'
    })
  }

  await redis.hset('subscribers', email, JSON.stringify({
    id: uuid(),
    email,
    subscribed: new Date()
  }));

  return res.status(201).json({
    message: 'Thanks for signing up!'
  });

};
