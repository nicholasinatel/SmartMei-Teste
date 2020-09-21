require("custom-env").env(true);

console.log('__Environment__');
console.log(process.env.ENVIRONMENT)

module.exports = {...process.env};