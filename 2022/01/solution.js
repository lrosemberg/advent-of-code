const fs = require('fs')
const { join } = require('path')

// const file = fs.readFileSync(join(__dirname, 'sample.txt'), 'utf8')
const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')

// Setup
const backpacks = file.split('\n\n').map(items => {
  const backpack = {
    foods: items.split('\n'),
    total: 0
  }

  let sum = 0
  for (let food of backpack.foods) {
    food = Number(food)
    sum += food
  }

  backpack.total = sum

  return backpack
})

// Part 1
const bigger = backpacks.reduce((prev, curr) => Math.max(prev, curr.total), 0)
console.log(`Part 01: ${ bigger }`)

// Part 2
const n = 3
const sorted = backpacks.sort((a, b) => b.total - a.total)
const topn = sorted.slice(0, n)
const sum = topn.reduce((prev, curr) => prev += curr.total, 0)
console.log(`Part 02: ${ sum }`)
