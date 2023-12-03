<?php

namespace App\Http\Controllers;

use App\Models\ProductCategoryModel;
use App\Models\ProductModel;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sort_direction = request('sort', 'desc');
        if (!in_array($sort_direction, ['asc', 'desc'])) {
            $sort_direction = 'desc';
        }
        $sort_field = request('sort_field', 'price');
        if (!in_array($sort_field, ['categories_product.id', 'categories_product.price'])) {
            $sort_field = 'price';
        }
        $selectedCategoryClass = request('category_id');
        $data = ProductCategoryModel::orderBy($sort_field, $sort_direction)->where(['categories_product.deleted_at'=>null])
        ->when($selectedCategoryClass,function($query) use ($selectedCategoryClass){
            $query->where('categories_product.category_id',$selectedCategoryClass);
        })
        ->join('product',function($on1){
            $on1->on("categories_product.product_id","=","product.id");
        })->join('categories',function($on2){
            $on2->on("categories_product.category_id","=","categories.id");
        })->get([
            'categories_product.id as id',
            'categories_product.category_id as category_id',
            'product.name as product_name',
            'product.price as price',
            'product.description as description',
            'categories.name as categories_name',
        ]);
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
