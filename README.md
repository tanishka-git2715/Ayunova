# Aarogya Vatika — AI-Powered Ayurvedic Wellness Platform

**Aarogya Vatika** is an intelligent operating system that combines the timeless science of Ayurveda with the power of modern AI. It personalizes wellness routines—including diet, herbs, exercise, and mental well-being—based on your *prakriti*, prescriptions, symptoms, and lifestyle.

---

## Vision

To make Ayurveda digital, dynamic, and data-driven—empowering users to heal holistically with science-backed tradition.

---

## Features

- **Prakriti Profiler** – AI-based dosha identification (via quiz + image analysis)
- **Smart Diagnosis** – Reads prescriptions and identifies root cause
- **Lifestyle Graph** – Visualizes stress, imbalance, and routines
- **AyuPlan Generator** – Diet, herbs, yoga, sleep, rituals—auto-customized
- **Feedback Loop** – AI evolves plans based on user and seasonal data
- **AyurGPT** – Chat-based wellness companion (WIP)
- **Vaidya Dashboard** – For certified Ayurvedic doctors (WIP)

---

## Tech Stack

| Tech            | Role                                                 |
|-----------------|------------------------------------------------------|
| TypeScript      | Core language for type safety and scale              |
| React + Vite    | Frontend UI and fast dev server                      |
| Tailwind CSS    | Utility-first styling                                |
| Shadcn/ui       | Beautiful, accessible UI components                  |
| Supabase        | Backend (auth, DB, realtime)                         |
| Framer Motion   | Smooth UI animations                                 |
| Lucide Icons    | Icon system for modern UI                            |
| Tesseract + NLP | OCR + AI for reading prescriptions (planned)        |
| OpenAI API      | For AyurGPT and health recommendations (WIP)         |

---

## Project Structure
```
aarogya-vatika/
├── public/                    # Static assets (images, fonts, etc.)
├── src/                       # Application source code
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Route-based pages (e.g. Home, Quiz, Results)
│   └── ...                    # Other folders like hooks, lib, assets (if any)
├── supabase/                  # Supabase schema and configuration
├── .gitignore                 # Git ignored files
├── README.md                  # Project documentation
├── index.html                 # Main HTML template
├── bun.lockb                  # Bun package lock file (if using Bun)
├── components.json            # UI components definition (possibly Shadcn)
├── eslint.config.js           # ESLint configuration
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Lock file for npm
├── postcss.config.js          # PostCSS configuration for Tailwind
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # TS config specific to the app
├── tsconfig.node.json         # TS config specific to node (e.g. backend tools)
└── vite.config.ts             # Vite bundler and plugin configuration
```
---

Live Demo
The project is live and hosted on Netlify: 🔗 https://aarogyavatika.netlify.app/

---
