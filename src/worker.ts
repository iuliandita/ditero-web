interface Environment {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

// The redirect never reaches the assets, so public/_headers does not apply to it; keep in sync.
const redirectHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Content-Security-Policy': "frame-ancestors 'none'",
  'Content-Signal': 'search=yes, ai-input=yes, ai-train=no',
};

export default {
  fetch(request: Request, environment: Environment): Promise<Response> | Response {
    const url = new URL(request.url);
    if (url.hostname === 'www.ditero.app') {
      url.protocol = 'https:';
      url.hostname = 'ditero.app';
      url.port = '';
      return new Response(null, { status: 301, headers: { ...redirectHeaders, Location: url.toString() } });
    }
    return environment.ASSETS.fetch(request);
  },
};
