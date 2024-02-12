import { Env } from "..";
import { Activity } from "../types";

export async function putActivityCacheKV(activities: Activity[], username: string, env: Env): Promise<Response> {
  const options:KVNamespacePutOptions = { expirationTtl: 60 * 60 * 12 }
  try{
    await env.GH_ACTIVITY_KV.put(username, JSON.stringify(activities), options)
    return new Response("OK", { status : 200 })
  }catch{
    return new Response("failed put kv", { status : 500 })
  }
}

export async function getActivityCacheKV(username: string, env:Env): Promise<Activity[]> {
  // usernameを元にKVからデータを取得
  try{
    const activities = await env.GH_ACTIVITY_KV.get(username);
    if(activities){
      return JSON.parse(activities) as Activity[]
    }else{
      return []
    }
  }catch{
    // cacheでエラーが発生した場合
    return []
  }
}