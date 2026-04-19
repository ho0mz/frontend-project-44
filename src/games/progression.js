import { runGame } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const formatProgression = (progression, hiddenIndex) => {
  const result = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenIndex) {
      result.push('..');
    } else {
      result.push(progression[i]);
    }
  }
  return result.join(' ');
};

const generateRound = () => {
  const minLength = 5;
  const maxLength = 10;
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = generateProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  const question = formatProgression(progression, hiddenIndex);
  const correctAnswer = String(progression[hiddenIndex]);
  return [question, correctAnswer];
};

export const runProgressionGame = () => {
  runGame(gameDescription, generateRound);
};
