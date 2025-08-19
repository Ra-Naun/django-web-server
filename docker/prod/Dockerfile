FROM python:3.12-alpine

WORKDIR /usr/src/web-server
RUN mkdir -p $WORKDIR/static
RUN mkdir -p $WORKDIR/media

#не создавать файлы кэша .pyc
ENV PYTHONDONTWRITEBYTECODE=1
# не помещать в буфер потоки stdout и stderr
ENV PYTHONUNBUFFERED=1

RUN pip install pip==24.0

COPY ./web-server/requirements.txt .
RUN pip install -r requirements.txt

CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:8000"]
