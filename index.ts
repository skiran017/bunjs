const server = Bun.serve({
  port: 5000,
  fetch(req) {
    return new Response("Hello World");
  },
})

console.log(`Listening on port ${server.port}`)