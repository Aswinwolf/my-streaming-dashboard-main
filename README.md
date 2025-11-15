🎬 Streaming Dashboard Clone — Next.js + TMDB API

A Netflix-style streaming dashboard built with Next.js 14 App Router, TypeScript, Tailwind CSS, and TMDB API.
The app features a dynamic homepage with an auto-sliding hero banner, multiple movie rows, a detailed movie page, and a responsive UI optimized for performance.

🚀 Live Demo

🔗 Vercel Deployment:
https://my-streaming-dashboard-main.vercel.app/

🔗 GitHub Repository:
https://github.com/Aswinwolf/my-streaming-dashboard-main

📌 Features
🎥 Homepage

Auto-sliding Hero Banner (Netflix style)

Smooth fade transitions

Movie title & overview

"Play" + "My List" buttons (UI only)

🔍 Search

Search movies using TMDB

Fully responsive search results grid

🎞 Movie Rows

Horizontal scrollable movie categories including:

Popular

Trending

Top Rated

Now Playing

Upcoming

Action

Horror

Comedy

Romance

Documentary

📄 Movie Detail Page

Backdrop + poster

Title, description, metadata

Release date, genres

Fully responsive layout

⚙ Technical Highlights

Server Components for fast rendering

Efficient TMDB API integration

Environment variables support

Optimized images using next/image

Clean file structure

Deployed and optimized on Vercel

📁 Folder Structure
my-streaming-dashboard/
├─ app/
│  ├─ components/
│  │  ├─ Header.tsx
│  │  ├─ HeroBanner.tsx
│  │  ├─ MovieRow.tsx
│  │  ├─ MovieCard.tsx
│  │  
│  ├─ movie/
│  │  └─ [id]/
│  │     └─ page.tsx
│  ├─ search/
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ globals.css
├─ lib/
│  └─ tmdb.ts
├─ types/
│  └─ movie.ts
├─ public/
├─ next.config.js
├─ tailwind.config.js
├─ .env.local (ignored)
├─ README.md
└─ AI_Report.md

🛠️ Tech Stack

Next.js 14 (App Router)

TypeScript

Tailwind CSS

TMDB API

Vercel Deployment

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Aswinwolf/my-streaming-dashboard-main.git
cd my-streaming-dashboard-main

2️⃣ Install dependencies
npm install

3️⃣ Add environment variable

Create .env.local:

TMDB_API_KEY=your_tmdb_api_key_here

4️⃣ Run the project
npm run dev


Visit:
✨ http://localhost:3000/

🌐 Deployment (Vercel)

Push to GitHub

Import repo into Vercel

Add environment variable:

TMDB_API_KEY=your_key

🧠 AI Usage Report

See AI_Report.md for information on how AI assisted in development.