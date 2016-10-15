// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sum_of_primes: function(number) {
    var array=[];
    var sum=0;
    for(var i = 2; i<number;i++){
      var isPrime = true;
      for(var j =2;j<i;j++){
        if(i%j==0){
          isPrime=false;
        }}
        if(isPrime ==true){
          array.push(i);
        }
      
    }
    for(var x=0;x<array.length;x++){

      sum+= array[x];
      
    }


  return sum
}