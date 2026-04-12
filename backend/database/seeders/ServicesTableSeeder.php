<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServicesTableSeeder extends Seeder
{
    public function run()
    {
        Service::create([
            'title' => 'Web Development',
            'description' => 'Kami membuat website modern dan responsif.',
            'icon' => 'fa-globe',
        ]);
        Service::create([
            'title' => 'Mobile App',
            'description' => 'Aplikasi mobile Android dan iOS.',
            'icon' => 'fa-mobile-alt',
        ]);
        Service::create([
            'title' => 'UI/UX Design',
            'description' => 'Desain antarmuka yang menarik dan mudah digunakan.',
            'icon' => 'fa-paintbrush',
        ]);
    }
}
