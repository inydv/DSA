/*
Given an array arr[] denoting heights of N towers and a positive integer K.

For each tower, you must perform exactly one of the following operations exactly once.

Increase the height of the tower by K
Decrease the height of the tower by K
Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

Input: k = 2, arr[] = {1, 5, 8, 10}
Output: 5
Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.

Input: k = 3, arr[] = {3, 9, 12, 16, 20}
Output: 11
Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11. 
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  // Function to get the minimum difference between the heights.
  getMinDiff(arr, k) {
    // Step 1: Sort the array to simplify the comparison of heights
    arr.sort((a, b) => a - b);

    const n = arr.length;

    // Initialize the answer with the current difference between the tallest and
    // shortest towers
    let ans = arr[n - 1] - arr[0];

    // Traverse through each tower to consider possible modifications
    for (let i = 1; i < n; i++) {
      // If decreasing the current tower by k makes it negative, skip this
      // iteration
      if (arr[i] - k < 0) {
        continue;
      }

      //  Calculate the new minimum height:
      //  It's the smaller value between:
      //  - The first tower increased by k
      //  - The current tower decreased by k
      const mn = Math.min(arr[0] + k, arr[i] - k);

      //  Calculate the new maximum height:
      //  It's the larger value between:
      //  - The previous tower increased by k
      //  - The last tower decreased by k
      const mx = Math.max(arr[i - 1] + k, arr[n - 1] - k);

      //  Update the answer with the smallest difference found so far
      ans = Math.min(ans, mx - mn);
    }

    // Return the minimum possible difference after modifications
    return ans;
  }
}
