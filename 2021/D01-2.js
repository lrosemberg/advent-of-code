const fs = require('fs')
const { join } = require('path')

// const file = fs.readFileSync(join(__dirname, 'sample-D01.txt'), 'utf8')
const file = fs.readFileSync(join(__dirname, 'input-D01.txt'), 'utf8')

const inputs = file.split('\n').map(n => Number(n))

let sums = {}
for (let i = 0; i <= inputs.length; i++) {
  if (i < inputs.length - 2) sums[i] = inputs[i]
  if (i >= 1) sums[i-1] += inputs[i]
  if (i >= 2) sums[i-2] += inputs[i]
}

delete sums[`${inputs.length-1}`]
delete sums[`${inputs.length-2}`]

let bigger = 0
let last = sums[0]

for (let key in sums) {
  depthSum = sums[key]
  if (depthSum > last) bigger++
  last = depthSum
}

console.log(bigger)