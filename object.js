const obj = {
  name: "Nikhil",
  age: 1,
  city: "Delhi",
};

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);

obj.job = "Developer";
// console.log(obj);

// delete obj.age;

const obj2 = obj;
obj2.name = "Nikhil Rajput";
// console.log(obj);

// const key = "email";
// obj[key] = "nikhil@example.com";
// console.log(obj);

for (let k in obj) {
  // console.log(`${k}=`, obj[k]);
}

for (let k of Object.keys(obj)) {
  // console.log(`${k}=`, obj[k]);
}

const obj3 = {
  name: "Audi",
  year: 2023,
  office: "Germany",
};

const key = "model";
obj3[key] = "A8L";
delete obj3.office;

console.log(obj3);

// localStorage.setItem("car", JSON.stringify(obj3));
// const carData = JSON.parse(localStorage.getItem("car"));
// console.log(carData);

// obj3.freeze(year);
// obj3.year = 2024;
// console.log(obj3);

Object.seal(obj3);
obj3.year = 2024;
delete obj3.name;
console.log(obj3);
