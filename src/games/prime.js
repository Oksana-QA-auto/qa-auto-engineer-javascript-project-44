import runGame from '../index.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const getRoundData = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [number.toString(), correctAnswer]
}

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runGame(rules, getRoundData)
}

export default runPrimeGame
