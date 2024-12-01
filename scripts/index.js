

export function getMaxElement(array = [1, 2, 3, 4, 5]){
    return Math.max.apply(null, array)
}

export function getMinElement(array = [1, 2, 3, 4, 5]){
    return Math.min.apply(null, array)
}

export function sumArrayElements(array = [1, 2, 3, 4, 5]){
    return array.reduce((currSum, a) => currSum + a, 0)
}
