<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product')->insert([
            [
                'name' => 'Ürün 1',
                'price' => 500,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 2',
                'price' => 40,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 3',
                'price' => 30,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 4',
                'price' => 250,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 5',
                'price' => 100,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 6',
                'price' => 80,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 7',
                'price' => 70,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 8',
                'price' => 90,
                'description' => "Laravel, MVC yapısında",
            ],
            [
                'name' => 'Ürün 9',
                'price' => 10,
                'description' => "Laravel, MVC yapısında",
            ],   
        ]);
    }
}
