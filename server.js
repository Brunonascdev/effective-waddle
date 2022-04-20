const path = require("path");
const fastify = require("fastify")();

fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

fastify.get("*", function (request, reply) {
  reply
    .status(204)
    .headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    })
    .view("/stellar.toml");
});

// Run the server and report out to the logs
fastify.listen(process.env.PORT, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
