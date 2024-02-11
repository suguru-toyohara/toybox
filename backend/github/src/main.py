import requests
from loguru import logger

def get_github_activities(username: str):
  url = f"https://github.com/users/{username}/contributions"
  response = requests.get(url)
  logger.info(f"GET : {response.status_code}")
  if response.status_code != 200:
    logger.error(f"Failed to get activities for {username}")
    raise Exception(f"Failed to get activities for {username}")
  
  print(response.text)


get_github_activities("suguru-toyohara")