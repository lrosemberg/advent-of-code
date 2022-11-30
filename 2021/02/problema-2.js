const fs = require('fs')
const { join } = require('path')

// const file = fs.readFileSync(join(__dirname, 'sample.txt'), 'utf8')
const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')

const input = file.split('\n')

const position = {
    vertical: 0,
    horizontal: 0,
    aim: 0
}

const commands = {
    forward: (range) => { 
        position.vertical += range
        position.horizontal += position.aim * range
    },
    up: (range) => { 
        position.aim -= range
    },
    down: (range) => { 
        position.aim += range
    },
}

for (const line of input) {
    const [command, range] = line.split(' ')
    commands[command](Number(range))
}

console.log(position.vertical * position.horizontal)
