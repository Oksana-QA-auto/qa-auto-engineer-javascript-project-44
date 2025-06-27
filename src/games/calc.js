import runGame from '../index.js'
import getRandom from '../utils/random.js'

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const getRoundData = () => {
  const a = getRandom(1, 50)
  const b = getRandom(1, 50)
  const operator = operators[getRandom(0, operators.length - 1)]
  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calculate(a, b, operator))
  return [question, correctAnswer]
}

const rules = 'What is the result of the expression?'

export default () => runGame(rules, getRoundData)
