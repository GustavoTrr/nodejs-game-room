# TODO

As a demo project, focused on building a basic Node.js application with REST APIs,
it intentionally omits many important concerns found in real-world apps.

The list below brings up some improvements and features that would be valuable to add:

---

## Security Strategies

- Add support for:
  - Authentication, Authorization, and Access Control Lists (ACL)
  - CORS, XSS, and SQL Injection protection
- Use common security middlewares: **cors**, **helmet**, **morgan**

---

## Database Integration

- Add a persistent database like **SQLite**, **PostgreSQL**, or **Redis**
- Redis is a great option for real-time game scenarios

---

## Data Mapping Strategy

- Introduce an ORM like **Sequelize**, **Prisma**, or **TypeORM**
- Apply architectural patterns like the **Repository Pattern** to abstract data access

---

## Error & Exception Handling

- Implement proper `try/catch` in controllers and a global error handler
- Improve logging strategy (use tools like `winston` or `pino`)
- Add input validation middleware:
  - Use **Zod**, **Joi**, or **Yup** to validate request bodies and params

---

## Additional Features & Improvements

- Add unit and integration tests using **Jest**, **Supertest**, or **Vitest**
- Include a proper OpenAPI (Swagger) documentation for the API
- Add a rate limiter to prevent abuse (e.g. `express-rate-limit`)
- Use environment variable management (`dotenv`)
- Add CI/CD pipeline for testing and deployment (e.g. GitHub Actions)

- Expand the business logic: implement room limits, game states, player readiness, etc.