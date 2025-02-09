---
description: The bot for a private Discord server dedicated to communication and roleplay. Written with Nest.js.
seoDescription: Discord bot project with Node.js, Nest.js, Google Firebase, and Docker.
year: 2024
sort: 4
published: true
color: "#F7BFBE"
icon: doodles:star
layout: project
link: "https://discord.com/oauth2/authorize?client_id=1121418492097343589&permissions=275012176976&scope=bot"
---

## Introduction

This is my first serious non-study project on Node.js as a backend developer. I created a bot for a private Discord server dedicated to communication and roleplay.

## Links

- Git repository: [github.com/koshacha/paimon-nestjs](https://github.com/koshacha/paimon-nestjs)

As the main library for dealing with Discord.js with Nest.js I used [this one](https://github.com/necordjs/necord).

## Bot commands

The bot can do the following.

- Counts member posts in certain channels (admin decides which ones) and outputs a rating for the whole time, week or month.
- With the power of [RANDOM.ORG](https://www.random.org/) gives a random number/action
- Supports simple server economy - allows server users to earn currency and buy game items with it (which can be created by admin)

## Realizations details

- Development Language: Node.js
- Nest.js framework
- Database: Google Firebase

## Work progress

In the course of work I got to know Nest.js and Discord.js better, gained experience in bot development. I configured Github Actions so that the image at Docker Hub would be updated after changes in the main repository branch.

## Launch the bot using docker compose

First of all, you will need to create a docker-compose.yml file with the following contents:

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

You'll also need to create an .env file and put it next to it.

```text
DISCORD_TOKEN=""
DEV_GUILD=""
GOOGLE_APPLICATION_CREDENTIAL=""
GOOGLE_PROJECT_ID=""
GOOGLE_CLIENT_EMAIL=""
GOOGLE_PRIVATE_KEY=""
```

You'll need to get a Discord token and Google Firebase keys first, of course.

All you have to do is run the application with the command:

```bash
docker-compose up -d
```
