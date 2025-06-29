import runGame from '../index.js'
const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    const value = start + i * step
    progression.push(i === hiddenIndex ? '..' : String(value))
  }
  return progression
}
const description = 'What number is missing in the progression?'
const generateRound = () => {
  const length = 10
  const step = Math.floor(Math.random() * 5) + 1
  const start = Math.floor(Math.random() * 20)
  const hiddenIndex = Math.floor(Math.random() * length)
  const progression = generateProgression(start, step, length, hiddenIndex)
  const question = progression.join(' ')
  const correctAnswer = String(start + hiddenIndex * step)
  return [question, correctAnswer]
}
const playProgressionGame = () => runGame(description, generateRound)
export default playProgressionGame
