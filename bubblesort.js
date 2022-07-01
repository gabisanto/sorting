//primero que agarre los dos primeros,compare, y mueva al mayor

let arrayDesordenado = [8,5,3,1,9,0]
let swapCounter = 0
// let arrayCasi = []
// let arrayOrdenado = []

function bubbleSort(array) {
    for (let i=0;i<array.length;i++) {
        for (let j=0;j<array.length;j++){
            if (array[j]>array[j+1]){
                swap(array,j)
                swapCounter++
                // console.log(array + ' vengo del for interno con j')
                }}
                // console.log(array + ' vengo del for con i')             
    }
    return array
}

function swap(array,j) {
    let mayor = array[j]
    let menor = array[j+1]
    array[j+1] = mayor
    array[j] = menor
    //return array
    
    
}

// console.log(bubbleSort(arrayDesordenado))
// console.log(' ' + swapCounter)
// 1- 8 y 2