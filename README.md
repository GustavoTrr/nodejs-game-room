# Nodejs Game Room
A Game Room using NodeJS

The main goal here is to bring a study case of how to build an backend application using NodeJS and modern best practices of code and architecture and software development.

## This was built using:
- Node Docker Image: node-alpine
- VSCode

## Project's Structure:
game-room-api/
├── src/
│   ├── routes/
│   │   └── roomRoutes.ts
│   ├── controllers/
│   │   └── roomController.ts
│   ├── services/
│   │   └── roomService.ts
│   ├── types/
│   │   └── room.ts
│   └── app.ts
│   └── server.ts
├── package.json
├── README.md
├── TODO.md
├── Dockerfile
└── docker-compose.yml

## Development:

### Requirements:
- Docker
- Docker Compose

### How to start (step by step)
- Clone the project (```git clone ....```)
- Enter the project's directory (```cd ....```)
- run the app with docker compose (```docker compose up -d```)
* The API should now be running on http://localhost:3000/

### Tips:
- Use Git Flow for better team collaboration and release management.
- Check the TODO.md file for future enhancements and roadmap ideas.
- Contributions are welcome!