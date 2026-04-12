<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Portfolio;

class PortfoliosTableSeeder extends Seeder
{
    public function run()
    {
        Portfolio::create([
            'title' => 'Company Profile ABC',
            'description' => 'Website company profile untuk PT ABC.',
            'full_description' => 'Proyek ini mengerjakan website company profile dengan fitur dinamis...',
            'project_date' => '2025-01-15',
            'image' => 'portfolios/sample1.jpg', // nanti upload gambar
        ]);
        Portfolio::create([
            'title' => 'E-commerce XYZ',
            'description' => 'Platform belanja online dengan payment gateway.',
            'full_description' => 'Membangun e-commerce dari nol dengan Laravel dan Vue.js.',
            'project_date' => '2025-02-20',
            'image' => 'portfolios/sample2.jpg',
        ]);
    }
}
