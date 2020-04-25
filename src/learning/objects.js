const person = { name: "John" }
const updated = {...person, name: 'Bob', age: 30} //using spread operator. This does a shallow copy. So nested object the original will change
const updated2 = { 
    ...person,
    address: {
        ...person.address,
        city: 'New York'
    },
    name: 'Sam',
    age: 32
}

console.log(updated)
console.log(updated2)