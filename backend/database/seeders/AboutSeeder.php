<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\About;

class AboutSeeder extends Seeder
{
    public function run(): void
    {
        About::create([
            'description' => 'CyanBites lahir dari kecintaan pada kuliner yang lezat, cepat, dan menyehatkan. Kami percaya bahwa makanan cepat saji tidak harus identik dengan bahan rendah kualitas. Setiap menu kami dibuat dari bahan-bahan segar, dipilih langsung dari petani dan peternak lokal terpercaya. Didirikan pada tahun 2024, CyanBites telah menjadi favorit di kalangan pekerja kantoran, mahasiswa, dan keluarga yang menginginkan makanan enak tanpa antre panjang. Dengan konsep "Fast & Fresh", kami siap menyajikan hidangan dalam waktu kurang dari 15 menit tanpa mengurangi cita rasa.',
            'vision' => 'Menjadi jaringan restoran cepat saji premium terbesar di Indonesia yang dikenal dengan kecepatan layanan, kualitas rasa, dan kepedulian terhadap bahan baku lokal yang berkelanjutan.',
            'mission' => "Menyajikan menu dengan waktu tunggu maksimal 15 menit tanpa mengurangi kualitas.\nBermitra dengan petani lokal untuk bahan baku segar setiap hari.\nMengembangkan menu inovatif yang menggabungkan cita rasa internasional dengan sentuhan lokal.\nMenciptakan pengalaman pelanggan yang ramah, cepat, dan berkesan melalui teknologi digital.",
            'values' => json_encode([
                ['title' => 'Kecepatan Tanpa Kompromi', 'description' => 'Setiap pesanan diproses dengan sistem efisien sehingga Anda tidak perlu menunggu lama, namun rasa tetap terjaga.', 'icon' => '⏱️'],
                ['title' => 'Kualitas Bahan Baku', 'description' => 'Hanya bahan segar, tanpa pengawet. Daging sapi pilihan, ayam kampung, sayuran organik, dan rempah asli.', 'icon' => '🥩'],
                ['title' => 'Komunitas Foodie', 'description' => 'Kami membangun ruang bagi pecinta kuliner untuk berbagi pengalaman, review, dan eksplorasi rasa bersama.', 'icon' => '👥']
            ]),
            'hero_title' => 'Tentang CyanBites',
            'hero_subtitle' => 'Rasa premium, bahan segar, dan layanan cepat. Dari dapur kami ke meja Anda.',
            'hero_image' => 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80'
        ]);
    }
}
