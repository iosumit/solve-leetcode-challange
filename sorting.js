function InsertionSort(nums) {
    // while length A[1-n] !0
    // - left (0)
    // Pick one from right i 
    // Compare with left 
    // start from i-1
    // do
    //    if left is greater move it to i+1
    //    else break
    // a[i] = pickedup element
    for (let i = 1; i < nums.length; i++) {
        const key = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = key;
    }

    return nums;
}
console.log(InsertionSort([9, 6, 5, 0, 8, 2, 7, 1, 3]));