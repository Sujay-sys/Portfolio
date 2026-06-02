# Sujay's Interactive Portfolio

A modern, interactive portfolio website showcasing AI-powered applications, machine learning solutions, and full-stack web development projects. Built with cutting-edge technologies including React, Three.js, and Tailwind CSS.

🔗 Live Portfoilo:- https://portfolio-ten-steel-sqkfmqwlt9.vercel.app/

---

## ✨ Features

- **3D Interactive Card** - Physics-based 3D lanyard card with draggable interaction using Rapier physics engine
- **Smooth Animations** - Beautiful animations powered by GSAP and AOS (Animate on Scroll)
- **Project Showcase** - Detailed project cards with modal views showcasing your work
- **Live GitHub Integration** - Automatically displays your latest repositories from GitHub API
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI** - Glassmorphism effects, gradient backgrounds, and smooth transitions
- **Dark Theme** - Eye-friendly dark theme optimized for viewing code and projects

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js & React Three Fiber** - 3D graphics and animations

### Animations & Effects
- **GSAP** - Advanced animations
- **AOS** - Scroll reveal animations
- **Animate.css** - CSS animations

### Backend & Services
- **Firebase** - Backend services
- **GitHub API** - Repository integration

### 3D & Physics
- **@react-three/rapier** - Physics simulation
- **Meshline** - Advanced line rendering

---

## 📋 Project Sections

1. **Hero Section** - Eye-catching introduction with 3D card animation
2. **About Me** - Detailed background and skills
3. **Projects** - Showcase of featured projects with links
4. **Tools & Technologies** - Technologies and tools you work with
5. **GitHub Repos** - Live feed of your latest repositories
6. **Contact** - Ways to get in touch

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sujay-sys/portfolio.git
cd portfolio
```

### Project Structure:
src/
├── components/
│   ├── Aurora/              # Background gradient animation
│   ├── Lanyard/             # 3D interactive card
│   ├── ProjectModal/        # Project details modal
│   ├── Navbar.jsx           # Navigation bar
│   ├── Footer.jsx           # Footer component
│   └── ...
├── App.jsx                  # Main app component
├── data.js                  # Projects and tools data
├── main.jsx                 # Entry point
└── index.css                # Global styles
