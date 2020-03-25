const redis = require("redis");
const client = redis.createClient(6379,'127.0.0.1');
client.auth('123456abc');
 
client.on("error", function(error) {
  console.error(error);
});
 
client.set("name", "lisi", redis.print);
client.get("name", redis.print);
