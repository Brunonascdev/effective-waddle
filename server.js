const path = require('path');
const tomlFile = require('./stellar.toml')

const fastify = require('fastify')({
  logger: false
});

fastify.get('*', function(request, reply) {  
  reply.headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
  })
  .send(tomlFile)
});

// Run the server and report out to the logs
fastify.listen(process.env.PORT, '0.0.0.0', function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
