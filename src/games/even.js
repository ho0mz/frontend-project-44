import { runGame } from '../index.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const question = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export const runEvenGame = () => {
  runGame(gameDescription, generateRound)
}
