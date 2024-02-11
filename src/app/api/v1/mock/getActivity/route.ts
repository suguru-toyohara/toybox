import { Activity } from "@/types/calendar";
import { get } from "http";

function getDateList(): string[] {
  const dateList = [];
  for (let i = 0; i < 365; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dateList.push(date.toISOString().split('T')[0]);
  }
  return dateList;
}

function getMockActivity(): Activity[] {
  const activity: Activity[] = [];
  getDateList().forEach((date, index) => {
    const count = Math.floor(Math.random() * 30);
    const level = count > 25 ? 4 : count > 15 ? 3 : count > 8 ? 2 : count > 0 ? 1 : 0;
    activity.push({ date: date, count: count, level: level });
  });
  return activity;
}

async function Handler(): Promise<Response> {
  const content: Array<Activity> = getMockActivity();
  return Response.json(content);
}

export { Handler as GET };
