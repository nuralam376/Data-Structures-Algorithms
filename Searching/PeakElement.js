const peakElement = (nums) => {
    let low = 0;
    let high = nums.length - 1;
    let mid;

    while(low < high) {
        mid = Math.floor((low + high) / 2);

        if(nums[mid] > nums[mid + 1]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

console.log(peakElement([1,2,3,10]));

// Linear Search = arr[i] >= arr[i - 1] && arr[i] >= arr[i+1]