FROM python:3.12.1-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 200 app:app
