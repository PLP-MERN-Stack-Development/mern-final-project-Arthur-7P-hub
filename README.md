# MERN Capstone Project – Week 8

## Project Name
**MERN Final Project**  

**Owner:** Arthur Kariuki (Audio Alchemist)  
**GitHub Repository:** [Link](https://github.com/PLP-MERN-Stack-Development/mern-final-project-Arthur-7P-hub)

---

## 1. Project Overview
This is a full-stack MERN application demonstrating:

- MongoDB database design
- Express.js RESTful API development
- React frontend with real-time features (Socket.io)
- Authentication & Authorization
- Testing with Postman
- Deployment on Render (backend) and Netlify (frontend)

**Features Implemented:**

- User Registration & Login (JWT Auth)
- Job posting & real-time updates
- Frontend connected to backend
- Responsive UI

---

## 2. Folder Structure

mern-final-project-Arthur-7P-hub/
│
├─ backend/
│ ├─ models/
│ ├─ routes/
│ ├─ middleware/
│ ├─ server.js
│ └─ .env (not committed)
│
├─ client/
│ ├─ src/
│ │ ├─ api/
│ │ │ └─ api.js
│ │ ├─ App.js
│ │ └─ index.js
│ ├─ public/
│ └─ package.json
│
├─ .gitignore
└─ README.md


---

## 3. Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend


Install dependencies:

npm install


Create .env file with:

MONGO_URI=<Your MongoDB Atlas URI>
JWT_SECRET=<Your JWT Secret>
PORT=5000


Run the server:

npm run dev


Backend deployed URL:
Render

API Routes:

POST /api/auth/register – Register new user

POST /api/auth/login – Login user

GET /api/jobs – Get all jobs (requires token)

POST /api/jobs – Create job (requires token)

4. Frontend Setup

Navigate to the client folder:

cd client


Install dependencies:

npm install


Create .env file:

REACT_APP_API_URL=https://mern-capstone-backend-x48s.onrender.com/api


Start frontend locally:

npm start


Frontend deployed URL:
Netlify

5. Postman Testing

Use Postman to test the API:

Register User

Method: POST

URL: https://mern-capstone-backend-x48s.onrender.com/api/auth/register

Body (JSON):

{
  "name": "Arthur Test",
  "email": "arthur_test8@example.com",
  "password": "Mern8!"
}


Login User

Method: POST

URL: https://mern-capstone-backend-x48s.onrender.com/api/auth/login

Body (JSON):

{
  "email": "arthur_test8@example.com",
  "password": "Mern8!"
}


Create Job

Method: POST

URL: https://mern-capstone-backend-x48s.onrender.com/api/jobs

Headers: Authorization: Bearer <token>

Body (JSON):

{
  "title": "Frontend Developer",
  "description": "Develop React components"
}


Get Jobs

Method: GET

URL: https://mern-capstone-backend-x48s.onrender.com/api/jobs

Headers: Authorization: Bearer <token>

✅ Expected Outcome:

Register/Login returns token

Create job returns new job object

Get jobs returns array of jobs

6. Screenshots for Submission

Backend server running

Postman testing success

Frontend connected to backend

Jobs page with real-time updates

7. Notes

All passwords are hashed using bcrypt

JWT tokens expire in 7 days

Socket.io handles real-time updates for job postings

8. Submission Checklist

 Backend pushed and deployed on Render

 Frontend pushed and deployed on Netlify

 Postman API tested successfully

 README.md included

 Screenshots captured

 Environment variables kept secret