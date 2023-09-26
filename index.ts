const server = Bun.serve({
  port: process.env.PORT || 5000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/') {
      return new Response('HomePage!')
    };
    if (url.pathname === '/about') {
      return new Response('AboutPage!')
    };
    return new Response('404! Page not Found')
  },
})

console.log(`Listening on port ${server.port}`)