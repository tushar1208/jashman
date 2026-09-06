# Multi-Topic Data Science & Programming Assessment Portal

A high-security, anti-AI examination web platform with global student submission syncing, basic & intermediate question sets, and Vercel serverless backend.

---

## 🌟 Features Included

- **7 Topics**: Python Core, SQL, NumPy, Pandas, Matplotlib, Seaborn, Altair.
- **Admin Passcode**: `Bunny123`.
- **Dynamic Topic Configurator**: Admin selects topics; student tests update automatically.
- **30 Unique Questions per Test**: 15 MCQs, 10 Theory, 5 Practical (No duplicates).
- **Anti-AI Canvas Rendering**: Questions rendered on HTML5 Canvas to block ChatGPT extensions and DOM text scrapers.
- **Global Cloud Submissions Sync**: Submissions automatically sync to `/api/submit` and are visible in the Admin Panel (`/api/submissions`) from any device worldwide.

---

## 🚀 How to Deploy Live on Vercel

### Method 1: Push to GitHub & Connect to Vercel (Recommended)
1. Push this workspace folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Vercel deployment"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. Go to **[vercel.com/new](https://vercel.com/new)**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect `vercel.json` and deploy your website and serverless APIs (`/api/submit`, `/api/submissions`, `/api/config`) live!

---

### Method 2: Deploy Using Vercel CLI
1. Download & install **Node.js** from [nodejs.org](https://nodejs.org/).
2. Open terminal in this folder and install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy to production:
   ```bash
   vercel --prod
   ```

---

## 📂 Project Structure

- `index.html` / `python_exam.html`: Full interactive exam portal & admin dashboard.
- `api/submit.js`: Serverless handler for student submission POSTs.
- `api/submissions.js`: Serverless handler for Admin submission retrieval GETs.
- `api/config.js`: Serverless handler for Admin active topics selection sync GET/POST.
- `vercel.json`: Vercel routing configuration.
