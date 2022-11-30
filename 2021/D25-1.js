
const fs = require('fs')
const { join } = require('path')

const file = fs.readFileSync(join(__dirname, 'input-D25.txt'), 'utf8')
// const file = fs.readFileSync(join(__dirname, 'sample-D25.txt'), 'utf8')

const linhas = file.split('\n')
const matriz = linhas.map(linha => linha.split(''))
const numLinhas = matriz.length
const numCol = matriz[0].length

function moveDireitaSePuder (antiga, nova, linha, coluna) {
  if (antiga[linha][coluna] !== '>') {
    return false
  }

  let destino = coluna + 1
  if (destino >= numCol) destino = 0

  if (antiga[linha][destino] === '.') {
    nova[linha][destino] = '>'
    nova[linha][coluna] = '.'
    return true
  }
  return false
}

function moveBaixoSePuder (antiga, nova, linha, coluna) {
  if (antiga[linha][coluna] !== 'v') {
    return false
  }

  let destino = linha + 1
  if (destino >= numLinhas) destino = 0

  if (antiga[destino][coluna] === '.') {
    nova[destino][coluna] = 'v'
    nova[linha][coluna] = '.'
    return true
  }
  return false
}

function andaDireita (antiga, nova) {
  let mudou = false
  for (let l = 0; l < numLinhas; l++) {
    for (let c = 0; c < numCol; c++) {
      if (moveDireitaSePuder(antiga, nova, l, c)) {
        mudou = true
      }
    }
  }
  return mudou
}

function andaBaixo (antiga, nova) {
  let mudou = false
  for (let c = 0; c < numCol; c++) {
    for (let l = 0; l < numLinhas; l++) {
      if (moveBaixoSePuder(antiga, nova, l, c)) {
        mudou = true
      }
    }
  }
  return mudou
}

function copia (grid) {
  let novo = []
  for (let l = 0; l < numLinhas; l++) {
    novo[l] = []
    for (let c = 0; c < numCol; c++) {
      novo[l][c] = grid[l][c]
    }
  }
  return novo
}

let mudou = false
let quantidade = 1
let antiga = matriz

do {
  mudou = false
  nova = copia(antiga)
  mudou = andaDireita(antiga, nova) || mudou
  antiga = copia(nova)
  mudou = andaBaixo(antiga, nova) || mudou
  antiga = copia(nova)
  if (mudou) quantidade++
} while (mudou === true)

console.log(quantidade)
