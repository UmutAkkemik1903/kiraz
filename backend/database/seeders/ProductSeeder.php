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
            ],
            [
                'name' => 'Ürün 2',
            ],
            [
                'name' => 'Ürün 3',
            ],
            [
                'name' => 'Ürün 4',
            ],
            [
                'name' => 'Ürün 5',
            ],
            [
                'name' => 'Ürün 6',
            ],
            [
                'name' => 'Ürün 7',
            ],
            [
                'name' => 'Ürün 8',
            ],
            [
                'name' => 'Ürün 9',
            ],   
        ]);
    }
}
