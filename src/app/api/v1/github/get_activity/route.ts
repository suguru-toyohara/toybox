import { Activity } from "@/types/calendar";
import { NextResponse } from "next/server";
export const runtime = 'edge';


async function handler() {
  const url = `https://simeji-toybox-backend-workers.suguru-toyohara.workers.dev/github/activities?username=suguru-toyohara`;
  const response = await fetch(url);
  const activities: Activity[] = await response.json();
  return NextResponse.json(activities);
}

export { handler as GET };
