require('./bootstrap');

(function(){

    console.log('aaaand in JavaScript...');
    console.log(`%c

        FFFFFFFFFFFFFFFFFFFFFF  iiii                                    BBBBBBBBBBBBBBBBB                                                       
        F::::::::::::::::::::F i::::i                                   B::::::::::::::::B                                                      
        F::::::::::::::::::::F  iiii                                    B::::::BBBBBB:::::B                                                     
        FF::::::FFFFFFFFF::::F                                          BB:::::B     B:::::B                                                    
          F:::::F       FFFFFFiiiiiii zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz  B::::B     B:::::Buuuuuu    uuuuuu  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          F:::::F             i:::::i z:::::::::::::::zz:::::::::::::::z  B::::B     B:::::Bu::::u    u::::u  z:::::::::::::::zz:::::::::::::::z
          F::::::FFFFFFFFFF    i::::i z::::::::::::::z z::::::::::::::z   B::::BBBBBB:::::B u::::u    u::::u  z::::::::::::::z z::::::::::::::z 
          F:::::::::::::::F    i::::i zzzzzzzz::::::z  zzzzzzzz::::::z    B:::::::::::::BB  u::::u    u::::u  zzzzzzzz::::::z  zzzzzzzz::::::z  
          F:::::::::::::::F    i::::i       z::::::z         z::::::z     B::::BBBBBB:::::B u::::u    u::::u        z::::::z         z::::::z   
          F::::::FFFFFFFFFF    i::::i      z::::::z         z::::::z      B::::B     B:::::Bu::::u    u::::u       z::::::z         z::::::z    
          F:::::F              i::::i     z::::::z         z::::::z       B::::B     B:::::Bu::::u    u::::u      z::::::z         z::::::z     
          F:::::F              i::::i    z::::::z         z::::::z        B::::B     B:::::Bu:::::uuuu:::::u     z::::::z         z::::::z      
        FF:::::::FF           i::::::i  z::::::zzzzzzzz  z::::::zzzzzzzzBB:::::BBBBBB::::::Bu:::::::::::::::uu  z::::::zzzzzzzz  z::::::zzzzzzzz
        F::::::::FF           i::::::i z::::::::::::::z z::::::::::::::zB:::::::::::::::::B  u:::::::::::::::u z::::::::::::::z z::::::::::::::z
        F::::::::FF           i::::::iz:::::::::::::::zz:::::::::::::::zB::::::::::::::::B    uu::::::::uu:::uz:::::::::::::::zz:::::::::::::::z
        FFFFFFFFFFF           iiiiiiiizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzBBBBBBBBBBBBBBBBB       uuuuuuuu  uuuuzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                                                                                                                                                
    `, "font-family:monospace")

    function isDivisibleBy3($number){
        return $number % 3 === 0;
    }
    
    function isDivisibleBy5($number){
        return $number % 5 === 0;
    }

  
    for(let i = 1; i < 101; i++){
        if(isDivisibleBy3(i) && isDivisibleBy5(i)){
            console.log('%cFizzBuzz ', 'color: #0033bb');
        } else if(isDivisibleBy3(i)){
            console.log('%cFizz ', 'color: #00aabb');
        }else if(isDivisibleBy5(i)){
            console.log('%cBuzz ', 'color: #aa00bb');
        } else{
            console.log('%c'+i, 'color: #333');
        }
    }
    

})();
