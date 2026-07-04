# Node.js CRUD CI/CD Pipeline (DevOps Project)

A complete **Node.js Express CRUD API** with a production-grade **CI/CD pipeline using GitHub Actions**, Docker, security scanning, and automated deployment to AWS EC2.

This project demonstrates real-world DevOps practices including testing, containerization, security scanning, and multi-environment deployment (staging & production).



                 Push Code
                     │
                     ▼
           GitHub Actions Triggered
                     │
                     ▼
              CI Job Starts
                     │
     ┌───────────────┼────────────────┐
     │               │                │
 Install        Run Unit Tests    GitLeaks Scan
 Dependencies
                     │
                     ▼
          Docker Job Starts
                     │
      Build Docker Image
                     │
           Trivy Scan
                     │
       Push to Docker Hub
                     │
        ┌────────────┴────────────┐
        │                         │
 develop branch             main branch
        │                         │
Deploy to Staging EC2     Manual Approval
                                  │
                                  ▼
                      Deploy to Production EC2



---

## 🚀 Features

- REST API built with Express.js
- Full CRUD operations (in-memory data store)
- Health check endpoint (`/health`)
- Unit testing with Jest + Supertest
- Dockerized application
- CI/CD pipeline using GitHub Actions
- Docker Hub image publishing
- Security scanning (GitLeaks + Trivy)
- Automated deployment to AWS EC2
- Separate staging and production environments
- Manual approval for production deployment

---

## 🧱 Tech Stack

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- GitHub Actions
- Docker Hub
- AWS EC2
- Trivy (container security scanning)
- GitLeaks (secret detection)

---

## 📁 Project Structure

```text
node-crud-app/
│
├── app.js
├── server.js
├── package.json
├── Dockerfile
├── .dockerignore
│
├── routes/
│   └── taskRoutes.js
│
├── controllers/
│   └── taskController.js
│
├── data/
│   └── tasks.js
│
├── tests/
│   ├── health.test.js
│   ├── task.test.js
│   └── validation.test.js
│
└── .github/
    └── workflows/
        └── ci.yml


GET /health

{
  "status": "UP",
  "message": "Application is healthy"
}

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /tasks     | Get all tasks   |
| GET    | /tasks/:id | Get task by ID  |
| POST   | /tasks     | Create new task |
| PUT    | /tasks/:id | Update task     |
| DELETE | /tasks/:id | Delete task     |


🧪 Run Locally
Install dependencies
npm install
Start development server
npm run dev

App runs on:

http://localhost:3000

🧪 Run Tests
npm test

Test coverage includes:

Health endpoint
CRUD operations
Validation scenarios

🐳 Docker Setup
Build image
docker build -t node-crud-app .
Run container
docker run -p 3000:3000 node-crud-app


🔐 Required GitHub Secrets

Configure these in GitHub → Settings → Secrets:

DOCKER_USERNAME
DOCKER_PASSWORD
EC2_HOST
EC2_USER
EC2_SSH_KEY

🔄 CI/CD Pipeline

The GitHub Actions pipeline runs automatically on:

develop → Staging deployment
main → Production deployment (with manual approval)
Pipeline stages:
Checkout code
Install dependencies
Run unit tests
Run GitLeaks (secret scanning)
Build Docker image
Run Trivy scan (security vulnerabilities)
Push image to Docker Hub
Deploy to AWS EC2

☁️ Deployment Flow
Developer
   ↓
GitHub Repository (develop / main)
   ↓
GitHub Actions CI/CD
   ↓
Docker Image (Docker Hub)
   ↓
AWS EC2 (Staging / Production)

🌿 Branch Strategy
Branch	Purpose
develop	Staging environment
main	Production release

🔒 Security Tools
GitLeaks → Detects leaked secrets in repository
Trivy → Scans Docker image vulnerabilities

👨‍💻 Author
DevOps CI/CD Project using Node.js, Docker, and AWS EC2.
