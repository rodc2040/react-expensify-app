// const person = {
//     name: 'Jerrard',
//     age: 35,
//     location: {
//         city: 'Atlanta',
//         temp: '79'
//     }
// };

// const {name = 'Anonymous', age = 'N/A' } = person
// console.log(`${name} is ${age}`)

// const{city, temp} = person.location
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`)

// }
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {title, author} = book
// const {name='Self Published'} = book.publisher;

// console.log(`I have read ${title} by ${author}.  It was published by ${name}`)

const address = ['1299 S Juniper Street', 'Atlanta', 'Georgia', '30030'];

const[street, city, state, zip] = address
console.log(`You are in ${street}`)