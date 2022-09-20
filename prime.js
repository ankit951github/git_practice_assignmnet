function checkPrime(num){
    for(let i=0; i<=num**0.5; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}; 

let val = checkPrime(12);
if(val===true){
    console.log('yes');
}
else{
    console.log('no');
}