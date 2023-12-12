var fib=[];
function fibonacciGenerator (n) {
    
    
    if(n==1){
        fib=[0];
    }else if(n==2){
        fib=[0,1];
    }else{
        fib=[0,1];
           for(var i=2;i<n;i++){
        fib[i]=fib[i-1] + fib[i-2];
    }
    }
        
    return fib;
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
}
fibonacciGenerator(1);

