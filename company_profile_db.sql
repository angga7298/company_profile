-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Apr 2026 pada 07.16
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company_profile_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `message`, `is_read`, `created_at`, `updated_at`) VALUES
(1, 'MUHAMAD FAZRI HAFIZ', 'fazrihafidz120@gmail.com', 'gajelas', 1, '2026-04-11 07:04:57', '2026-04-11 11:42:19'),
(2, 'anggay', 'anggay@gmail.com', 'lamar kerja dong, bisa gk', 0, '2026-04-11 11:42:11', '2026-04-11 11:42:11'),
(3, 'anuan', 'anuan@gmail.com', 'website gajelas, btw info loker', 0, '2026-04-11 11:47:30', '2026-04-11 11:47:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_04_11_094747_create_personal_access_tokens_table', 1),
(5, '2026_04_11_095011_create_pages_table', 1),
(6, '2026_04_11_095012_create_portfolios_table', 1),
(7, '2026_04_11_095013_create_services_table', 1),
(8, '2026_04_11_095014_create_contact_messages_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pages`
--

INSERT INTO `pages` (`id`, `title`, `slug`, `content`, `featured_image`, `status`, `created_at`, `updated_at`) VALUES
(3, 'PERIKANAN', 'perikanan', '<p>Perikanan adalah...</p><p>Kami bergerak di bidang...</p>', NULL, 0, '2026-04-11 07:59:25', '2026-04-11 08:01:07'),
(29, 'Komit', 'komit', '<section style=\"padding:70px 20px; background:#ffffff; font-family:Arial, sans-serif;\">\r\n\r\n  <div style=\"max-width:950px; margin:auto; text-align:center; margin-bottom:55px;\">\r\n    <h1 style=\"font-size:38px; color:#0a3d62; margin-bottom:12px;\">\r\n      Komitmen Kami Untuk Laut Indonesia\r\n    </h1>\r\n    <p style=\"font-size:18px; color:#5c6b7a; line-height:1.7;\">\r\n      Menjaga kelestarian ekosistem laut melalui inovasi, edukasi, dan pengelolaan sumber daya berkelanjutan.\r\n    </p>\r\n  </div>\r\n\r\n  <div style=\"display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:30px; max-width:1200px; margin:auto;\">\r\n\r\n    <div style=\"background:#f7fbff; border-radius:18px; padding:30px; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=900\"\r\n           style=\"width:100%; height:200px; object-fit:cover; border-radius:14px; margin-bottom:20px;\">\r\n      <h2 style=\"color:#0077cc; margin-top:0;\">Konservasi Terumbu Karang</h2>\r\n      <p style=\"color:#444; line-height:1.7;\">\r\n        Mendukung perlindungan terumbu karang sebagai rumah bagi ribuan spesies laut.\r\n      </p>\r\n    </div>\r\n\r\n    <div style=\"background:#f7fbff; border-radius:18px; padding:30px; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=900\"\r\n           style=\"width:100%; height:200px; object-fit:cover; border-radius:14px; margin-bottom:20px;\">\r\n      <h2 style=\"color:#0077cc; margin-top:0;\">Budidaya Berkelanjutan</h2>\r\n      <p style=\"color:#444; line-height:1.7;\">\r\n        Mengembangkan sistem budidaya ikan modern yang efisien dan ramah lingkungan.\r\n      </p>\r\n    </div>\r\n\r\n    <div style=\"background:#f7fbff; border-radius:18px; padding:30px; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=900\"\r\n           style=\"width:100%; height:200px; object-fit:cover; border-radius:14px; margin-bottom:20px;\">\r\n      <h2 style=\"color:#0077cc; margin-top:0;\">Edukasi Generasi Muda</h2>\r\n      <p style=\"color:#444; line-height:1.7;\">\r\n        Memberikan edukasi tentang pentingnya menjaga laut untuk masa depan Indonesia.\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>', NULL, 1, '2026-04-11 10:51:35', '2026-04-11 10:51:35'),
(30, 'Fakta Unik', 'fakta-unik', '<section style=\"padding:70px 20px; background:linear-gradient(135deg,#eef8ff,#ffffff); font-family:Arial, sans-serif;\">\r\n\r\n  <div style=\"max-width:950px; margin:auto; text-align:center; margin-bottom:55px;\">\r\n    <h1 style=\"font-size:38px; color:#0a3d62; margin-bottom:12px;\">\r\n      6 Fakta Unik Tentang Laut\r\n    </h1>\r\n    <p style=\"font-size:18px; color:#5c6b7a; line-height:1.7;\">\r\n      Laut menyimpan keajaiban alam yang luar biasa dan penuh misteri.\r\n    </p>\r\n  </div>\r\n\r\n  <div style=\"display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:30px; max-width:1250px; margin:auto;\">\r\n\r\n    <div style=\"background:white; border-radius:18px; overflow:hidden; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=900\" style=\"width:100%; height:220px; object-fit:cover;\">\r\n      <div style=\"padding:25px;\">\r\n        <h2 style=\"color:#0077cc;\">71% Permukaan Bumi Adalah Laut</h2>\r\n        <p style=\"color:#444; line-height:1.7;\">\r\n          Sebagian besar permukaan bumi tertutup air laut sehingga bumi dikenal sebagai planet biru.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"background:white; border-radius:18px; overflow:hidden; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=900\" style=\"width:100%; height:220px; object-fit:cover;\">\r\n      <div style=\"padding:25px;\">\r\n        <h2 style=\"color:#0077cc;\">Paus Bisa Berkomunikasi Jauh</h2>\r\n        <p style=\"color:#444; line-height:1.7;\">\r\n          Suara paus dapat merambat sangat jauh di dalam air dan terdengar hingga ratusan kilometer.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"background:white; border-radius:18px; overflow:hidden; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900\" style=\"width:100%; height:220px; object-fit:cover;\">\r\n      <div style=\"padding:25px;\">\r\n        <h2 style=\"color:#0077cc;\">Laut Menghasilkan Oksigen</h2>\r\n        <p style=\"color:#444; line-height:1.7;\">\r\n          Fitoplankton di laut menghasilkan lebih dari setengah oksigen yang dihirup manusia.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"background:white; border-radius:18px; overflow:hidden; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=900\" style=\"width:100%; height:220px; object-fit:cover;\">\r\n      <div style=\"padding:25px;\">\r\n        <h2 style=\"color:#0077cc;\">Dasar Laut Masih Misterius</h2>\r\n        <p style=\"color:#444; line-height:1.7;\">\r\n          Sebagian besar dasar laut belum pernah dijelajahi manusia secara menyeluruh.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"background:white; border-radius:18px; overflow:hidden; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=900\" style=\"width:100%; height:220px; object-fit:cover;\">\r\n      <div style=\"padding:25px;\">\r\n        <h2 style=\"color:#0077cc;\">Ada Gunung Raksasa di Laut</h2>\r\n        <p style=\"color:#444; line-height:1.7;\">\r\n          Mauna Kea jika diukur dari dasar laut lebih tinggi dibanding Gunung Everest.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"background:white; border-radius:18px; overflow:hidden; box-shadow:0 8px 18px rgba(0,119,204,0.08);\">\r\n      <img src=\"https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=900\" style=\"width:100%; height:220px; object-fit:cover;\">\r\n      <div style=\"padding:25px;\">\r\n        <h2 style=\"color:#0077cc;\">Beberapa Laut Bisa Menyala</h2>\r\n        <p style=\"color:#444; line-height:1.7;\">\r\n          Fenomena bioluminesensi membuat air laut bercahaya biru saat malam hari.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>', NULL, 1, '2026-04-11 10:58:05', '2026-04-11 10:58:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', 'a08dd71d8a249c35889c094e83b857cf0f315cac09654b7907bca7ff3d1163ec', '[\"*\"]', NULL, NULL, '2026-04-11 05:28:52', '2026-04-11 05:28:52'),
(2, 'App\\Models\\User', 1, 'auth_token', 'dc4e98a9b4cdd8035a504ff3c9394ac9b162bce509aaf1bd40dd9bd09b613161', '[\"*\"]', '2026-04-11 05:42:48', NULL, '2026-04-11 05:35:31', '2026-04-11 05:42:48'),
(4, 'App\\Models\\User', 1, 'auth_token', '2187914ff2e17cd11fab9ac397179943242625cccf90fa0e58c56418d5c4ea87', '[\"*\"]', '2026-04-11 11:11:23', NULL, '2026-04-11 11:11:22', '2026-04-11 11:11:23'),
(6, 'App\\Models\\User', 1, 'auth_token', 'a73b50122b460507ba7bab9657a40f1658ec79809b176b9742b20c57517cc910', '[\"*\"]', '2026-04-11 11:11:49', NULL, '2026-04-11 11:11:48', '2026-04-11 11:11:49'),
(7, 'App\\Models\\User', 1, 'auth_token', 'dab97c02bd7c033f34c85a051e71e812101df56b2de2710f952a1cce235e830b', '[\"*\"]', '2026-04-11 11:11:53', NULL, '2026-04-11 11:11:52', '2026-04-11 11:11:53'),
(8, 'App\\Models\\User', 1, 'auth_token', '216e320ed08b36b4a942fcc944b400cecba7b896b2fa99661ee84c893a797147', '[\"*\"]', '2026-04-11 11:13:59', NULL, '2026-04-11 11:13:58', '2026-04-11 11:13:59'),
(9, 'App\\Models\\User', 1, 'auth_token', 'cac045d04561d25e9be258743366b3b7341bc986bd28c652692585b1c98052eb', '[\"*\"]', '2026-04-11 11:14:03', NULL, '2026-04-11 11:14:02', '2026-04-11 11:14:03'),
(11, 'App\\Models\\User', 1, 'auth_token', 'e46d4fe7cee6d62e74d69eefc01ee10966bc55a32e3a58a593266fb35a1f4ca5', '[\"*\"]', '2026-04-11 11:20:06', NULL, '2026-04-11 11:20:06', '2026-04-11 11:20:06'),
(13, 'App\\Models\\User', 1, 'auth_token', '2b5fb1157a54c894ffd3c96b2d32a973fe6c1b3753c547a4c1f0f5d668e39f56', '[\"*\"]', '2026-04-11 11:21:02', NULL, '2026-04-11 11:21:02', '2026-04-11 11:21:02'),
(15, 'App\\Models\\User', 1, 'auth_token', 'f03778eb966f04a6f9ae62bab8bcffd4129827e49cd57021c6d651b4362011a8', '[\"*\"]', '2026-04-11 11:23:35', NULL, '2026-04-11 11:23:34', '2026-04-11 11:23:35'),
(21, 'App\\Models\\User', 1, 'auth_token', '71e79bb0adfdb249c3cbaa748ffa1c45bd30465deedf99b434cf835038e2960f', '[\"*\"]', '2026-04-11 12:10:18', NULL, '2026-04-11 11:47:53', '2026-04-11 12:10:18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `portfolios`
--

CREATE TABLE `portfolios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `full_description` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `project_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `portfolios`
--

INSERT INTO `portfolios` (`id`, `title`, `description`, `full_description`, `image`, `project_date`, `created_at`, `updated_at`) VALUES
(5, 'Perusahaan Kelautan & Perikanan', 'Membangun website company profile modern untuk perusahaan yang bergerak di bidang kelautan dan perikanan. Website ini dirancang untuk menampilkan informasi perusahaan, layanan utama, hasil produksi laut, serta portfolio kegiatan operasional secara profesional dan menarik.\r\n\r\nFitur utama meliputi halaman profil perusahaan, layanan budidaya ikan, distribusi hasil laut, galeri dokumentasi, serta kontak bisnis. Desain dibuat responsif, elegan, dan mudah diakses di berbagai perangkat agar meningkatkan citra perusahaan di era digital.', 'Membangun website company profile modern untuk perusahaan yang bergerak di bidang kelautan dan perikanan. Website ini dirancang untuk menampilkan informasi perusahaan, layanan utama, hasil produksi laut, serta portfolio kegiatan operasional secara profesional dan menarik.\r\n\r\nFitur utama meliputi halaman profil perusahaan, layanan budidaya ikan, distribusi hasil laut, galeri dokumentasi, serta kontak bisnis. Desain dibuat responsif, elegan, dan mudah diakses di berbagai perangkat agar meningkatkan citra perusahaan di era digital.', 'portfolios/1kH3XKaXzJBhvjYN2h9MmOuNw4mky9aEYjWx5ZVI.jpg', '2008-12-12', '2026-04-11 10:30:58', '2026-04-11 10:30:58'),
(6, 'Budidaya Ikan Berkelanjutan', 'Kami menjalankan program budidaya ikan modern dengan sistem pengelolaan yang efisien dan ramah lingkungan. Menggunakan teknologi terbaru untuk menjaga kualitas air, pakan, serta pertumbuhan ikan agar menghasilkan panen berkualitas tinggi. Dengan komitmen terhadap keberlanjutan, kami turut mendukung ketahanan pangan dan perkembangan sektor perikanan Indonesia.', 'Kami menjalankan program budidaya ikan modern dengan sistem pengelolaan yang efisien dan ramah lingkungan. Menggunakan teknologi terbaru untuk menjaga kualitas air, pakan, serta pertumbuhan ikan agar menghasilkan panen berkualitas tinggi. Dengan komitmen terhadap keberlanjutan, kami turut mendukung ketahanan pangan dan perkembangan sektor perikanan Indonesia.', 'portfolios/sNypcRfiJdaUTd56aPRXGubclvVl9U19YCTxOofG.jpg', '2026-04-11', '2026-04-11 11:01:40', '2026-04-11 11:01:40'),
(7, 'Distribusi Hasil Laut Nasional', 'Kami menyediakan layanan distribusi hasil laut segar ke berbagai wilayah dengan sistem pengiriman cepat, aman, dan terjaga kualitasnya. Setiap produk ditangani dengan standar penyimpanan yang baik agar kesegaran tetap terjaga hingga sampai ke tangan pelanggan. Dengan jaringan distribusi yang luas, kami siap memenuhi kebutuhan pasar lokal maupun nasional secara konsisten dan terpercaya.', 'Kami menyediakan layanan distribusi hasil laut segar ke berbagai wilayah dengan sistem pengiriman cepat, aman, dan terjaga kualitasnya. Setiap produk ditangani dengan standar penyimpanan yang baik agar kesegaran tetap terjaga hingga sampai ke tangan pelanggan. Dengan jaringan distribusi yang luas, kami siap memenuhi kebutuhan pasar lokal maupun nasional secara konsisten dan terpercaya.', 'portfolios/kHCMqd2Gmfzvl0mBR4IZPM2Asaed9pXkwDwGFRf8.jpg', '2026-05-11', '2026-04-11 11:08:58', '2026-04-11 11:08:58');

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `services`
--

INSERT INTO `services` (`id`, `title`, `description`, `icon`, `created_at`, `updated_at`) VALUES
(2, 'Distribusi Hasil Laut Segar', 'Kami menyediakan layanan distribusi hasil laut segar dengan sistem pengiriman cepat dan terjaga kualitasnya. Setiap produk ditangani menggunakan standar penyimpanan yang baik agar kesegaran tetap terjaga hingga sampai ke pelanggan. Kami siap melayani kebutuhan restoran, pasar, hingga industri pengolahan seafood secara konsisten dan terpercaya.', '🐋', '2026-04-11 05:28:36', '2026-04-11 11:29:20'),
(3, 'Budidaya Ikan Modern', 'Kami menghadirkan layanan budidaya ikan dengan metode modern dan pengelolaan yang efisien untuk menghasilkan produk berkualitas tinggi. Sistem pemantauan kualitas air, pakan, dan pertumbuhan ikan dilakukan secara berkala agar panen lebih optimal dan ramah lingkungan.', '🏄', '2026-04-11 05:28:36', '2026-04-11 11:29:51'),
(4, 'Pengolahan Produk Seafood', 'Kami menyediakan layanan pengolahan hasil laut menjadi produk siap jual dengan standar kebersihan dan kualitas terbaik. Proses produksi dilakukan secara higienis untuk menjaga rasa, nutrisi, dan daya tahan produk sehingga siap memenuhi kebutuhan pasar lokal maupun nasional.', NULL, '2026-04-11 06:38:00', '2026-04-11 11:30:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0Be6PoKWZvvIuzjR3HTUHadHEnC8NYFp9wxWoIg4', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJIc0w5TG9GdjFqSDA5YXZjNmptMXNwUmlLT0hFSDhKdzRNOVVuQnJmIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912163),
('0hm336uFjlhr35e08W9GA2ILjrlceIfjCDKzBlnc', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJwODFWWW9NWklHZVRUTUFHbldGZzNZcFYxcUE2aFB4bkJCbkhHMk9vIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911738),
('1PnEalZe9eiEhj2EdSZWBUtPdtX01UFHL9coSSsR', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJSc09mamZ0eE9hMkVxb042OVhDYnI4MXVGQ25MNlBIMHM2ejBwWFRyIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912049),
('1s0bI1BfLzP3d4nga9cDe6DDMzbarT52DzKoQ6Ui', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJGTmNsd3ViVWNOUVhpUkhKRHcyQ1VqbzBCVlJ3NnNMcEN1MHl5QVBPIiwiX29sZF9pbnB1dCI6eyJ0aXRsZSI6ImFuZ2dheSIsImRlc2NyaXB0aW9uIjoiYW5nZ2F5IiwiZnVsbF9kZXNjcmlwdGlvbiI6ImFuZ2dheSIsInByb2plY3RfZGF0ZSI6IjIwMjYtMDQtMTEifSwiX2ZsYXNoIjp7Im5ldyI6W10sIm9sZCI6WyJfb2xkX2lucHV0IiwiZXJyb3JzIl19LCJlcnJvcnMiOnsiZGVmYXVsdCI6eyJmb3JtYXQiOiI6bWVzc2FnZSIsIm1lc3NhZ2VzIjp7ImltYWdlIjpbIlRoZSBpbWFnZSBmYWlsZWQgdG8gdXBsb2FkLiJdfX19fQ==', 1775912738),
('27q39kh3YTJU22iHHNXhF4XJn8wD0gDFgaLQIXp2', NULL, '::1', 'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI0UUQ0RWQwSTdhN0xtajlXdDlkNGNwcjRyVVVOZURjMWo2SFF3eHJEIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775910543),
('2UNxme8Xj8N3STg7coHveKLEUNIm6yZId468wOF6', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJMdGowc2p5dGtjZTJGc3Q1YXJUTTZoOG42ZmNqeUFFbUduNzJsZ05ZIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912045),
('31aOl0KtyHSQXjKAyZ0ws5rud6XAywLTo1Ys8t81', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJmNDBUbWkyNlQxbHE3TElReDdVMW0zN0Z6Y0VManpjWXhrc1puNzJUIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3NcLzEiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911882),
('3DKHYn4AB922J76oxIwBsia7c3JVyJCszO3gHowN', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJkZk9NTjlGbm5LT3FCSlRiblJITVlGRkFjd0FWNTVDOUZKOHJiQnNWIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911528),
('3WNGnLKshPKOkCF5UljHQs0tlKn9afCBtffhrDs8', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJUYlMyaTVpWloxM1Y1VkV0MjFPUXg1TE9ZeHZqNmsxeWxSUXdETEE5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911340),
('5jPPppH1BWcEkkOulCpqd4gal8QhqfBTidMxjZAr', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJhcjRUSHI0anVtMllWY2Jvb3hDZjZaQjVtRHFaREJrdjFCUTVScmNBIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911749),
('5Va7X3JXxDN1A2Vrns2rjkTGT8NbULD8mi0TVbPi', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI5TnA5R2dFeUc1Y2NsSE05UXBmbzdBZ2dzdFc4YkhtVERHdWV1UE11IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911340),
('6R01xsDgCFlJ4qP6AWN8mPtIVLEf8V8WjSyk3C3T', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIySWZnUHlZc2R0OTU4RjJxUndXenZSWVBTa2xWbDJJSUY4OGcwNVlTIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911370),
('6UKATDUO3nReteXyuOCiP8D1qbBgn8SapAenTbh1', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJFa1U0ZGRjWDIyNEVraGpvbmU0cWFlak52NlRMQXAwSVZhR1VuVXBiIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911029),
('7nQ05P8th7GXTBzvnnTUYKHybnRJUPuR9aLIaP0k', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJXd1ZGN3p3aElHaGVudEJidEswd0hZamQxTTcwaUw4c054M05rUmhvIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912035),
('7s9EgvSB9V9xr0Qccq4A5OzR5gRbOW670jN8GZQx', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ1eFRrUTNDUmp0Q1ltSHNkTzVOdlF0cXRHRzM1U0RPSjlRdUFoMlJaIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912033),
('86CEoQmkSsR0l5jhb0bYuyFXYait7HIFhoUusGBi', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJnc3Jjb0VCSTBLQnBnMGhmWldsaXg5SG1TN2FIbnRDNVliUlZyY1JCIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911370),
('98ml4ZL6zMs7R9FZsESBB4vpt2rbVtUXHt1mD4IA', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJsa2hZT3NqRlRCcllibVFpVXRGTDdpMUNoSURiN0tkZWN0MmgxcDl4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911393),
('9JD7G2H200cFPG7cdIDOXPZ8wjgMz3OVlDDWs2wv', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ6TUZyQUx4SUwwYVNmQWNYYjloeFlQTjNXa0pYYWRnRm9qNjRGMFpiIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3NcLzEiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911743),
('AZf5lq9uavIQV6WEvSgc6l4lqVaUlzv01S0BycID', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJSVHU1dzZOQjBxVFo1UlducHY1VXQ0TVpIbDNwWmQyR2l0ZEFKNkswIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912271),
('Bqk4sngiQ5mphmWdBfrkglpozk9LEWVP40MsR4Xd', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJTSVZEcE95M0EyWUxrUGpVUG5VUksxdXhNZ1NIdUoxZDN6Y2dTTlVOIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911367),
('cCHQ4YpqQY0efXr07UzGxsRyLvoiyfXG0A8gKXby', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ3NDQ1Zm9EOTVaRDc4MVlmZWxyOEhpdUpYZ0o2dXc2N3hkcUlmQkpwIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912146),
('cMw7dxCRtMAxu1DYLnTNIhvtanvrg2VffrlCVTJK', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJQSXlaT0RhZzZkcldLS2JiR2IxMThRUE1XbVZHeExLUFFmZkZ3ZW1kIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911335),
('cYz7vQHaVQFi65LzwgZs63yTizaVVdF1CBG4G0XX', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJvRDF1R3RkeGpJYklaZDI5T1BDZE5hNWZWVkswNDRZRU5pNVNoT25lIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911362),
('dfxF3T2jnIOdffbvKmF0GcgZGjDUTAm2x02IuvSJ', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJGNWtLWkdGNHl0UkNBQnAxRzlKa1l5Z21XQklLUkdFZ3cwa3J1SGVxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912033),
('dGehANSRB5i55XUd4tJwH6UPAUhGltVS2gXMNdOG', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJwZTFiT1dtbWdvZWhCYm1Rbm9pbmQ3WnRiVEM5NUcxUEk5Q1JETUYyIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911358),
('DHKBxXFgimhxTyfdpjCKZB5J9Rd7VurHniwv6sRR', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJDVmZ5amJrZExBczFFU3p0WHhsOFdtQkJ2NkcwR3FONXNrVDFZRXZtIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912051),
('DI6Nsp4K65nAY883sRXR0mi4yJbMBmk5cm9VdXB9', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJYamRlTmNMNlgwUHFpSVNlWVEydEFmelNhUGJWTzc5RGdSNWNmdEx1IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911749),
('dq7LOOTPHrdzLcforswBUmY41tXaXqzwkgyZjfVi', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIxdkpmMDZ0UU1iM0VNUUhVV3lKR2N4U1hiMzdyVFFKUEpsVVNZODZnIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3NcLzEiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912030),
('dUaqmhlTVEkXwyJeK7jeGj6RoqNLwCKHLygmP6w7', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJvRHNuYXhQaVlpSjFhTVI5c2hldTR6WXpjOGtzdjllR2pMQm9rOGNBIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911880),
('DV1498UjZwKxd5b8deAqNRB5UFIDsmI2wna9lHVG', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJtckhManJZRUxJSG5JbTZYRHV6RTZhSExyb0R3T3NjU0x3bjBDMXJRIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911393),
('Ed2JgaidmZJJysPmqqxVDeDsivduSbGfzURcjRQZ', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJQWXhJUW5pb1lqNk1ia2lZVlJIRmZHNDI1VHplZzh4MTdscFpQUFBpIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775910931),
('egjRTNO35UmzHe8ndo1RCTasIcXvj5oaVWcNdqsy', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJzSzcwU3o1MWlUeE5idVlwUGhJSzZVeXczUWo4eW5sSHRoQzNkcUUxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911029),
('EnM3AdZj6MyTXN6FIiiP1dkY2LUCjewG6xjBpbyu', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJHcFRDMU5rWGhnZnY3VGdLMkxnMlNEU1RxZVNUUm43dVhoWEoyT3QxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911327),
('EuETjcq0f4bEm0cp5lQwvwvr2TToI94Voj2P1Jgo', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJEU2xYRmhabnFGdGR6aEdhdFhlQWNTQjRHZmJuZ3k5anZJV3oyOXNKIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775910933),
('eXxGCISDX2mnyi8wO2jNGdnLTmfNNcsKtkqmcpQf', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJNM1UxTnJ2THZpOXBnSzg4ZElNWXl1TEZBcVNRMkxnaTRnMVhBYzdLIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912274),
('FN1AvEVskyzxWnb5eKnvsneK7wgyPIQvsqFgh7kL', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJIY3VENUxuR1J0c0N3Zkdqb1R5QUJHVnZsRnFTMDFjNWdGT3FyalZhIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912051),
('gfrIhQoyWw6n1sv4q43MCWvNgqb4ERoMSxeCAIZk', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJYcjlZRjV0OWlnT2lPQ0hta1VUNm5JR3pHWEpubUYwb2d5ejc3RVdNIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911368),
('gQxsWQEyVQNcwoeBdpffT03kGSfZOLpJPfetQlmE', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJoc05YcHBxYWpud1JGa1JVRWUwTVJDcjF5TWV6WWdjTkx5ajF5OEtMIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911332),
('gwXmWigoZBK8ow3G7syORzOrBhBXrUn6AfRiug8y', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIyRDBFdEV2Wm5Qb1QwZ3RmWnpac2xlUnI2TTZJclQ4SnZSRGJnQmZvIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911029),
('hipMLftjMhzEXnrE6VCtuAhyk0Ym6ykEoX5DJ3jI', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI1ZThWRmxQWnVwbkNFc1J5OHJjbmFRTllyZmluSWpyOXZNTWtTV2FJIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911009),
('hm06nsts7pG2OiGmNb3xQoiZEwl0QxipDRzWUluU', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJlWVBvRXU5amVNa1E0dkFiUXQxWDVrTGRQSHNhNVFSTnlNTmhHNlFvIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912051),
('iE0DAY92nytmWb89IMbwjvQ3Mjt4VsTboNHy5HiY', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI3TFhqRTlkb3U5MjR6M2FBTE9tUzB1bmE1aWZQMmFMVW5MUmFTUmJmIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912287),
('IjSp3CiiargbzNOOfS3WB2BXgIENiE16zbIOBVnk', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJkSFpOcDQ2TGRPbEhvR25OZUU4amx3QVhRVmplbjVCYm1CcTJwVGhTIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911559),
('iPE5BKYBYqB0thavTNfr41Q2Dc6EK3IbC5IKBCtZ', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ3TmQ2TmU0U2FBaGgzVDEwR1djcjRDcU5vcmV5VkRHdE43THZyczRxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911367),
('J0nmH9gWsD9EgdL8XnlKK1CAXta3Mfi5BykW75N5', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJRSG9PRk9QNUVIMzEwRjRWMFR2cWs1R2VVSElqUlppQnZFVXRzSVFHIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911340),
('JHWk57PMMzMg4t563N67AJ4nhhGJdXfi8Vn8AJbY', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJySjA1alp1TUlOWEdVeXlrVFJZUXNxZ1dvY3plS1B3ejljOEl5Z05SIiwiX29sZF9pbnB1dCI6eyJ0aXRsZSI6ImFuZ2dheSIsImRlc2NyaXB0aW9uIjoiYW5nZ2F5IiwiZnVsbF9kZXNjcmlwdGlvbiI6ImFuZ2dheSIsInByb2plY3RfZGF0ZSI6IjIwMTItMTItMTIifSwiX2ZsYXNoIjp7Im5ldyI6W10sIm9sZCI6WyJfb2xkX2lucHV0IiwiZXJyb3JzIl19LCJlcnJvcnMiOnsiZGVmYXVsdCI6eyJmb3JtYXQiOiI6bWVzc2FnZSIsIm1lc3NhZ2VzIjp7ImltYWdlIjpbIlRoZSBpbWFnZSBmYWlsZWQgdG8gdXBsb2FkLiJdfX19fQ==', 1775912787),
('K6CHZEfLKojLB0St7IvHrLPKLCu0exKWkG1CbUHQ', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ1bEVQYnczaFNvVjk1cERqWXh6clFRZXNHYjBnV2o0TFJvQmVINHlBIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911532),
('KGtCbt1SsrUNyX7NGbZRHIWFQ8IZyWQiTDy9iaLd', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIzdlFyOFZtb2ZzSG1leHVkQm5abkZrUU8yaFdKM3YwT0hwWW9tcm9vIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911370),
('kP5ENCSrmxuubG6GbIilhUdBPdYoONZlEfLICNeM', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIyZThaZDhKZThSWmZIS2JnYTdya2pqUVhlMURRNG81RnNxMWFnMkZhIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911340),
('kSmFpIMhF1uwxW25CenO46SmPWoeYc5msEosV1eX', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJFWlNRWmxaaTdWTkRoNE5sQlNvR1ptajE2a1pKQ3N2eTBHUlRwNjk5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911009),
('Kt5eOJBwAcQnbXTvLouTp1dW1XQT18cJ2vDyMeZ7', NULL, '::1', 'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJPd2xJMWhrOXNvRTQzVzJOOGNjc1RURzBhZHhtU29ZSm5Sbnl1TVB5IiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775910580),
('KuU54mfmCgj3muakjL63qZNtrKPKebljNVtGwjvA', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJvTzZmbkdSRFhxYk9sYk5kUk1FWDhVWHJlamxNOFVoamxpWVR1ZUhSIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912045),
('l3zIs0Mi6veQ3gdYrOOoaLTkqu5cNMo6GnxAAfgh', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJkNkNrNE1yWUYwc0NLcXpQOUZkekJBR0dMSTRjZFVJeWVtZXRvN2xmIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912274),
('L6wAaYYngmlLiJWx65DYg58BqZ24p3j9juTdk0Vk', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJiZ0tWZ1plTENXSGlvcXY3dURPWUNVaENpNW1LR0N1Smk4bndIMWNHIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911370),
('L7JFLpY7zboCFAGKQBaEGdWEePzJ24Sm05spwQLZ', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJpRlUyaDkyS2JtSVBNcEZLRFVqQ21TSnVYWGpETzF5eWhGdDNUaFp2IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911528),
('LEevfTlf3AnyXhDN62ZdxV7RgTFIlPkWB7ERkWiI', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJIZGZlNVVlV0Y0YVltc0IzNGVnSWlJajBpUHBJUW81S2lyU3dyRWQwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911343),
('LIYbUo6jzcB74aDVxLnFV8lsmvx8DY2ucwT21LSB', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJqMWsxdUF1SHZPdEs0MGZaMm9lTVdSVUpiYXdnb3VkVjJ1bHF5MmowIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3NcLzEiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911743),
('lqa0jglG80xZRu0inlNxf5wvpiaiYWyIhjnFOxYF', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJQTkNEbE5oR2JXd2VDM2lnVVB2ZEFUdGZjT1pyYjg4RjZNSk9oMlc4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911367),
('ltkpKNtRmpddEvtOKg1rWzaV3a8RyRawDU2x8jq2', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJqcnJjcTJHTHE2dW9WU0J4VHNKMnd0WXRnZ2ZXbTRLbmR6dkQyQmtXIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911332),
('MRE2pufaAmmRGicpPL9TXaAZGrsME0gTjwljYc7C', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJDMFVSMFpHVldKZFZWMm44M2xPZWtrNFhkc0FxQXU0RlVoTVV5N2FSIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911393),
('MTtUPiSVasvF6zyvSqKmv5K2bAHDQJFwZieo2JB3', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJBTU04NlhtbW1aZ2ZqQktUeVd4RU4xeVpyS1dzZ1plTmhnaHkyOUpTIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911340),
('MZrFuevSaCpluZedm0XBqDsd5WqPF9STYLQS6Dah', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJYbDdybE9TUE5mcFZOT2JsMUZFdkhBWVRiaWtCSFhXZ0Z1c1BzNUFtIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912051),
('NeZUlhmvWxt6pKBO8q9AWEus0fgVANoxNcAHNMRH', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ6bzZlYjR6bmRxcDI2SVBYU043SWh2ZEJUOWFBNnNQbVdDYUNHT2FCIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912051),
('nIERTycUCrHRSHDlDlKAsA1lptcMu4dP3BQ5KPPT', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIwcVRXdm1vS3ZrY2NJNGlkbHJ2M05FTVlqWmxUUmhaQjN2Y2I1N2pyIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911327),
('NoaMgXJQH2py3R1V3KB0VWl7QxDbM8RoUjv9AS4y', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJDVEk1bW5LQmtRZnNQNDhhNVpielF1UmI1a04zNHNkbnA5Q2tGRnhuIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911370),
('NpM5furyjLcLarmsEprwZI720mdWgfosH7EUfNax', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJzejhYQTZTdUxlUk12ZUIxNVk1SkJOTUthR3BPSzNPaDloaWY0NGtSIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912143),
('ntGztlsll6yT9jGpZY2RmJntblPSPm3HqLTTVt86', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ3WlJORlVOb3QxOTZaRDV3Z1kyaERZZWhna3BvYzZpekh5STZUZmxkIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911370),
('oxsmI1jXs4A12f4GzZYl7daKVgLsITAU7N51l1s1', NULL, '::1', 'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIwNXdtcWFnSFdONDNubmRkUW5OSzdYaEtKSHVnQnpKZlFJQVBCZ3hGIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775910754),
('Oy0Bn3BJzZZbWfYkKfcJmtGjrvJ7mj6blrvjfRg8', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJaQXNOazN0blZOdUEzU25qU3l4WWtPYmM4RkJJdzdyNnJJaXlSTFJjIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911553),
('OZ8Mz3oUx6baSRFDVzd8k2G5WbM8SkOgDYQ8xF9n', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJMNGY3YUR0MUhKMzdTQ3g0R1lMQ1VJcHFCZkNvUkQzYnNCTjJxa24yIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912045),
('pcaJbpaG6aMyHZjk4cM6RFWiiyOrTgrOcFVY3RLi', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJDQWNoa3RWdWNjNW9VRnBBbHkxV29tWnFwSmI2VEtmRnZ0ZXI4ZUY0IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912044),
('PdTzuDGvNgY8xutjnHxw27frvdEb8QBRoY5s6Fd3', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI0Q3pHOGhpZnBncVp5eTVTVWhwYU5Ma0h4ZXdiUGNhUTBod1RKNG0xIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911009),
('pe0TGe6dUU6Zblfo16QeZIlYUwWxIbl8WqkJD0qo', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJmVUJ3cEpnbUdWNDlwYXduekNMRUdTWHFCT2VYYmJCTVNIakY4OU1jIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775910933),
('PMptQxGPVHXQpkfQyOczcXngiOP2D1LWCdrO4oQt', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJYdGVlc1NnN0ViWjdHd2lkV2RjWnRrcFJEM2xiamR6alFLdTlreTRmIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911595),
('pr57h3wsSvJKd7qE0wgG3ZtlEeWy7zXTOG0qNR6D', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJuYVdCZGk0a25NYTFYYlI4Y1RNS2hpaVY1OFlUNTA4UFBZb0o5aXhpIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3NcLzEiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911882),
('PwxloI9UuuwpsWzoJCAvB68HpiNmcYdVHUZNtS2F', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJDTjE2Y1g3ejFRa0NHRmhzT0xFVmVWU2ZVQmRhY3ZHVlVPaXRsZlkxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912051),
('qVbjoPWFcgUKGFiFu4GRXoHUBVeP7shgYcuXCncp', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJIUmt0VktHaDA5YzhzMXVwQXVRWE9nenh5WGozbEJnREhtRDVOUWFZIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911600),
('QvCjvdhO6szAluEC7PPylixt82sKui8bRpgYExqL', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJDSExYSW5oRWJxSTRPbEVDZGlXSDg5MWdocUptMGxmMDBRa1pmYUliIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912143),
('rG8p16wbiNE66uZrnLlRSIRohXH5xvwV1y9Zu4sz', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJTMXNacFdRS1dGOGdqYUNJbTY3VGNHRE5ZNDN5enBDcTh5NEQyeHlSIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911393),
('RgJxgmYRWPs2MEK59fLyAvY2rIeNBCwUygGw0mma', NULL, '::1', 'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJtWG45ZGhsSEh1Q0d4NHVXR083WURyYzdmangzU0dwNDNGTXRkTDhGIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775910718),
('Rj5hZObQp6s21B3Au7B0kbB5qT2UzDfFLb7xUJ7u', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJsUGNhalI2RUJxZDdzVlA0SGkxRHhpc3BLMno2UEU0SVByT2hCQUh3IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912283),
('rJzaQU5LYZoyhEiSZQvvb0Iy4MdR079Qgm1oX3QD', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIzWHZFS2ladVd5MWxJSEw0RkIzdVhkcWhCUXJtdXIzY1RZN21ad3FiIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912049),
('SLHvI925w4dHtXvxg6CqpY88g3TJVblEwerLeFR9', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJicWxsNmFOU2xvM3ZJbmQ2RDVBSzB2VVd4OHV3N3N4Q0xvSTBpVE9FIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911340),
('stHTSnMySP33f2ahIKEIKCE1X30yFaoBT6WccLRP', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJYVkFOeEZPNEdGRGprOW5YS1hYVXdKcUltc0xVMWM2V0M1YVlzbkNUIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911332),
('StlZEORRR8mfCwD7GRXVjZsibjeTGcQgOZN4d7Ln', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJTdGtOcDhBVU1jWXdYREU0QTFiS1NsV2lFRENFS01lSkZ5OHk0aWtjIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912035),
('Sx1FIlwEJYMEHpjEURmuFw7jRQYyD6A4jwEPUVxF', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJTd1BvVkV3Z1lPczdQNDM4SGtqTnJYaGYzRGhSTjMwZk1GdEtUb3hFIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911340),
('t06gmLkCaIsu7KShICXhAJunAzUbAfjmbT47s0Ni', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJnc2V1cVVxak5wcXZNNXBGa0RobEptRXZMQ2dJQjFjUmhnOHowMEZnIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911327),
('t4W0l5jMHx5yzom1wAZdWQTCGLhaGWLi80anw5uu', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJZdVpldGk3REI0a3FoVXJ2TXZrUjJwUHlpaUVKOWpIUWhYcTFtTmZWIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912283),
('T7FBpepTJMqHuwMKKPh80nASgZqhQJry2Liyxatm', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI0U1ZFNmw2SHJ0UzhZcnpReXg1Q05PMzBiWWdCNkd3QmU1ZUEwaEZWIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911370),
('TaBxwI9mvnljc4mUGna5JGwvC47GItoLaoXc3hWR', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ5enRaaGhVb0tOWTVVdHlMUG5XbDdYYmVqaTNCVXBuNTloYTdsOThHIiwiX29sZF9pbnB1dCI6eyJ0aXRsZSI6IkFOR0dBWSIsImRlc2NyaXB0aW9uIjoiYW5nZ2F5IiwiZnVsbF9kZXNjcmlwdGlvbiI6ImFuZ2dheSIsInByb2plY3RfZGF0ZSI6IjIwMjYtMDQtMTEifSwiX2ZsYXNoIjp7Im5ldyI6W10sIm9sZCI6WyJfb2xkX2lucHV0IiwiZXJyb3JzIl19LCJlcnJvcnMiOnsiZGVmYXVsdCI6eyJmb3JtYXQiOiI6bWVzc2FnZSIsIm1lc3NhZ2VzIjp7ImltYWdlIjpbIlRoZSBpbWFnZSBmYWlsZWQgdG8gdXBsb2FkLiJdfX19fQ==', 1775912469),
('tKV30tS3CIb06gIsvZpkRV8EaWC0oqB1p04cpBoG', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJzSzBTWnYzeGo1MDAxdmkybUE2UW5MSk14NzM1TlRCZFZ3ajlUTzlzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912051),
('Ts4UYyTrrc2phk45uMPqvl47d1uxHnW7PftYgMYI', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ2cFNoczd2YWY2WkFhWXQ1WmNmQTBzczdvNUlTbHNTVzdTM3EyVVBtIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911532),
('U4z7PuZsEONEvPTxqG5Yl3j3lKR9tCFTCaaBo1sy', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJxMjhiM3JiekVMN3E5V3lHdzNyaE9Vd0VtN3Z6SUJKc0M4NHEwOGpLIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911368),
('uGFw9MgQKGY0w6P3o9WaLbfFvfD9XGpWRh09aJoT', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJHUXNrcTZUNExETXJ0cXRFOVB4UXJlWUJlNktqR1B5aFBJT3l1SGF3IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911358),
('UIHRRRr8j8OC89U0GFylMaLpdKKGULZRxLl5dsfp', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI5cUM5T2ZoM0dBY1d5OE1MUndSU2l6NldnT3Z0aUVHMEF4Rkk3c212IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911549),
('UOYq8JbRR9KKbfd23ynj6wim05qaGlLc3m2sbrsN', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ2QnRiS1diajdwcHZUc0haRDVBM09zTzRVMUJsbXJrMXJJaWVVZDh2IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912051),
('uvk24WhBxFXT60oHGwZftBNlXBIXD24MjJShChmB', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ2b0RCTmxiclZOSXJVeldVV3RuQVlUY25mMnB5NW5sZWtBRUhpcUdDIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912287),
('v5N7hL6yHbq30aEuY14v1xaSxmQ5ynMTmzWakAw0', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI1VnpxaFU5TERHZU90alV6MWI0NFY3ZU5NbGZTdWRCRzlodjhiNlRHIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911528),
('VjvAGhoUosceXUDbjkT8oYxXo6jL41wyxZAvxMLr', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIxR2pqZng2NnpKamFmOGkwQ1FJTFczZk12cmZJZWtRdnk3VDFTS2hPIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775912044),
('VSIijQOK63o4M6VbWcvjH1RDLmEmpgW7iMeZMbug', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJLQ2d4em5OQWZxdlY5cEJqUnI4T0NyWlFaYWRnU2lHVGhPRmdydFZhIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911327),
('W1oevVq0wgQf2QnUu6TjzxOCszQhAjIFD7HGuKf1', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJJcWViUUMwZHFNSVdwcDdqNjRpQnI0dUpPQUtBSjFIUndjajlqVmxHIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911370),
('w9EOXtbOMn9Bl2bEE27R6iJVWr8V3OtBxGih4O7q', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI0WkhiQ0tpdXB0RmhCTWh0TEJnbWpoeTNtZmFXMDNmVnRDTk9rMEdGIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911342),
('WyEGErCgOFV1Zl4TkF2QX5aUllwsfAeG0hsXmLVk', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJFRDZCVWd2cHlhZjRQWm85VkZxRkhOZFdnaW5CTGhlcjhqVXRKWlR1IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911368),
('XbCMptOJbQocn218JTDFCo2ALqWtgqowWFGt0ywN', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI2aDFmVmY5SzRMTWxKRDdZMTVQRHQ2WmY3RFhDNW9XbmVWbWlEd3ZBIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775912044),
('XCfP31NoWCR3JBzsJDYzs2Jfkz6i6CUVVytypvdK', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI1OWhyanpVVDhJS2xDMTQ5NE1iTTZETkFlblJIbVhXalpzckNlQkdGIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912045),
('xLaIZ8GFxtwmXoQ5NzbCqS9BGkG04RCbTitKCArZ', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJhTlA4U3RVSHZGTVNMTUt2YTNkZ2JtR2IxOVYwTWJtNmFqYXUwVnFrIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911549),
('xqHOaJHV1eTy9OMpEjzeTXDJtTp9rYtOuNUwberm', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJLOWlSV3R2d1E1MEQzNzZIanA0Q0FKRTIzYnhvY1dKazBzTFI3YXZBIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911528),
('xsKZZBFcZMgZrxzxRMGi9KYtTQgvP3vLI5k79YJM', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJpamN3MEEzaFBSZm1VNVJleGNlWElmS2M4VDgzRXFzVXNVTnhnb3lIIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911368),
('XvSmCdb8lD8JBWwK1GWKJnE5PU0SCJURliGrPtts', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJXc0hVaW9ybDI3Y1h1MHU4aTREekZ0VmoyWXFIa0NOQW9BdVozQU92IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911367),
('yDnlJ2oUJ1BbUhiFWP0mmaJMH1DJxWS0Fzha5S6X', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ5VUZNbW5hNlIzSGpyeWpZUXV0TzBSbklWamR4TXJONnVjTU5SUWlCIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911370),
('YmJiXtfzEDKxpxVyVbavuxdwXXDGqE09PVq3UVHd', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJuZzlURkVaWlBya1VTbFRYV0g2TVM1SzZCYm0wS0VDaEczaHRwVXJXIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775911029),
('yPoBC6Wcn4PSiz1ZJPDfX7HDSElEEmgDV3oiBNEu', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiI2REVvQndBcFJDdTJKcGRVU2NGSWl0TDVBU1dkUzdVcVpHcXhtcnAxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911335),
('YrYRnx8jFn355QMIFwvImzBONIPOC1giknspoykW', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJzTXA4djg2OW9zQ1E1ejF1VFRyZlVjMWlYUkQwMXRPMVJ1WmdKZXNFIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911340),
('ZaxEMbTZf3TSezvio42yH1EYxsZgiyGXDorf8CgV', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJibjlKbFZwUG1wc2IyVmhadWR5RERiNTBSNk1NU3Rzdk05eVAxNk1sIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BhZ2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911009),
('zFZR8CId4kwE9UrcWoqlxiSV3yGd0bmq7HkzjYVQ', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ6Nm9WcjZKRkJkNGhiTXRvcEROYTNTelJDbjVqNGkzYU81SUQybnJ5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2FkbWluXC9jb250YWN0cyIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1775912045),
('zIn7PewLQ3r8x4ye4u8aX7RYBL29SGgZEefOCKdM', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiIwdzl4blhLU3JVVWZFVnZWVVlORGZob2hLRXNUMnlvTVJQRGtScnN4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3BvcnRmb2xpb3MiLCJyb3V0ZSI6bnVsbH0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1775911595),
('ZUlqjcAPxq9gFm6urUH42goKFiA5WYLGi367ahXK', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', 'eyJfdG9rZW4iOiJ3M3VxUUdVOUJLTmVzUHRXdGdVejVLNlJzd3hyVTlXSFZJOTdtQXdzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3NlcnZpY2VzIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1775911332);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@example.com', NULL, '$2y$12$nlQ3WiavzDNIy/J04IGVCO1fPQ.cyJf0reJjoBQ0Mr2H6PvikGgFW', NULL, '2026-04-11 05:28:37', '2026-04-11 05:28:37');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indeks untuk tabel `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indeks untuk tabel `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
