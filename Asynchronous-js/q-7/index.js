
function filterArray(numbers, checkOddEven) {
    let filteredArr = []
    numbers.map((num) => {
        if(checkOddEven(num)){
            filteredArr.push(num)
        }
    })
    return filteredArr
}

function checkOddEven(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

let numbers = [1, 2, 3, 4, 7, 13, 19, 21, 5]
let filteredArr = filterArray(numbers, checkOddEven)

console.log("original:",numbers)
console.log("filtered arr :", filteredArr)


