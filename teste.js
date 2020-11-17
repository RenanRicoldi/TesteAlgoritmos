/**
 * 1) sort
 * 
 * Implementação de randomized quicksort descrita em Cormen, T. H., & Cormen, T. H. (2001). Introduction to algorithms. Cambridge, Mass: MIT Press.
 * 
 * T(array_to_sort.length as n) = O(n lg n)
 */

function exchange(array, position1, position2) {
    let aux = array[position1]
    array[position1] = array[position2]
    array[position2] = aux
}

function partition(array, begin, end) {
    let lastItem = array[end]
    let i = begin - 1

    for(let j = begin; j < end; j++) {
        if(array[j] <= lastItem) {
            i++
            exchange(array, i, j)
        }
    }

    exchange(array, i+1, end)

    return i + 1
}

function randomizedPartition(array, begin, end) {
    let i = Math.floor(Math.random() * (end - begin)) + begin

    exchange(array, i, end)

    return partition(array, begin, end)
}

function sort(array, begin, end) {
    if(begin < end) {
        let q = randomizedPartition(array, begin, end)

        sort(array, begin, q - 1)
        sort(array, q + 1, end)
    }
}

/**
 * 2) Fatorial
 * 
 * T(number) = O(number)
 */

function fatorial(number) {
    if(number == 0)
        return 1
    
    return number*fatorial(number-1)
}

/**
 * 3) Fibonnaci
 * 
 * T(number) = O(number)
 */

function fibonacci(number) {
    let lastNumber = 0, actualNumber = 1, aux

    if(number == 0) {
        return 0
    }

    for(let i = 2; i <= number; i++) {
        aux = lastNumber + actualNumber
        lastNumber = actualNumber
        actualNumber = aux
    }
    
    return actualNumber
} 

fibonacci(80)

var array_to_sort = [9,3,2,19,3,4,10,34,-99,99]
sort(array_to_sort, 0, array_to_sort.length-1)

fatorial(10)