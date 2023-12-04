<?php

namespace App\Http\Controllers;

use App\Models\CartModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (auth()->check()) {
        $userId = auth()->user()->id;
        $data = CartModel::where(['cart.created_by' => $userId,'cart.order_id'=>null])->join('product',function($on1){
            $on1->on('cart.product_id','=','product.id');
        })->join('stock',function($on2){
            $on2->on('stock.product_id','=','product.id');
        })->get([
            'cart.id as id',
            'product.name as name',
            'product.price as price',
            'cart.count as count'
        ]);
        return $data;
    } else {
        return response()->json(['error' => 'Oturum açmamış kullanıcı, ürün eklenemedi'], 401);
    }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
 if (auth()->check()) {
        $productId = $request->input('id');
        $count = $request->input('count');
        $userId = auth()->user()->id;

        CartModel::insert([
            'product_id' => $productId,
            'count' => $count,
            'created_by' => $userId
        ]);

        return response()->json(['success' => 'Ürün sepete eklendi']);
    } else {
        return response()->json(['error' => 'Oturum açmamış kullanıcı, ürün eklenemedi'], 401);
    }
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
    public function destroy(Request $request,string $id)
    {
        if (auth()->check()) {
            $cart = CartModel::find($id);

            $cart->delete();
    
            return response()->json(['message' => 'Ürün başarıyla silindi']);
        } else {
            return response()->json(['error' => 'Oturum açmamış kullanıcı, ürün eklenemedi'], 401);
        }
        }
       
}
