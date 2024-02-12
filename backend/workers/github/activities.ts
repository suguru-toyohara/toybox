import methodType from "../types";
type ActivityRequest = { username : string }
type Activity = {
  date: string;
  count: number;
  level: number;
}

export default async function activities(request: Request): Promise<Response> {
  const body = await request.json() as ActivityRequest
  if (!body.username || request.method !== methodType.GET) {
    return new Response("Bad request.", {status : 400})
  }

  try{
    if (!process.env.CLOUDRUN_ENDPOINT){
      return new Response('env not working', {status: 500})
    }
    const endpoint = process.env.CLOUDRUN_ENDPOINT + "/username/" + body.username
    const r = await fetch(endpoint)
    const activities = await r.json() as Activity[]
    return new Response(activities.toString(), {status : 200})
  }catch{
    return new Response("Internal Server Error", {status : 500})
  }
}

