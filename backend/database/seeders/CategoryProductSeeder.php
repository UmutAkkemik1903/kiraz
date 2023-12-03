<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class CategoryProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories_product')->insert([
            [
                'product_id' => '1',
                'category_id' => '1'
            ],
            [
                'product_id' => '2',
                'category_id' => '1'
            ],
            [
                'product_id' => '3',
                'category_id' => '1'
            ],
            [
                'product_id' => '4',
                'category_id' => '2'
            ],
            [
                'product_id' => '5',
                'category_id' => '2'
            ],
            [
                'product_id' => '6',
                'category_id' => '2'
            ],
            [
                'product_id' => '7',
                'category_id' => '3'
            ],
            [
                'product_id' => '8',
                'category_id' => '3'
            ],
            [
                'product_id' => '9',
                'category_id' => '3'
            ],
        ]);
    }
}
