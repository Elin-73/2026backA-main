# Tasks API

A small Node.js, Express, and MongoDB API with user registration, login, and
private task endpoints. The existing API is for **tasks** (`tareas`), not posts.

## Requirements

- Node.js and npm
- A MongoDB Atlas account (or a local MongoDB server)

## Run locally with MongoDB Atlas
IngSoftwareProject
7IGiTdJRlGZlHmCd
mongodb+srv://IngSoftwareProject:7IGiTdJRlGZlHmCd@cluster0.h6vbnbg.mongodb.net/
1. In MongoDB Atlas, create a free database deployment, a database user, and
   allow your computer's IP address in **Network Access**.
2. Select **Connect > Drivers** and copy the connection string.
3. Open PowerShell in the project folder and create your private environment
   file:

   ```powershell
   Copy-Item .env.example .env
   notepad .env
   ```

   Replace the `MONGO_DB` value with your Atlas connection string and replace
   `JWT_SECRET` with a long, private random value. Put the database name
   (for example, `tasksdb`) in the connection string. If your database password
   contains special URL characters, URL-encode them in the connection string.
4. In that PowerShell window, install dependencies and start the API:

   ```powershell
   npm.cmd install
   npm.cmd run server
   ```
   The API starts at `http://localhost:5000`. Keep the
   terminal open while using the API. `.env` contains secrets and is excluded
   from Git; do not share or commit it.

## API endpoints

Send and receive JSON. Register or log in first; use the returned token as
`Authorization: Bearer <token>` on private endpoints.

| Method | Path | Access | Purpose |
|---|---|---|---|
| POST | `/api/users/register` | Public | Create an account with `nombre`, `email`, and `password` |
| POST | `/api/users/login` | Public | Log in with `email` and `password`; returns a token |
| GET | `/api/users/datos` | Token required | Get the current user's details |
| GET | `/api/tareas` | Token required | List the signed-in user's tasks |
| POST | `/api/tareas` | Token required | Create a task with `descripcion` |
| PUT | `/api/tareas/:id` | Token required | Update a task's `descripcion` |
| DELETE | `/api/tareas/:id` | Token required | Delete one of the user's tasks |

Example registration body:

```json
{
  "nombre": "Alex",
  "email": "alex@example.com",
  "password": "choose-a-password"
}
```

Example task body:

```json
{
  "descripcion": "My first task"
}
```

The frontend is not included in this project. A web or mobile frontend can call
these endpoints over HTTP; private requests must include the login token.
