const fs = require('fs')
const { join } = require('path')

// const file = fs.readFileSync(join(__dirname, 'sample.txt'), 'utf8')
const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')

const input = file.split('\n')

const position = {
    vertical: 0,
    horizontal: 0
}

const commands = {
    forward: (range) => { 
        position.vertical += range
    },
    up: (range) => { 
        position.horizontal -= range
    },
    down: (range) => { 
        position.horizontal += range
    },
}

for (const line of input) {
    const [command, range] = line.split(' ')
    commands[command](Number(range))
}

console.log(position.vertical * position.horizontal)
