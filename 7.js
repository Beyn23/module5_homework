let arr = [1,2,3,4,5,6,0,10]
let chet = 0;
let nechet = 0;
let noll = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0 || arr[i]%2==1 || arr[i]==0){
        if(arr[i]%2==0){
            chet++;
        }
        if(arr[i]%2==1){
            nechet++;
        }
        if(arr[i]==0){
            noll++;
        }
    }
}
console.log("В масиве четных чисел = ",chet," нечетных = ",nechet," и нулей = ",noll);