const arr = [1, 2, 3, 4, 5];

// console.log(arr[0]);
arr[5] = 6;
// console.log(arr);

arr.push(7);
// console.log(arr);

arr.pop();
// console.log(arr);

arr.unshift(0);
// console.log(arr);
arr.shift();
// console.log(arr);

arr.splice(2, 0, 2.5);
// console.log(arr);

arr.splice(2, 1);
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

for (let num of arr) {
  // console.log(num);
}

arr.forEach((num, key) => {
  // console.log(key, num);
});

// arr.map((num) => console.log(num * 2));

arr.filter((num) => {
  if (num % 2 === 0) {
    // console.log(num);
  }
});

arr.reduce((acc, num) => {
  // console.log(acc + num);
  return acc + num;
}, 0);

// arr.find((num) => console.log(num > 3));

// arr.findIndex((num) => console.log(num > 3));

// console.log(arr.toString());


