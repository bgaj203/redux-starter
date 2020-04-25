import { compose, pipe } from "lodash/fp"

let input = "   JavaScript  "

const trim = str => str.trim() //takes a string then trim the emptry space around the string
const wrapInDiv = str => `<div>${str}</div>` //takes a string and wrap in div
const wrapInSpan = str => `<span>${str}</span>` //takes a string and wrap in span
const wrap = type => str => `<${type}>${str}</${type}>` //curry function
const toLowerCase = str => str.toLowerCase()

//const transform = compose(wrapInDiv, toLowerCase, trim) //passing a reference to our functions 
const transform = pipe(trim, toLowerCase, wrap('span')) //this way we can pass the function in the order we want them to be applied

const result = transform(input)
console.log(result)