function IsArrEquall(){
    let i;
    let arr = [1,2,3,9,0];
    let first = arr[0];
    let element;
    for(i = 0;i<arr.length;i++){
        element = arr[i];
        if(first == element){
            console.log(True);
        }
        else console.log(false);
    }
}