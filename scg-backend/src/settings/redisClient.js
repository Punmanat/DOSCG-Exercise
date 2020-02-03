const redis = require("redis")
const REDISHOST = '10.10.58.219';
const REDISPORT = process.env.REDISPORT || 6379;
const client = redis.createClient(REDISPORT, REDISHOST);
client.on('error', err => console.error('ERR:REDIS:', err));
module.exports = client