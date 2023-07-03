function bubbleSort(array) {
    let temp;
    for(let i =0; i < array.length; i++) {
        for(let j = i+1; j< array.length ; j++) {
            if(array[i] < array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    console.log(array)
}

bubbleSort([3, 6, 2, 8, 9, 5]);