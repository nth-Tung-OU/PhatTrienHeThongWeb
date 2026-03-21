// REST param
// function sum(...numbers){
//     return numbers.reduce((total, num) => total + num, 0)
// }

// // console.log(sum(1,2,3,4,5))
// console.log(sum(1,2,3,4,5,6))

// function greet(greeting, ...names){
//     return `${greeting} ${names.join(" - ")}`
// }

// console.log(greet("Hello", "Alice", "Bob", "Charlie"))

// // Spreatd operator (Mảng)

// const a = [1, 2]
// const b = [3, 4]

// const merge  = [...a, ...b]
// const copy = [...a]
// console.log(merge, copy)

// // Truyền đối số: mảng -> từng tham số cho hàm
// console.log(Math.max(...[1, 2, 3, 4, 5]))

// Spread object
const defautls = { theme: 'light', lang: 'vi', page: 1}
const userPrefs = { theme: 'dark', notification: true}

console.log(defautls, userPrefs)

const settings = {...defautls, ...userPrefs}

console.log(settings)

// Copy objec nông + ghi đè vài fields
const u1 = { id: 1, name: "An" }
const u2 = { ...u1, name: "Binh" }
console.log(u1, u2)