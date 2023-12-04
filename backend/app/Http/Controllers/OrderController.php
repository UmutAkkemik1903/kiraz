<?php

namespace App\Http\Controllers;

use App\Models\CartModel;
use App\Models\OrderModel;
use Illuminate\Http\Request;
use Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = request()->user();
        $data = OrderModel::where(['created_by' => $user->id])->get([
            'id as id',
            'order_no as order_no',
            'total_price as total_price',
        ]);
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if($request){
            $orderId = OrderModel::insertGetId([
                'order_no'=>'1',
                'created_by'=>Auth::User()->id,
                'total_price'=>$request->input('result'),
                'created_at' => date('Y-m-d H:i:s'),
            ]);
            OrderModel::where(['id'=>$orderId])->update([
                'order_no'=>'SC' . str_pad($orderId, 9, "0", STR_PAD_LEFT),
            ]);
            $query = CartModel::where(['order_id' => null,'created_by'=>Auth::User()->id])->get();
            CartModel::where('order_id', null)
            ->where('created_by', Auth::User()->id)
            ->update(['order_id' => $orderId]);
           
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if (auth()->check()) {
            $data = CartModel::where(['cart.order_id'=>$id])->join('product',function($on){
                $on->on('product.id','=','cart.product_id');
            })->get([
                'cart.count as count',
                'product.name as name',
                'product.price as price'
            ]);
            return $data;
        } else {
            return response()->json(['error' => 'Oturum açmamış kullanıcı, ürün eklenemedi'], 401);
        }
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
