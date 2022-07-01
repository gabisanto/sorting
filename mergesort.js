function split(array) {
    let mitad = Math.floor(array.length/2)
    let firstHalf = array.slice(0,mitad)
    let secondHalf = array.slice(mitad)
    return [firstHalf, secondHalf]
}

function mergeSort(array){
    console.log('vuelta')
    if (array.length<2) return array
    let [primera,segunda] = split(array)
    console.log('primera: '+ primera)
    console.log('segunda: '+ segunda)
    let aux1 = mergeSort(primera)
    console.log('mergeSort aux1 '+ aux1)
    let aux2 = mergeSort(segunda)
    console.log('mergeSort aux2 '+ aux2)
    return merge(aux1,aux2)
    //return split(array)

}

function merge(arr1,arr2){
    let arrayOrdenado = []
    while (arrayOrdenado.length < (arr1.length + arr2.length)) {
        if(arr1[0] < arr2[0] || !arr2[0]){
            arrayOrdenado.push(arr1.shift())
        } else {
            arrayOrdenado.push(arr2.shift())
        }
    }
    return [...arrayOrdenado,...arr1,...arr2]
}

//console.log(merge([5,6,7],[1,2,8]))
console.log(mergeSort([6,5,4,3,2,1]))
