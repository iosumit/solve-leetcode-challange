import Case from "./cases.js";

const cases = [
    new Case([[1, 3, -1, -3, 5, 3, 6, 7], 3], [3, 3, 5, 5, 6, 7]),
    new Case([[1], 1], [1])
];

// // push element from rear end
// dequeue.push(3); // [3]
// dequeue.push(8); // [3, 8]

// // push element from front end
// dequeue.unshift(5); // [5, 3, 8]
// dequeue.unshift(11); // [11, 5, 3, 8]     

// // pop element from rear end
// dequeue.pop(); // [11, 5, 3]

// // pop element from front end
// dequeue.shift(); // [5, 3]

const dequeue = [];

var maxSlidingWindow = function (nums, k) {
    let queue = [];
    let l = 0, r = 0;
    let output = [];

    while (r < nums.length) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[r]) {
            queue.pop();
        }
        queue.push(r);

        if (l > queue[0]) {
            queue.shift();
        }

        if (r + 1 >= k) {
            output.push(nums[queue[0]])
            l++;
        }
        r++;
    }
    return output;

};
cases.forEach(element => {
    let a = maxSlidingWindow(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});