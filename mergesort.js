function split(array) {
    let mitad = Math.floor(array.length/2)
    let firstHalf = array.slice(0,mitad)
    let secondHalf = array.slice(mitad)
    return [firstHalf, secondHalf]
}

function mergeSort(array){
    if (array.length<2) return array
    return split(array)

}


console.log(mergeSort([4,5,2,1,3,6,8,7]))
