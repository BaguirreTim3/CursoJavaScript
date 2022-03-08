let n = 25
let color: string = "blue"
color = "red"

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentences: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month`
let list: number[] = [1, 2, 3]

let x: [string, number]
x = ["sara", 24]
let [cadena, numero] = x


enum Color {
    Red ,
    Green,
    Blue,
}
let dato: Color = Color.Green
let colorName: string = Color[2]

console.log(dato)
console.log(colorName)
console.log(Color)


//console.log(typeof(numero))
console.log(cadena)
console.log(numero)
console.log(x)
console.log(fullName)
console.log(sentences)
console.log(color)
console.log(n)
console.log(list)
