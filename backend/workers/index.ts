/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import router from "./router";
import methodType from "./types";

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	GH_ACTIVITY_KV: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
  CLOUDRUN_ENDPOINT: string
}

function checkMethod(value: string): methodType {
  return methodType[value as keyof typeof methodType];
}

async function fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url: URL = new URL(request.url)
  const endpoint = url.pathname
  try {
    checkMethod(request.method)
  }catch{
    return new Response("bad request.", {status: 400})
  }
  const action = router(endpoint, request.method as methodType)
	return action(request, env)
}

export default { fetch }
