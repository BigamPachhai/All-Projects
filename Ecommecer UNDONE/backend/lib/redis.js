import { Redis } from '@upstash/redis'
export const redis = new Redis({
  url: 'https://nearby-mongoose-19177.upstash.io',
  token: 'AUrpAAIncDI0NDgxMTQzNjg3YWM0NmE4OTE5ZTdkM2M3YWQwMWRmOXAyMTkxNzc',
})

await redis.set("foo", "bar");
await redis.get("foo");