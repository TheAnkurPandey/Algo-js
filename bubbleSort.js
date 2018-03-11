function bubbleSort(arr) {
    for (var i = 1; i <= arr.length-1; i++){
        for (var j = 0; j < arr.length-i; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,4,3,2,1,7,-10,5,5,1 ]));