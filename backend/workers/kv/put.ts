import { Env } from "..";

export default async function putKV(request: Request, env: Env): Promise<Response> {
  const datetime = new Date().toString()
  try{
    await env.GH_ACTIVITY_KV.put(datetime, "test")
    return new Response("OK", { status : 200 })
  }catch{
    return new Response("failed put kv", { status : 500 })
  }
}