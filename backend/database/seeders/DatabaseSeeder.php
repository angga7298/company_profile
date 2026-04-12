<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Panggil semua seeder
        $this->call([
            ServicesTableSeeder::class,
            PortfoliosTableSeeder::class,
            PagesTableSeeder::class,
        ]);

        // Buat user admin untuk login
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password123'),
        ]);
    }
}
