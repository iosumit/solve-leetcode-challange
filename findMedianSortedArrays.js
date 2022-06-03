import Case from "./cases.js";

const cases = [
    new Case([[1, 3], [2]], 2.00000),
    new Case([[1, 2], [3, 4]], 2.50000),
    new Case([[1, 3], [2, 7]], 2.50000),
]

var findMedianSortedArrays = function (nums1, nums2) {
    let m1 = -1;
    let m2 = -1;
    let i = 0, j = 0;
    let n = nums1.length, m = nums2.length;

    for (let count = 0; count <= (m + n) / 2; count++) {
        m2 = m1;
        if (i != n && j != m) {
            m1 = (nums1[i] > nums2[j]) ? nums2[j++] : nums1[i++];
        }
        else if (i < n) {
            m1 = nums1[i++];
        }
        else {
            m1 = nums2[j++];
        }
    }
    if ((m + n) % 2 == 1) {
        return m1;
    }
    else {
        return (m1 + m2) / 2;
    }
};


cases.forEach(element => {
    let a = findMedianSortedArrays(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});