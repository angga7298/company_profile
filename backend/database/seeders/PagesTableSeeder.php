<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PagesTableSeeder extends Seeder
{
    public function run()
    {
        Page::create([
            'title' => 'About Us',
            'slug' => 'about-us',
            'content' => '<p>Kami adalah perusahaan yang bergerak di bidang teknologi.</p>',
            'featured_image' => null,
            'status' => true,
        ]);
        Page::create([
            'title' => 'Contact Us',
            'slug' => 'contact-us',
            'content' => '<p>Alamat: Jl. Contoh No. 123, Jakarta</p><p>Email: info@company.com</p>',
            'featured_image' => null,
            'status' => true,
        ]);
    }
}
