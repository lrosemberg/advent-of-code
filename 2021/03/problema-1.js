const fs = require('fs')
const { join } = require('path')

const file = fs.readFileSync(join(__dirname, 'sample.txt'), 'utf8')
// const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')

const numbers = file.split('\n')

function count_ones (numbers) {
  const len = numbers[0].length
  const count_ones = []

  for (let number of numbers) {
    for (let i = 0; i < len; i++) {
      const bit = number[i]
      if (bit === '1') {
        count_ones[i] = (count_ones[i] || 0) + 1
      }
    }
  }
  return count_ones
}

function get_gamma (count_one, max_count) {
  return count_one.map(count => {
    if (count > max_count / 2) return 1
    else return 0
  }).join('')
}

// Apenas inverter o gamma
function get_epsilon (gamma) {
  return [...gamma].map(bit => bit === '1' ? '0' : '1').join('')
}

const count_one = count_ones(numbers)
const gamma_bin = get_gamma(count_one, numbers.length)
const epsilon_bin = get_epsilon(gamma_bin)
const gamma = parseInt(gamma_bin, 2)
const epsilon = parseInt(epsilon_bin, 2)

console.log(gamma * epsilon)
