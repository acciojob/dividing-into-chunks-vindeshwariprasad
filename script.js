const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const subarrays = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (const num of arr) {
        if (currentSum + num <= n) {
            currentSubarray.push(num);
            currentSum += num;
        } else {
            subarrays.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        }
    }

    if (currentSubarray.length > 0) {
        subarrays.push(currentSubarray);
    }

    return subarrays;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
