/*
const Hero = {
  name: "Nikhil",

  greetings() {
    return `Hello ${this.name}`;
  },

  greet: function () {
    const greeting = () => {
      // console.log(`Hello ${this.name}`);
    };
    greeting();
  },
};

const greeting = Hero.greet();
// console.log(greeting);

const Hero2 = Hero;
Hero2.name = "Nikhil Rajput";
const greeting2 = Hero2.greetings();
// console.log(greeting2);

const favourite = {
  player: "Messi",
};

// function greet() {
   // console.log(`My favourite player is ${this.player}`);
// }

// greet.call(favourite);

*/

function greet() {
  console.log(`Hello ${this.name}`);
  return "Subscribe";
}

const user = {
  name: "Nikhil Rajput",
};

// greet.apply(user, [21, "Sri Muktsar Sahib"]);

const result = greet.bind(user, 21, "Sri Muktsar Sahib");
console.log(result());

// const array = [1, 2, 3, [4, 5]];
// const arrayCopy = [...array];
// arrayCopy.push(6);
// arrayCopy[3][0] = 34;
// console.log(arrayCopy);
// console.log(array);

// const nestArray = [1, 2, [3, 4]];
// const arrayCopy2 = structuredClone(nestArray);
// arrayCopy2.push(7);
// arrayCopy2[2][0] = 33;
// console.log(arrayCopy2);
// console.log(nestArray);

function num(...numbers) {
  numbers.reduce((acc, red) => {
    console.log(acc + red);
    return acc + red;
  }, 0);
}
num(1, 2, 3, 4, 5);
