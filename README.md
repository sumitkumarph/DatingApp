# Full-Stack Dating Application 💑

Welcome to the **Full-Stack Dating Application** repository! This project is designed as a comprehensive, end-to-end learning resource. By exploring and building this application, developers can learn how to design, develop, and deploy a full-fledged Single Page Application (SPA) using modern enterprise technologies.

## 🚀 Overview

This is a complete, feature-rich dating application built from scratch to demonstrate real-world development workflows. It bridges the gap between theoretical concepts and practical implementation, covering everything from database design to advanced front-end state management.

### Tech Stack

- **Front-End:** Angular 20 (Single Page Application architecture)
- **Back-End:** ASP.NET Core Web API
- **Database:** SQLite (Chosen for its lightweight footprint and zero-configuration setup, making it ideal for learning and local development)

---

## 🛠️ Project Structure

The codebase is split into two primary projects for a clean separation of concerns:

```text
├── frontend/      # Angular 20 Single Page Application
└── backend/       # ASP.NET Core Web API & SQLite Database
```

---

## ✨ Key Learning Concepts Covered

By working through this codebase, you will understand how to implement:

### Back-End (ASP.NET Core)
* **RESTful API Design:** Building scalable endpoints to handle user data, matches, and messages.
* **Authentication & Authorization:** Securing endpoints using JWT (JSON Web Tokens).
* **Entity Framework Core:** Managing database migrations, queries, and relationships in SQLite.

### Front-End (Angular 20)
* **SPA Routing:** Creating fluid, client-side navigation without page reloads.
* **Component Architecture:** Building reusable, modular UI components.
* **HTTP Client & Interceptors:** Managing API requests, handling errors globally, and attaching tokens automatically.
* **State Management:** Efficiently handling user sessions and application state.

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
* [.NET 8.0 SDK](https://microsoft.com) (or the version corresponding to your current .NET environment)
* [Node.js](https://nodejs.org) (LTS version)
* [Angular CLI](https://angular.io)

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/sumitkumarph/DatingApp
cd your-repo-name
```

#### 2. Run the Back-End (API)
```bash
cd backend
dotnet restore
dotnet run
```
*The API will start up and automatically generate/initialize the lightweight SQLite database local file.*

#### 3. Run the Front-End (Angular)
```bash
cd frontend
npm install
ng serve --open
```
*Your browser will automatically open to `http://localhost:4200/`.*

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
