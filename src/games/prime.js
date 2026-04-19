import { runGame } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  const limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const runPrimeGame = () => {
  runGame(gameDescription, generateRound);
};

