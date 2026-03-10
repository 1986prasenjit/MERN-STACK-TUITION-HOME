#DRY RUN FOR ROTATE ELEMENT BY ONE PLACE 

# Rotate Array Right by One (Dry Run in Bangla)

## Problem
একটি array এর সব element কে **ডানদিকে (right side) ১ position rotate** করতে হবে।

### Example

Input
```
[100, 500, 89, 72, 54, 66]
```

Output
```
[66, 100, 500, 89, 72, 54]
```

মানে শেষের element সামনে আসবে এবং বাকিগুলো এক ঘর ডানদিকে shift হবে।

---

# Code

```javascript
function RotateByOneElem(arr){

    // array এর শেষ element টা store করে রাখছি
    // কারণ shift করার সময় এটা overwrite হয়ে যাবে
    let lastElem = arr[arr.length - 1];

    // array এর শেষ index থেকে loop শুরু করছি
    for(let i = arr.length - 1; i > 0; i--){

        // আগের element কে বর্তমান index এ বসানো হচ্ছে
        arr[i] = arr[i - 1]
    }

    // আগে save করা last element টাকে প্রথম index এ বসানো হচ্ছে
    arr[0] = lastElem;

    return arr;
}

let arr = [100, 500, 89, 72, 54, 66];
console.log(RotateByOneElem(arr));
```

---

# Step 1 — Function Declaration

```javascript
function RotateByOneElem(arr)
```

এখানে একটি function তৈরি করা হয়েছে যার নাম **RotateByOneElem**।

এই function একটি parameter নেয়:

```
arr
```

মানে function একটি array input হিসেবে নেবে।

---

# Step 2 — Last Element Store করা

```javascript
let lastElem = arr[arr.length - 1];
```

ধরি array হলো

```
[100, 500, 89, 72, 54, 66]
```

Array length

```
6
```

Index

```
0 1 2 3 4 5
```

শেষ index

```
length - 1 = 5
```

তাই

```
arr[5] = 66
```

এখন

```
lastElem = 66
```

আমরা এটা save করছি কারণ loop চলার সময় এই value overwrite হয়ে যাবে।

---

# Step 3 — Loop Execution

```
for(let i = arr.length - 1; i > 0; i--)
```

Loop শুরু

```
i = 5
```

Loop চলবে

```
5 → 4 → 3 → 2 → 1
```

আমরা পেছন থেকে সামনে আসছি কারণ আমরা **right shift করছি**।

---

# Initial Array

```
[100, 500, 89, 72, 54, 66]
```

---

# Iteration 1

```
i = 5
```

```
arr[5] = arr[4]
```

```
arr[5] = 54
```

Array

```
[100, 500, 89, 72, 54, 54]
```

---

# Iteration 2

```
i = 4
```

```
arr[4] = arr[3]
```

```
arr[4] = 72
```

Array

```
[100, 500, 89, 72, 72, 54]
```

---

# Iteration 3

```
i = 3
```

```
arr[3] = arr[2]
```

```
arr[3] = 89
```

Array

```
[100, 500, 89, 89, 72, 54]
```

---

# Iteration 4

```
i = 2
```

```
arr[2] = arr[1]
```

```
arr[2] = 500
```

Array

```
[100, 500, 500, 89, 72, 54]
```

---

# Iteration 5

```
i = 1
```

```
arr[1] = arr[0]
```

```
arr[1] = 100
```

Array

```
[100, 100, 500, 89, 72, 54]
```

Loop stop হবে কারণ এখন

```
i = 0
```

Condition

```
i > 0
```

False হয়ে যাবে।

---

# Step 4 — Last Element সামনে বসানো

```
arr[0] = lastElem
```

```
arr[0] = 66
```

Final Array

```
[66, 100, 500, 89, 72, 54]
```

---

# Final Output

```
[66, 100, 500, 89, 72, 54]
```

---

# Real Life Analogy

ধরো ৬ জন মানুষ লাইনে দাঁড়িয়ে আছে

```
A B C D E F
```

Rule: শেষের মানুষ সামনে যাবে

```
F A B C D E
```

Array rotation ঠিক এভাবেই কাজ করে।

---

# Complexity

### Time Complexity

```
O(n)
```

কারণ loop পুরো array একবার traverse করছে।

### Space Complexity

```
O(1)
```

কারণ আমরা শুধু একটি variable ব্যবহার করেছি (`lastElem`)।