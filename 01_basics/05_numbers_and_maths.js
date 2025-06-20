const score = 100
// console.log(score)

const bal = new Number(100000)
// console.log(bal)

const balUS = bal.toLocaleString() // return string value of given number in formated version, simply add comas. us based by default
const balIN = bal.toLocaleString('en-IN') // return string value of given number with comas in given country format 

const per = 131.9234
const perFixed = per.toFixed(2)
// return same number with upated number after decimal, keep numbers after decimal upto given index. it also round-off the decimals
const perPrecise = per.toPrecision(2)
// round off value upto given index....be careful while using this!!!

// +++++++++++++++++++++ MATHS +++++++++++++++++++++++
const random = Math.random()

const min = 6
const max = 9
const dice = Math.floor(Math.random() * (max - min + 1)) + min
// max - min => it defines the range 
// range + 1 => it's used to avoid 0 values 
// )) + min => it's used to include the max value in randome, 
// if you don't add min then it will never generate max value as random 
// console.log(dice)

const otp = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
console.log(otp)