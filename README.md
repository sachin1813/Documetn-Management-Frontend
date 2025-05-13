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
- 🎨 **Styled with CSS**

---

## 🧑‍💻 Tech Stack

| Technology     | Version                      |
|----------------|------------------------------|
| Angular        | 17+                          |
| RxJS           | Latest                       |
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
│   │   ├── ingestion-trigger/    # Trigger ingestion
│   │   └── ingestion-history/    # View history
│   ├── app.config.ts             # Application bootstrap config
│   └── main.ts                   # Entry point
├── assets/                       # Logos, icons, etc.
└── styles.css                    # Global Tailwind setup
