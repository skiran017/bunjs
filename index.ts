const server = Bun.serve({
  port: process.env.PORT || 5000,
  fetch(req) {
    return new Response("Hello World");
  },
})

console.log(`Listening on port ${server.port}`)