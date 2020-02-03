const redisClient = require("../settings/redisClient");
const { promisify } = require('util');

const getValue = async (key) => {
    const getAsync = promisify(redisClient.get).bind(redisClient);
    const data = await getAsync(key);
    return JSON.parse(data);
};


const setValue = (key,value)=>{
    console.log(value)
    redisClient.setex(key, 600, JSON.stringify(value))
}


module.exports = {
    getValue,
    setValue
}