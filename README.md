# Docker-multi-container-apps

Multi container application with docker cli, docker compose, CI + CD workflow using Github, AWS.

- creating a pipeline that automatically deploys your code every time you push your latest changes to Github.
- Multi-Container Deployments on AWS.
- Multi-container deployments on Amazon Web Services.
- Construct a multi-container application utilizing `Node`, `React`, `Redis`, and `Postgres`, and the amazing power of containers in action.

Multi container application project structure.

```
├── docker-multi-container-apps/
│ ├── .github
│ ├── client/
│ ├── nginx/
│ ├── server/
│ ├── worker/
│ ├── nginx/
│ ├── .gitignore
│ ├── docker-compose-dev.yml
│ ├── docker-compose.yml
│ ├── Dockerrun.aws.json
│ └── README.md
```

## Client technology and library

- `axios`
- `jest`
- `react`
- `react-router-dom`
- `sass`
- `swiper`
- `tailwindcss`
- `typescript`

## Server technology and library

- `express`
- `jest`
- `postgres/pg`
- `redis`
- `cors`
- `nodemon`
- `parser`

## Worker technology and library

- `jest`
- `nodemon`
- `redis`

## In the project directory, you can run:

### `docker compose -f docker-compose-dev.yml up --build`

```
docker compose -f docker-compose-dev.yml up
docker compose -f docker-compose-dev.yml up --build
docker compose -f docker-compose-dev.yml down
```

Runs the app in the development mode.<br />
Open [http://localhost:3050](http://localhost:3050) to view it in the browser.

## Production

Elastic Beanstalk Instance
|-- Nginx
|-- Nginx W/Prod files
|-- Worker
|-- Express server

AWS Elastic Cache
AWS Relational Database Service

AWS VPC's and security group

- Default Virtual Private Cloud (VPC)

- - EB Instance
- - RDS (Postgres)
- - EC (Redis)
