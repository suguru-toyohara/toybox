import requests
import re
from typing import TypedDict
from requests import Response
from loguru import logger

class Activity(TypedDict):
  date: str
  count: int
  level: int

def scrape_github_activities(html: str) -> list[Activity]:
  r1 = re.findall('data-date.+data-level="\d"', html)
  r2 = re.findall('>.+ contributions? on .+\.', html)
  activities: list[Activity] = []
  for td, tooltip in zip(r1, r2):
    date: str = re.findall('data-date="....-..-.."', td)[0].split('"')[1]
    level: int = int(re.findall('data-level="."', td)[0].split('"')[1])
    count: str = re.findall('.+ con', tooltip)[0].split(' ')[0].replace('>', '')
    # date_en: str = re.findall('on .+\.', tooltip)[0].split('on ')[1] # not used
    activity: Activity = { "date": date, "count": 0 if count == "No" else int(count), "level": level }
    activities.append(activity)
  return activities

def get_github_activities(username: str):
  url = f"https://github.com/users/{username}/contributions"
  response:Response = requests.get(url)
  logger.info(f"GET : {response.status_code}")
  if response.status_code != 200:
    logger.error(f"Failed to get activities for {username}")
    raise Exception(f"Failed to get activities for {username}")
  
  return response.text

def main(username: str):
  html = get_github_activities(username)
  activities = scrape_github_activities(html)
  activities.sort(key=lambda x: x["date"])
  return activities
