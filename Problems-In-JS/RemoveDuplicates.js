//!Write a function that removes duplicate items from an array.


function removeDuplicates(arr){
    let newArr = [];
    for(let i = 0; i < arr.length;  i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

let arr = [54,55,54,66,89,66,90,89];
console.log(removeDuplicates(arr))