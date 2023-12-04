<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;


    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
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
                    'redirect' => '/'
                ]);
            }
         else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
       }

       public function logOut()
       {
           Auth::logout();
       }
}
