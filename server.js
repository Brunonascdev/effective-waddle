const fs = require("fs");
const fastify = require("fastify")();

fastify.get("*", function (request, reply) {
  reply
    .status(200)
    .headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    })
    .send(fs.readFileSync("./stellar.toml", { encoding: "utf8" }));
});

fastify.listen(process.env.PORT, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
