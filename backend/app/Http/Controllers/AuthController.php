<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public $nowDate;

    public function __construct()
    {
        $this->nowDate = date('Y-m-d H:i:s');
    }
    public function register(Request $request){
     if($request){
         if (User::where(['email'=>$request->input('register_email')])->count() > 0){
             return response()->json([
                 'error'=>'Bu email adresi daha önce kullanıldı!',
             ]);
         } elseif (User::where(['name'=>$request->input('register_name')])->count() > 0){
             return response()->json([
                 'error'=>'Bu kullanıcı adı daha önce kullanıldı!'
             ]);
         } else{
             User::insert([
                 'email'=>$request->input('register_email'),
                 'name'=>$request->input('register_name'),
                 'password'=>bcrypt($request->input('register_password')),
                 'created_at' => $this->nowDate
             ]);
         }

     }

    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = $request->user();
            $token = $user->createToken('Access Token')->plainTextToken;
                return response()->json([
                    'access_token' => $token,
                    'token_type' => 'bearer',
                    'redirect' => '/'
                ]);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }

}