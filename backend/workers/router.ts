

async function notfound(request: Request): Promise<Response> {
  return new Response(request.url + ' is Not Found', { status: 404 })
}

export default function route(request: Request): (request: Request) => Promise<Response> {
  switch(request.url){
    default:
      console.log(request.url)
      return notfound;
  }
}
