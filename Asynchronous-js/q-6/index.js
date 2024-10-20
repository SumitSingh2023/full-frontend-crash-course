function calculate(num1, num2, operation) {
    let result = operation(num1, num2)
    console.log(result)
    return result
}

let add = (num1, num2) => num1 + num2
let mult = (num1, num2) => (num1 * num2)

calculate(6, 6, add)
calculate(8, 6, mult)