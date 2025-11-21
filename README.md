# ⚡ Modern Developer Portfolio

A high-performance, interactive portfolio website built with **React**, **Vite**, and **Framer Motion**. 

This project features a "Bento Grid" layout, a spotlight cursor effect, glassmorphism UI elements, and dynamic GitHub integration to showcase your latest software engineering work.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## ✨ Features

* **🎨 Modern Aesthetics:** Dark mode design with a "Bento Grid" layout and Glassmorphism navbar.
* **🖱️ Micro-Interactions:** Custom magnetic cursor and a "Spotlight" background that tracks mouse movement.
* **🔄 GitHub API Integration:** Automatically fetches and displays your latest/top repositories.
* **📱 Fully Responsive:** Mobile-first architecture using Tailwind CSS.
* **⚡ High Performance:** Built on Vite for blazing fast load times.
* **🎭 Animations:** Smooth page transitions and hover effects powered by Framer Motion.

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React & React Icons
* **Deployment:** Netlify / Vercel (Ready)

## 🚀 Getting Started

### Prerequisites
Ensure you have Node.js installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/portfolio-website.git](https://github.com/yourusername/portfolio-website.git)
    cd portfolio-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser to see the result.

## ⚙️ Configuration & Customization

All personal data is centralized in `src/App.jsx` for easy editing.

### 1. Update GitHub Integration
Locate the `GITHUB_USERNAME` constant at the top of `src/App.jsx` and replace it with your handle:

```javascript
const GITHUB_USERNAME = "your-github-handle";