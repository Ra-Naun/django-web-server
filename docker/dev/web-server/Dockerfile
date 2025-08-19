FROM python:3.12-alpine

WORKDIR /web-server/

RUN pip install pip==24.0


ENV PYTHONUNBUFFERED=1

EXPOSE 8000

CMD ["sh", "-c", "pip install -r requirements.txt && python manage.py runserver 0.0.0.0:8000"]
