"# Documetn-Management-Frontend" 
This is the Angular 17 frontend for the Document Management Platform. It supports user management, document uploads, ingestion tracking, and authentication, with a modular, scalable architecture using standalone components.

🚀 Features
🔐 Login/Logout Authentication (JWT-based)

👥 User Management (CRUD)

📁 Document Upload (local support)

📊 Ingestion Monitoring

🧩 Modular standalone components

📱 Fully responsive (mobile/tablet/desktop)

🎨 Styled with CSS

🧑‍💻 Tech Stack
Technology	Version
Angular	17+
RxJS	Latest
Tailwind CSS	3+
Standalone API	bootstrapApplication()
Auth Guard	CanActivateFn based
Backend API	FastAPI (JWT + CORS enabled)

📁 Folder Structure
bash
Copy
Edit
src/
├── app/
│   ├── auth/
│   │   └── login/              #login login 
│   ├── core/
│   │   ├── api-service/        #api endpoint calling file    
│   │   └── constant-service/   #contain values used over complete application
│   ├── enviroment/
│   │   └── enviroment config/   #backend connecting details 
│   ├── shared/
│   │   └── table/               #re-usable component for table
│   ├── dashboard/
│   │   └── home/                #first screen after login
│   ├── users/
│   │   └── usersAddition/ 
│   ├── documents/
│   │   └── add documents/
│   ├── ingestion/
│   │   ├── ingestion-trigger/
│   │   └── ingestion-history/
│   ├── app.config.ts           # Routing & configuration
│   └── main.ts                 # Bootstrap app
├── assets/                     # Images, logos, etc.
└── styles.css                  # Global Tailwind setup
🛠️ Setup & Run
1. Install dependencies
bash
Copy
Edit
npm install
2. Run the application
bash
Copy
Edit
ng serve
App will be available at:
http://localhost:4200

🔐 Environment Setup
Create a file called src/environments/environment.ts:

ts
Copy
Edit
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8000' // FastAPI backend
};
✅ Available Commands
Command	Description
ng serve	Run development server
ng build	Build for production
ng test	Run unit tests (Jasmine/Karma)
ng lint	Linting with ESLint

🧪 Testing
To run unit tests:

bash
Copy
Edit
ng test
📸 Screenshots
Include screenshots or gifs of:

Login Page

Document Upload

User Management

✨ TODO
 Ingestion History UI

 Role-based UI access

 File preview support (PDF/images)

