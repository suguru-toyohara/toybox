import { Env } from "..";

export default async function getKV(request: Request, env: Env): Promise<Response> {
  try{
    const value = await env.GH_ACTIVITY_KV.get("test")
    return new Response(value, { status : 200 })
  }catch{
    return new Response("failed get kv", { status : 500 })
  }
}