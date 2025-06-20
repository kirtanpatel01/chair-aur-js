const name = undefined
const updatedName = String(name)

// console.log(typeof updatedName)
// console.log(updatedName)

// 12 -> string, 12
// true -> string, true
// null -> string, null
// undefined -> string, undefined

const num = null
const updatedNum = Number(num)
// console.log(typeof updatedNum)
// console.log(updatedNum)

// "" -> number, 0
// "kittu" -> number, NaN
// undefined -> number, NaN
// null -> number, 0

const flag = "jbjyhv"
const updatedFlag = Boolean(flag)
console.log(typeof updatedFlag)
console.log(updatedFlag)

// 1 -> boolean, true
// 0 -> boolean, false
// -123 -> boolean, true
// NaN -> boolean, false
// undefined -> boolean, false
// null -> boolean, false
// "" -> boolean, false
// "ihui" -> boolean, true
