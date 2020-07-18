<?php

namespace FizzBuzz;

class FizzBuzz
{
    public static function get()
    {
        $fb = [];

        for($i = 1; $i < 101; $i++){

            if(self::isDivisibleBy3($i) && self::isDivisibleBy5($i)) {
                $fb[$i] = 'FizzBuzz';
            }else if(self::isDivisibleBy3($i)){
                $fb[$i] = 'Fizz';
            }else if(self::isDivisibleBy5($i)){
                $fb[$i] = 'Buzz';
            }else{
                $fb[$i] = $i;
            }
        }

        return $fb;
    }

    public static function isDivisibleBy3($number)
    {

        return $number % 3 === 0;

    }

    public static function isDivisibleBy5($number)
    {
        return $number % 5 === 0;
    }
}
