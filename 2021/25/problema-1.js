
const fs = require('fs')
const { join } = require('path')

// const file = fs.readFileSync(join(__dirname, 'sample.txt'), 'utf8')
const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')

const input = file.split('\n').map(linha => linha.split(''))
const linhas = input.length
const colunas = input[0].length

function moverDireita (antiga, nova, linha, coluna) {
  if (antiga[linha][coluna] !== '>') {
    return false
  }

  let destino = coluna + 1
  if (destino >= colunas) destino = 0

  if (antiga[linha][destino] === '.') {
    nova[linha][destino] = '>'
    nova[linha][coluna] = '.'
    return true
  }
  return false
}

function moverBaixo (antiga, nova, linha, coluna) {
  if (antiga[linha][coluna] !== 'v') {
    return false
  }

  let destino = linha + 1
  if (destino >= linhas) destino = 0

  if (antiga[destino][coluna] === '.') {
    nova[destino][coluna] = 'v'
    nova[linha][coluna] = '.'
    return true
  }
  return false
}

function andaDireita (antiga, nova) {
  let mudou = false
  for (let l = 0; l < linhas; l++) {
    for (let c = 0; c < colunas; c++) {
      mudou = moverDireita(antiga, nova, l, c) || mudou
    }
  }
  return mudou
}

function andaBaixo (antiga, nova) {
  let mudou = false
  for (let c = 0; c < colunas; c++) {
    for (let l = 0; l < linhas; l++) {
      mudou = moverBaixo(antiga, nova, l, c) || mudou
    }
  }
  return mudou
}

function copia (grid) {
  let novo = []
  for (let l = 0; l < linhas; l++) {
    novo[l] = []
    for (let c = 0; c < colunas; c++) {
      novo[l][c] = grid[l][c]
    }
  }
  return novo
}

let mudou = false
let antiga = input
let quantidade = 1

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
