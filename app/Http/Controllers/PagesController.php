<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use FizzBuzz\FizzBuzz;

class PagesController extends Controller
{
    public function index()
    {
        $results = FizzBuzz::get();

        return view('welcome', ['results' => $results]);
    }
}
