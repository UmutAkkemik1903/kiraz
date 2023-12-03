<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductStockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('stock')->insert([
            [
                'stock_no' => '0001',
                'product_id' => '1',
                'count' => '100'
            ],
            [
                'stock_no' => '0002',
                'product_id' => '2',
                'count' => '100'
            ],
            [
                'stock_no' => '0003',
                'product_id' => '3',
                'count' => '100'
            ],
            [
                'stock_no' => '0004',
                'product_id' => '4',
                'count' => '100'
            ],
            [
                'stock_no' => '0005',
                'product_id' => '5',
                'count' => '100'
            ],
            [
                'stock_no' => '0006',
                'product_id' => '6',
                'count' => '100'
            ],
            [
                'stock_no' => '0007',
                'product_id' => '7',
                'count' => '100'
            ],
            [
                'stock_no' => '0008',
                'product_id' => '8',
                'count' => '100'
            ],
            [
                'stock_no' => '0009',
                'product_id' => '9',
                'count' => '100'
            ],
        ]);
    }
}
