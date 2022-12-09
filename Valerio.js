const range = (start, end, newStep) => {
    const array = []
    let step = 1
    if (newStep) step = newStep
    if (start <= end) {
        while(start <= end) {
            array.push(start)
            start += step
        }
        return array
    }
    if (step > 0) step = step * (-1)
    while(start >= end) {
        array.push(start)
        start += step
    }
    return array
}
console.log(range(1,10))
console.log(range(5,2))
console.log(range(5,1,-2))
console.log(range(1,10,3))
const sum = (array) => {
    let result = 0
    array.forEach((number) => {
        result += number
    })
    return result
}
console.log(range(1,10,2))
console.log(sum(range(1,10)))

//ESERCIZIO 2
const reverseArray = (array) => {
    const result = []
    for (let i = array.length - 1; i>=0; i--){
        result.push(array[i])
    }
    return result
}
console.log(reverseArray(range(1,10)))

// ESERCIZIO 3

let lista = {
    value : null,
    next : null
}
const arrayToList = (array) => {
    const temp = reverseArray(array)
    let result = lista
    for (let i = 0; i < temp.length; i++){
        result = {value : temp[i], next : result}
    }
    return result
}
console.log(arrayToList([1,2,3]))
const listToArray = (list) => {
    const result = []
    while(list.next){
        result.push(list.value)
        list = list.next
    }
    return result
}
console.log(listToArray(arrayToList([1,2,3])))

//ESERCIZIO 4

const deepEqual = (x, y) => {
    if((typeof x == "object") && (x != null) && (typeof y == "object") && (y != null)) {
        let bool = true
        let keyX = Object.keys(x)
        let keyY = Object.keys(y)
        for (let i = 0; i < keyX.length && bool; i++){
            //console.log(keyX[i] + ' ' + keyY[i])
            bool = deepEqual(x[keyX[i]], y[keyY[i]])
        }
        return bool
    }
    return x === y
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(3,2))
