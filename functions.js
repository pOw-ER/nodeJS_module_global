let { info } = require('./data')

function firstElement(arr) {
  console.log(arr[0]);
}

function withoutLastElm(arr) {
  let a = arr.slice(0, arr.length - 1);
  console.log(a);
}
module.exports = { firstElement, withoutLastElm }

const firstElt = (arr) => {
  return arr.shift()
}
const removeLast = (arr) => {
  return arr.slice(0, arr.length - 1)
}
const leaveLast = (arr) => {
  return arr.pop()
}
const leaveFirst = (arr) => {
  arr.shift()
  return arr
}
const positionN = (arr, n) => {
  return n < 0 || n > arr.length ? arr.pop() : arr[n]
}
const removeSpecific = (arr, word) => {
  return arr.filter((elt) => {
    return elt !== word
  })
}
const uniq = (arr) => {
  const arr2 = [...new Set(arr)]
  return arr2
}
const sum = (arr) => {
  return arr.reduce((acc, item) => {
    return acc + item
  })
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const firstLetter = (word) => {
  let word1 = word[0].toUpperCase()
  return word.replace(word[0], word1)
}
const compareLastLetter = (word, x) => {
  return word[word.length - 1] === x ? true : false
}
const calculate = (a, b, c) => {
  if (c === "+") {
    return a + b
  }
  if (c === "-") {
    return a - b
  }
  if (c === "*") {
    return a * b
  }
  if (c === "/") {
    return a / b
  }
}
const populationCity = () => {
  const newCity = info.filter((elt) => {
    return elt.population >= 100000
  })
  return newCity
}
module.exports = {
  firstElt, removeLast, leaveLast, leaveFirst, positionN, removeSpecific, uniq, sum, getRandomArbitrary, firstLetter, compareLastLetter, calculate, populationCity
}
