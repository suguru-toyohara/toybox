
import { Env } from "..";
import methodType, { Activity } from "../types";
import { getActivityCacheKV, putActivityCacheKV } from "../kv/cache";

async function fetchActivity(endpoint: string): Promise<Activity[]> {
  const r = await fetch(endpoint)
  const activities = await r.json() as Activity[]
  return activities
}

export default async function activities(request: Request, env: Env): Promise<Response> {
  const username = new URL(request.url).searchParams.get("username")
  if (!username) {
    return new Response("Bad request.", {status : 400})
  }
  if (request.method !== methodType.GET){
    return new Response("Method Not Allowed.", {status: 405})
  }
  // usernameを元にKVからデータを取得
  const activities = await getActivityCacheKV(username, env)
  // KVにデータがあればそれを返す
  if (activities.length > 0){
    return new Response(JSON.stringify(activities), {status : 200})
  }
  // KVにデータがなければGitHub APIを叩く
  try{
    if (env.CLOUDRUN_ENDPOINT === undefined){
      return new Response('env not working', {status: 500})
    }
    const endpoint = env.CLOUDRUN_ENDPOINT + "/username/" + username
    const activities = await fetchActivity(endpoint)
    // 取得したデータをKVに保存
    await putActivityCacheKV(activities, username, env)
    return new Response(JSON.stringify(activities), {status : 200})
  }catch{
    return new Response("Internal Server Error.", {status : 500})
  }
}
