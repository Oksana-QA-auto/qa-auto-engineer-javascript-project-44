import readlineSync from 'readline-sync'
import greetUser from './cli.js'
const roundsCount = 3
const runGame = (rules, getRoundData) => {
  const name = greetUser()
  console.log(rules)
  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = getRoundData()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}
export default runGame
