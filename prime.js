function checkPrime(num){
    for(let i=2; i<=num; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}; 

let val = checkPrime(13);
if(val){
    console.log("prime")
}
else{
    console.log("not prime");
}