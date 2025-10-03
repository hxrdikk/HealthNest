<!-- ~welcome note -->
<p align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hello+there!;Welcome+to+my+Project!" />
</p>

<div style="margin-top:12px;"></div> 

<!-- ~about this project -->
<h3 align="left"> ✨ About this project:</h3>

<div style="margin-top:12px;"></div> 

- HealthNest is a modern, full-stack healthcare web application designed to make access to healthcare simple, seamless, and secure. It brings together telemedicine, medication tracking, electronic health records (EHR), and patient management into one intuitive platform.

- With HealthNest, patients can book appointments, consult doctors online, track medications, and securely access their medical history. Meanwhile, doctors and administrators can verify providers, manage patients, and oversee healthcare workflows from dedicated dashboards.

<!-- ~vision -->
<h3 align="left"> 💡 Vision:</h3>

~ HealthNest was built with the vision of making healthcare more accessible and efficient. By leveraging modern web technologies and cloud platforms, it provides patients, doctors, and administrators with the tools they need for connected, secure, and data-driven healthcare delivery.

<!-- ~features -->
<h3 align="left"> 🧩 Features:</h3>

- Telemedicine – Secure video consultations between doctors and patients  
- Medication Tracking – Add, edit, and monitor prescriptions with reminders  
- Electronic Health Records (EHR) – Secure storage and easy access to patient health data  
- Authentication & Authorization – Email/password, OTP login, and provider verification  
- Role-based Dashboards – Patients, doctors, and admins with tailored views  
- Health Analytics – Insights and reports on healthcare activity  
- Secure by Design – Firebase authentication, Firestore rules, and HTTPS

<!-- ~tech stack -->
<h3 align="left"> 🛠 Tech Stack:</h3>

- Frontend: React + Vite + TypeScript for a performant and scalable UI  
- UI Framework: Tailwind CSS for modern, responsive styling  
- State Management: React Context API + custom hooks for clean and reusable logic  
- Backend & Cloud Services: Firebase (Authentication, Firestore, Hosting)  
- Video Consultations: WebRTC integrated within telemedicine modules  
- Deployment: Vercel for fast and seamless CI/CD  

<!-- ~installation & usage -->
<h3 align="left"> ⚙️ Installation & Usage:</h3>

1. Clone the Repository
```bash
git clone https://github.com/hxrdikk/HealthNest.git
cd HealthNest
```
2️. Install dependencies
```bash
npm install
```
3️. Setup environment variables  

~ Create a `.env` file in the project root with your Firebase configuration:
```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4️. Start the local development server
```bash
npm run dev
```

<!-- ~deployment -->
<h3 align="left"> 🚀 Deployment:</h3>

~ HealthNest is currently deployed on Vercel → [health-nest-fawn.vercel.app](https://health-nest-fawn.vercel.app)

- Deploy your own instance:
  
    - Push your code to GitHub
    - Import the repo into Vercel
    - Add Firebase environment variables under Project → Settings → Environment Variables
    - Add necessary dependencies in `requirements.txt`
    - Deploy 

~ For Single-Page Application (SPA) routing with React Router, add a vercel.json file:
```
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

<!-- ~project structure -->
<h3 align="left"> 🏗 Project Structure:</h3>

```
HealthNest/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Modular UI components (auth, forms, navigation, etc.)
│   ├── contexts/          # Context providers for state management
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout templates for different user roles
│   ├── pages/             # Application pages (auth, dashboard, telemedicine, etc.)
│   ├── firebase/          # Firebase configuration and utilities
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .gitignore             # Files to ignore (node_modules, .env, etc.)
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # Documentation
```

<!-- ~author -->
<h3 align="left"> 👨‍💻 Author:</h3>

- Hardik Jain

<!-- ~license -->
<h3 align="left"> 📜 License:</h3>

- This project is open-source and available under the [MIT License](LICENSE).
