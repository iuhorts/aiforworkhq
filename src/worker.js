export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Force HTTPS
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // 2. Force non-www (canonical host)
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    // 3. Serve static assets
    return env.ASSETS.fetch(request);
  },
};
