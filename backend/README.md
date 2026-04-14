# 🌊 Deep Sea Maritime - Backend API

This is the Laravel 13 backend and administration panel for the [Deep Sea Maritime](..) company profile.

## 🚀 Getting Started

### Installation

```bash
composer install
```

### Configuration

1. Copy `.env.example` to `.env`.
2. Generate app key: `php artisan key:generate`.
3. Configure your database in `.env`.

### Database Setup

```bash
php artisan migrate
```

### Development

```bash
php artisan serve
```

The API will be available at `http://localhost:8000`.

---

## 🛠️ Features

- **Sanctum Authentication**: Secure API access for the Next.js frontend.
- **Admin Workspace**: Managed via Laravel Breeze/Custom UI for managing services, portfolios, and pages.
- **Mail System**: Configured for contact message notifications.
- **RESTful API**: Clean endpoints for all company profile data.

---

## 📡 API Endpoints

- `GET /api/services`: List all services.
- `GET /api/portfolios`: List all portfolio items.
- `GET /api/pages/{slug}`: Get specific page content.
- `POST /api/contacts`: Submit a new contact message.
