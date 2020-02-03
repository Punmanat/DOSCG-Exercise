const redis = require("redis")
const REDISHOST = process.env.REDISHOST || 'localhost';
const REDISPORT = process.env.REDISPORT || 6379;
module.exports = redis.createClient(REDISPORT, REDISHOST)