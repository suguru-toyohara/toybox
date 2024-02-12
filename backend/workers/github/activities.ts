
import { Env } from "..";
import methodType from "../types";
type ActivityRequest = { username : string }
type Activity = {
  date: string;
  count: number;
  level: number;
}

export default async function activities(request: Request, env: Env): Promise<Response> {
  const params = new URL(request.url).searchParams
  const username = params.get("username")
  if (!username || request.method !== methodType.GET) {
    return new Response("Bad request.", {status : 400})
  }
  try{
    if (env.CLOUDRUN_ENDPOINT === undefined){
      return new Response('env not working', {status: 500})
    }
    const endpoint = env.CLOUDRUN_ENDPOINT + "/username/" + username
    const r = await fetch(endpoint)
    const activities = await r.json() as Activity[]
    return new Response(JSON.stringify(activities), {status : 200})
  }catch{
    return new Response("Internal Server Error.", {status : 500})
  }
}
