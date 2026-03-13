# An EJS Project For Backend Practice



## Routes

### Healthcheck and entry point
* `GET /`


### 👱🏻 User Routes 
**Base Path:** `/users` (All routes below are relative to this)

#### User Profile 
* `GET /profile` (Full endpoint: `/users/profile`)


### 📋 Post Routes
**Base Path** `/posts` (All routes below are relative to this)
* `GET /` (Full endpoint: `/posts/`)
* `POST /create` (Full endpoint: `/posts/create`)

### 🔐 Auth Routes
**Base Path** `/auth` (All routes below are relative to this)

#### Register
* `GET /register` (Full endpoint: `/auth/register`)
* `POST /register`

#### Login 
* `GET /login` 
* `POST /login`

#### Logout
* `GET /logout` (protected: You can only logout if you are logged in)