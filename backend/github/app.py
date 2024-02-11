import os
from src.main import main
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    
  return 'Hello World! This is a test api.'

@app.route('/username/<username>')
def GET(username):
  try:
    activities = main(username)
    return activities, 200
  except Exception as e:
    return {"error": str(e)}, 500

if __name__ == "__main__":
  app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))
