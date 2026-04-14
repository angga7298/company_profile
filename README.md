![Maritime Header](C:\Users\test526\.gemini\antigravity\brain\6bc758d7-8316-4df6-ac7c-0198d2c43d6e\maritime_header_1776176280798.png)

# 🌊 Deep Sea Maritime - Company Profile

> A premium, immersive "Deep Sea" maritime digital experience. Built for excellence, scalability, and impact.

This project is a high-end Company Profile website designed with a dedicated **Deep Sea** maritime aesthetic. It features a robust Laravel backend for administration and a cutting-edge Next.js frontend for a seamless, sensory-driven user experience.

---

## ✨ Features

- **🚢 Immersive Design**: Deep-sea gradients, wave-based transitions, and nautical-themed UI components.
- **🛠️ Admin Control Panel**: Full CRUD operations for Services, Portfolio, About Us, and Contact Messages.
- **⚡ High Performance**: Optimized image loading and server-side rendering with Next.js 16.
- **📧 Contact Management**: Integrated system for receiving and managing inquiries from potential clients.
- **🖋️ Dynamic Content**: Manage pages and Vision/Mission statements directly through the admin interface.

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: React Hooks & Context API
- **API Client**: Axios

### **Backend**
- **Framework**: [Laravel 13](https://laravel.com/)
- **Authentication**: Laravel Sanctum
- **Database**: MySQL / MariaDB
- **PHP Version**: 8.3+

---

## 🚀 Getting Started

### Prerequisites
- **PHP** >= 8.3
- **Node.js** >= 18.x
- **Composer**
- **MySQL**

### 📦 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   composer install
   ```
3. Setup environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. Update `.env` with your database credentials.
5. Run migrations & seeders:
   ```bash
   php artisan migrate
   ```
6. Start the server:
   ```bash
   php artisan serve
   ```

### 💻 Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment:
   ```bash
   cp .env.example .env.local
   ```
4. Update `.env.local` to point to your backend API URL (usually `http://localhost:8000/api`).
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📂 Database Schema

The project includes a pre-configured database dump:
- `companyprofile.sql`: Contains the primary schema and initial data for a quick start.

---

## 🛡️ License

This project is licensed under the MIT License.

---

<p align="center">
  Built with ❤️ for the Maritime Industry.
</p>
