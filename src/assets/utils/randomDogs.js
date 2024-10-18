import dogs from "./dogs";

export default function getRandomDogs(number = 8) {
  let currentDogs = [];

  while (currentDogs.length < number) {
    const randomIndex = Math.floor(Math.random() * 17);
    const randomDog = dogs[randomIndex];

    if (!currentDogs.some((dog) => dog.sku === randomDog.sku)) {
      currentDogs.push(randomDog);
    }
  }

  return currentDogs;
}
