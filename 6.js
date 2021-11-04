let arr=[1,2,3,4,4,5,6,7]
let prover = 0;
let a=0;
for(let i=0;i<arr.length;i++){
    prover=arr[i];
    for(let j=0;j!=i && j<arr.length;j++)
    if(prover==arr[j]){
        a=1;
        break;
    }
    else{
        break;
    }
}
if(a==1){
    console.log(true);
}
else{
    console.log(false);
}