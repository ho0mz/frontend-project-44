import { runGame } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

// Функция для нахождения НОД (алгоритм Евклида)
const findGcd = (a, b) => {
  let first = Math.abs(a);
  let second = Math.abs(b);
  
  while (second !== 0) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  
  return first;
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 50) + 1; // число от 1 до 50
  const num2 = Math.floor(Math.random() * 50) + 1;
  
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  
  return [question, correctAnswer];
};

export const runGcdGame = () => {
  runGame(gameDescription, generateRound);
};