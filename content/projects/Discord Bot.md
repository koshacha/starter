---
description: Бот для приватного Discord-сервера, посвященного общению и ролевой игре. Написан на Nest.js.
seoDescription: Проект Discord-бота на Node.js, Nest.js, Google Firebase и Docker.
year: 2024
sort: 4
published: true
color: "#F7BFBE"
icon: doodles:star
layout: project
link: "https://discord.com/oauth2/authorize?client_id=1121418492097343589&permissions=275012176976&scope=bot"
---

## Введение

Это мой первый серьезный проект на Node.js без учебы в качестве бэкенд-разработчика. Я создал бота для частного сервера Discord, предназначенного для общения и ролевых игр.

## Ссылки

- Git-репозиторий: [github.com/koshacha/paimon-nestjs](https://github.com/koshacha/paimon-nestjs)

В качестве основной библиотеки для работы с Discord.js с Nest.js я использовал [эту](https://github.com/necordjs/necord).

## Команды бота

Бот может делать следующее.

- Подсчитывает посты пользователей в определенных каналах (админ решает, в каких именно) и выводит рейтинг за все время, неделю или месяц.
- С помощью [RANDOM.ORG](https://www.random.org/) выдает случайное число/действие.
- Поддерживает простую экономику сервера - позволяет пользователям сервера зарабатывать валюту и покупать на нее игровые предметы (которые могут быть созданы администратором)

## Детали реализации

- Язык разработки: Node.js
- Фреймворк Nest.js
- База данных: Google Firebase

## Прогресс в работе

В процессе работы я познакомился с Nest.js и Discord.js поближе, получил опыт разработки ботов. Я настроил Github Actions так, чтобы образ на Docker Hub обновлялся после изменений в основной ветке репозитория.

## Запуск бота с помощью docker compose

Прежде всего, вам нужно создать файл docker-compose.yml со следующим содержимым:

```yaml
name: paimon
services:
  paimon-bot:
    ports:
      - 8000:8000
    volumes:
      - .:/usr/src/app
    env_file:
      - .env
    restart: always
    logging:
      options:
        max-size: 1g
    image: koshacha/paimon-bot:master
```

Вам также нужно будет создать файл .env и поместить в него следующее.

```text
DISCORD_TOKEN=""
DEV_GUILD=""
GOOGLE_APPLICATION_CREDENTIAL=""
GOOGLE_PROJECT_ID=""
GOOGLE_CLIENT_EMAIL=""
GOOGLE_PRIVATE_KEY=""
```

Конечно, сначала вам нужно будет получить токен Discord и ключи Google Firebase.

Все, что вам нужно сделать, это запустить приложение с помощью команды:

```bash
docker-compose up -d
```
