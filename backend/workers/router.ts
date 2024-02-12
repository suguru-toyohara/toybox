import methodType from "./types";
import activities from "./github/activities";

async function notfound(request: Request): Promise<Response> {
  const endpoint = new URL(request.url).pathname
  return new Response(endpoint + ' is Not Found', { status: 404 })
}

export default function router(endpoint: string, method: methodType ): (request: Request) => Promise<Response> {
  switch(endpoint){
    case '/github/activities':
      return activities;
    default:
      return notfound;
  }
}
