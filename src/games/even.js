import readlineSync from 'readline-sync'
import greetUser from '../cli.js'

// Предикат: возвращает true, если число чётное
const isEven = num => num % 2 === 0

const playEvenGame = () => {
  const name = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0

  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100)
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default playEvenGame

