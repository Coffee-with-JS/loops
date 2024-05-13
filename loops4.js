// Take an integer N and print the sum of series given below upto N numbers.

//  S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+3...n)
// Example:
// if N = 3
// S = 1 + 2/(1+2) + 3/(1+2+3) = 1 + 2/3 + 3/6 = 13/6 = 2.167

// Constraints:
// 0 <= N <= 100

// Input:
// A single integer is provided as input.
// Output:
// Sum of the series upto N terms.

// Example:
// Input:
// 3
// Output:
// 2.167


 let N = 3
let sum = 0
let preSum = 0
for(let i = 1; i<=N; i++){
   preSum = preSum+i // 1, 1+2 , 1+2+3
   sum = sum+ i/preSum // 1/1 +  2/3 ,  3/6
}

console.log(sum.toFixed(3))
