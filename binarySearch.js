function binarySearch(arr, key) {
    var midIdx = Math.floor(arr.length/2);
    if (arr[midIdx] === key)
        return true;
    else if (arr[midIdx] < key && arr.length > 1)
        return binarySearch(arr.splice(midIdx+1, arr.length), key);
    else if (arr[midIdx] > key && arr.length > 1)
        return binarySearch(arr.splice(0, midIdx), key);
    else
        return false;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60], 50));