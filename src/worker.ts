interface Environment {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  fetch(request: Request, environment: Environment): Promise<Response> | Response {
    const url = new URL(request.url);
    if (url.hostname === 'www.ditero.app') {
      url.protocol = 'https:';
      url.hostname = 'ditero.app';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return environment.ASSETS.fetch(request);
  },
};
