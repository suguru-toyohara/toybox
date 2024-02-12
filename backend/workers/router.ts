import methodType from "./types";

async function notfound(request: Request): Promise<Response> {
  return new Response(request.url + ' is Not Found', { status: 404 })
}

export default function router(endpoint: string, method: methodType ): (request: Request) => Promise<Response> {
  switch(endpoint){
    default:
      console.log(endpoint)
      return notfound;
  }
}
