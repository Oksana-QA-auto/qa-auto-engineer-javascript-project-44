import runGame from '../index.js'
const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}
const description = 'Find the greatest common divisor of given numbers.'
const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1
  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))
  return [question, correctAnswer]
}
const playGcdGame = () => runGame(description, generateRound)
export default playGcdGame
