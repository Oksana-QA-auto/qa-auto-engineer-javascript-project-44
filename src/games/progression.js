import readlineSync from 'readline-sync'
import greetUser from '../cli.js' // обязательно без {}

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = []

  for (let i = 0; i < length; i += 1) {
    const value = start + i * step
    progression.push(i === hiddenIndex ? '..' : String(value))
  }

  return progression
}

const playProgressionGame = () => {
  const name = greetUser()
  console.log('What number is missing in the progression?')

  let correctAnswers = 0

  while (correctAnswers < 3) {
    const length = 10
    const step = Math.floor(Math.random() * 5) + 1
    const start = Math.floor(Math.random() * 20)
    const hiddenIndex = Math.floor(Math.random() * length)

    const progression = generateProgression(start, step, length, hiddenIndex)
    const correctAnswer = String(start + hiddenIndex * step)

    console.log(`Question: ${progression.join(' ')}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

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

export default playProgressionGame

