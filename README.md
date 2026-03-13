## EJS Auth & Posts Backend

Simple Node.js/Express backend using EJS views, JWT auth, and MongoDB (Mongoose) to manage users and their posts.

### Tech stack
- **Runtime**: Node.js, Express
- **Views**: EJS + Tailwind (CDN)
- **Database**: MongoDB via Mongoose
- **Auth**: JWT in cookies, bcrypt for passwords

### Setup & run
1. **Install dependencies**
   - `npm install`
2. **Create `.env` (use `env.sample` as a guide)**
   - `PORT`, `HOST`
   - `MONGO_URI` (e.g. `mongodb://127.0.0.1:27017/your-db`)
   - `SECRET` (JWT secret), `EXP` (e.g. `7d`)
3. **Start server**
   - `npm run dev` (runs `nodemon index.js`)
4. Open `http://127.0.0.1:7070` (or your configured host/port).

### Main routes
- **Health / home**
  - `GET /` – landing/health page
- **Auth (`/auth`)**
  - `GET /register`, `POST /register`
  - `GET /login`, `POST /login`
  - `GET /logout` (requires login)
- **Users (`/users`)**
  - `GET /profile` – user profile and own posts (protected)
- **Posts (`/posts`)**
  - `GET /` – list all posts
  - `POST /create` – create a new post (protected)
