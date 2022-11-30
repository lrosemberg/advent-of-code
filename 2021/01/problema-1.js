const fs = require('fs')
const { join } = require('path')

// const file = fs.readFileSync(join(__dirname, 'sample.txt'), 'utf8')
const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')

const inputs = file.split('\n').map(n => Number(n))

let bigger = 0
let last = inputs[0]

for (let depth of inputs) {
    if (depth > last) bigger++
    last = depth
}

console.log(bigger)