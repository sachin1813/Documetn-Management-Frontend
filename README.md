
# 📄 Document Management Frontend

This is the Angular 17 frontend for the **Document Management Platform**. It includes user management, secure login, document uploads, ingestion tracking, and a responsive UI — all built using standalone Angular components and Tailwind CSS.

---

## 🚀 Features

- 🔐 **Login/Logout Authentication** (JWT-based)
- 👥 **User Management** (CRUD)
- 📁 **Document Upload** (local)
- 📊 **Ingestion Monitoring**
- 🧩 **Modular Standalone Components**
- 📱 **Responsive Design** (Mobile/Tablet/Desktop)
- 🎨 **Styled with Tailwind CSS**

---

## 🧑‍💻 Tech Stack

| Technology     | Version                      |
|----------------|------------------------------|
| Angular        | 17+                          |
| RxJS           | Latest                       |
| Tailwind CSS   | 3+                           |
| Routing        | `bootstrapApplication()`     |
| Auth Guard     | `CanActivateFn` based        |
| Backend API    | FastAPI (JWT + CORS enabled) |

---

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── auth/                      # Login module
│   ├── core/
│   │   ├── api-service/          # API service layer
│   │   └── constant-service/     # Constants used app-wide
│   ├── environment/              # Environment config
│   ├── shared/
│   │   └── table/                # Reusable table component
│   ├── dashboard/
│   │   └── home/                 # Dashboard landing
│   ├── users/
│   │   └── usersAddition/        # Add/Edit users
│   ├── documents/
│   │   └── add-documents/        # Upload documents
│   ├── ingestion/
│   ├── app.config.ts             # Application bootstrap config
│   └── main.ts                   # Entry point
├── assets/                       # Logos, icons, etc.
└── styles.css                    # Global Tailwind setup
```

---

## 🛠️ Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
ng serve
```

App will run at: [http://localhost:4200](http://localhost:4200)

---

## 🔐 Environment Setup

Create `src/environments/environment.ts`:

```ts
export const environment = {

    production: false,
    api_url : 'https://document-management-and-application.onrender.com/'
    
};
```

---

## ✅ Available Commands

| Command       | Description                  |
|---------------|------------------------------|
| `ng serve`    | Run development server       |
| `ng build`    | Build production-ready app   |
| `ng test`     | Run unit tests (Jasmine)     |
| `ng lint`     | Run ESLint on source files   |

---

## 🧪 Testing

Run unit tests:

```bash
ng test
```

Auto-generated test cases exist for:
- CommonService
- Auth Guard
- LoginComponent
- UsersComponent

---

## 📸 Screenshots

Include screenshots of:

- ✅ Login Page  
- ✅ Document Upload Form  
- ✅ User Management Table  

---

## ✨ TODO

- [ ] Ingestion History UI polish
- [ ] File preview support (PDF, images)

---

```bash
git clone git@github.com:sachin1813/Documetn-Management-Frontend.git
cd doc-mgmt-system
ng build --configuration production --base-href /docMgmt/
```
- ✅ cd dist #build is available that can be deployed on any instance

- Nginx : have the path of the project directory in that directory implement the build of the project 

