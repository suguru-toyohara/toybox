import methodType from "./types";
import activities from "./github/activities";
import { Env } from ".";

async function notfound(request: Request, env: Env): Promise<Response> {
  const endpoint = new URL(request.url).pathname
  return new Response(endpoint + ' is Not Found', { status: 404 })
}

export default function router(endpoint: string, method: methodType ): (request: Request, env: Env) => Promise<Response> {
  switch(endpoint){
    case '/github/activities':
      return activities;
    default:
      return notfound;
  }
}
