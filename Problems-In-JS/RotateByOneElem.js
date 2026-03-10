//!Rotate the elements of an array to the right by one position using a loop. 


function RotateByOneElem(arr){
    let lastElem = arr[arr.length - 1];
    for(let i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i - 1]
    }
    arr[0] = lastElem;

    return arr;
}

let arr = [100, 500, 89, 72, 54, 66]; //--> [66, 100, 500, 89, 72, 54]
console.log(RotateByOneElem(arr))


