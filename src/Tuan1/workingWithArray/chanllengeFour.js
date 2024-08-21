const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Calculate recommended food portion and add it to each dog object
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2. Find Sarah's dog and log whether it's eating too much or too little
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
const isEatingTooMuch = sarahsDog.curFood > sarahsDog.recommendedFood;
const isEatingTooLittle = sarahsDog.curFood < sarahsDog.recommendedFood;

console.log(
  `Sarah's dog is eating ${
    isEatingTooMuch
      ? "too much"
      : isEatingTooLittle
      ? "too little"
      : "an okay amount"
  }.`
);

// 3. Create arrays for owners of dogs eating too much and too little
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

// 4. Log formatted strings for owners
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5. Check if any dog is eating exactly the recommended amount
const isEatingExactly = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(isEatingExactly);

// 6. Check if any dog is eating an okay amount
const isEatingOkay = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(isEatingOkay);

// 7. Create an array of dogs eating an okay amount
const dogsEatingOkay = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(dogsEatingOkay);

// 8. Create a shallow copy and sort by recommended food portion
const dogsSorted = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);

console.log(dogsSorted);
