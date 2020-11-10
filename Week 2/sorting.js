// function minBubbleSort(numbers) {
//     let temp;
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length - i; j++) {
//             if (numbers[j] > numbers[j + 1]) {
//                 temp = numbers[j];
//                 numbers[j] = numbers[j + 1];
//                 numbers[j + 1] = temp;
//             }
//         }
//     }
//     return numbers
// }

// function maxBubbleSort(numbers) {
//     let temp;
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length - i; j++) {
//             if (numbers[j] < numbers[j + 1]) {
//                 temp = numbers[j];
//                 numbers[j] = numbers[j + 1];
//                 numbers[j + 1] = temp;
//             }
//         }
//     }
//     return numbers
// }

// console.log(minBubbleSort([29,10,14,37,14]))
// console.log(maxBubbleSort([29,10,14,37,14]))

// console.log(minBubbleSort([29,10,14,37,14,10,33,17]))
// console.log(maxBubbleSort([29,10,14,37,14,10,33,17]))

// // console.log(bubbleSort([29,10,14,37,14,10,33,17,12,35,33,7]))
// /*
//     * 10 14 29 14 10 33 17 37 i = 0
//     * 10 14 14 10 29 17 33 37   i = 1
//     * 10 14 10 14 17 29 33 37 i = 2
// */

function sorting(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}

// console.log(sorting([ 2, 4, 6, 8, 2, 3 ]))

// function sortingByType(array) {
//     let numbers = [];
//     let strings = [];
//     let booleans = [];

//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "number") {
//             numbers.push(array[i])
//         } else if (typeof array[i] === "string") {
//             strings.push(array[i])
//         } else if (typeof array[i] === "boolean") {
//             booleans.push(array[i])
//         }
//     }
//     numbers = sorting(numbers)
//     strings = sorting(strings)
//     booleans = sorting(booleans)

//     return [numbers, strings, booleans]
// }

// console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]))

function sortAllClean(array) {

    let numbers = [];
    let strings = [];
    let booleans = [];

    let flag = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i] === undefined || array[i] === null || Number.isNaN(array[i]) === true || array[i] === []) {
            flag++
        } else {

            if (typeof array[i] === "number") {
                numbers.push(array[i])
            } else if (typeof array[i] === "string") {
                strings.push(array[i])
            } else if (typeof array[i] === "boolean") {
                booleans.push(array[i])
            }
        }
    }
    if (flag === array.length - (numbers.length + strings.length + booleans.length)) {
        return []
    } else {

        numbers = sorting(numbers)
        strings = sorting(strings)
        booleans = sorting(booleans)

        return [numbers, strings, booleans]
    }
}

console.log(sortAllClean([undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]))
console.log(sortAllClean([NaN,undefined]))
// sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false])
// 