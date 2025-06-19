const ajib = "Dastan Hai Yeh"

// console.log(`Ajib ${ajib}`)

const split = ajib.split(" ") // creates array of elements splitted by given string in method
const substr = ajib.substring(-1) // always starts from 0 and can give string up to end, t doesn't allow to access from end
const slice = ajib.slice(-1) // it gives you substring from the end if you provide negative value as starting number
// above both will exclude the last element

const asciiValue = ajib.codePointAt(3) //takes position and returns the ascii value of character at that position
const lastOccurance = ajib.lastIndexOf("a", 7) // returns the last occurance of the given string 
// also can take position up to which it should search

const updatedStr = ajib.padStart(19, "Ajib ") 
// add/concat string, take number as max length after adding new string and and append given string as second parameter 
// this is not actually usecase of padStart/pasEnd
const rows = [
    ['Name', 'Score'],
    ['Alice', '98'],
    ['Bob', '87'],
];

// for (const [name, score] of rows) {
//     console.log(name.padEnd(10) + score);
// }
// In above example it will set fixed length to the name variable so it'll look like a table format 
// Now there's the actual usecase of them
// console.log("123".padEnd(6, '*')) // 123***
// In above example it will concat * but it won't complete the given maxLength(6) so it will add one more time 
// like that it will add upto the total length of string doesn't become same as maxLength

const repeatedStr = ajib.repeat(2) 
// return new string which have same string as given, it'll be repeated no. of times as given