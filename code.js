let parallelMergesort = async function (arr, lo, hi, tmp) {
    if (lo >= hi) return; // base case for 1 object

    let mid = Math.floor((lo + hi) / 2); // calculates middle

    let leftHalf = parallelMergesort(arr, lo, mid, tmp); // sorts left half of the array 
    let rightHalf = parallelMergesort(arr, mid + 1, hi, tmp); // sorts right half of the array 

    await Promise.all([leftHalf, rightHalf]); // waits for both halves to be completed 

    merge(arr, lo, mid, hi, tmp); // merges both halves 
};

let merge = function (arr, lo, mid, hi, tmp) {
    let i = lo; // left half 
    let j = mid + 1; // right half 

    for (let k = lo; k <= hi; k++) {
        if (i > mid) { // if all elements in left half been through, start right
            tmp[k] = arr[j++];
        } else if (j > hi) { // if all elements in right half been through, start left 
            tmp[k] = arr[i++];
        } else if (arr[i] <= arr[j]) { // if current element is less than or equal to, add it to tmp 
            tmp[k] = arr[i++];
        } else { // otherwise, take the current element from the right half 
            tmp[k] = arr[j++];
        }
    }

    for (let k = lo; k <= hi; k++) {
        arr[k] = tmp[k]; // copy sorted elements back to the original array
    }
};

let mergesort = async function (arr) {
    let tmp = new Array(arr.length);
    await parallelMergesort(arr, 0, arr.length - 1, tmp);
};

