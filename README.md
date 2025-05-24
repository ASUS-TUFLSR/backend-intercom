# Intercom Backend

This is the **backend** for the Intercom-style AI admin panel built with **Node.js, Express.js**, and integrates with **Gemini AI** APIs.

---

## 🚀 Features
- REST API for Gemini AI integration
- Express server with CORS and dotenv support
- Configured for deployment (e.g., on Render)

---

## 📂 Project Structure
backend/
├── api/ # API logic (Gemini, etc.)
├── config/ # Configuration files (e.g., Gemini API keys)
├── routes/ # Express routes
├── .env # Environment variables (NOT committed)
├── .gitignore # Git ignored files (e.g., config keys)
├── server.js # Main server entry point
└── package.json # Project metadata and scripts

yaml
Copy
Edit

---

## 🔑 Configuration
1️⃣ **Create a `.env` file** in the backend root:
```bash
PORT=5000
2️⃣ Create the config file for Gemini API key:

Path: backend/config/intercom-admin-panel-XXXXXX.json

This file contains your Gemini AI credentials (keep it secret!).

3️⃣ Update .gitignore:

bash
Copy
Edit
# Ignore Gemini key files
/config/*.json
💻 Installation
bash
Copy
Edit
# Navigate to the backend directory
cd backend

# Install dependencies
npm install
🚀 Running the Backend Locally
bash
Copy
Edit
npm start
Backend will run on http://localhost:5000 (or PORT from .env).

🌐 Deployment
Deploy the backend (e.g., Render) using:

Build Command: npm install && npm run build

Start Command: npm start

Environment: Add environment variables (PORT, Gemini config path)

📦 API Routes
Route	Method	Description
/api/gemini/...	GET/POST	Handles Gemini AI requests

📝 Notes
This backend should be deployed separately from the frontend.

The Gemini key JSON file must be uploaded to your server (not in Git!).

Configure CORS if needed to allow frontend domain (e.g., http://localhost:3000 or your Render domain).

🤝 Contributing
PRs are welcome. Fork, clone, and submit a pull request.

