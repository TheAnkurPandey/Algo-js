function mergeSort(arr) {
    if (arr.length < 2) return arr;
    var midIdx = Math.floor(arr.length/2);
    var leftSubArr = arr.slice(0, midIdx);
    var rightSubArr = arr.slice(midIdx);
    return merge(mergeSort(leftSubArr), mergeSort(rightSubArr));
}

function merge(arr1, arr2){
    var arr = [], k = 0, i = 0, j = 0;
    arr1.push(Number.MAX_SAFE_INTEGER);
    arr2.push(Number.MAX_SAFE_INTEGER);
    while (k++ < arr1.length + arr2.length - 2){
        if (arr1[i] < arr2[j])
            arr.push(arr1[i++]);
        else
            arr.push(arr2[j++]);
    }
    return arr;
}

console.log(mergeSort([5,4,3,2,1,-10,5,5,1]));