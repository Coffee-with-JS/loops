// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 40
// Output:
// 40



let a = 30 
let b = 39


// 12345

let mul = 1
let flag = false
for(let i = a; i<=b; i++){
    let checkEven = i%2==0 // true
    let last2Digit = i%100 // 45
    let secondLastDigit = parseInt(last2Digit/10) // 4.5 => 4

    if(checkEven == true && secondLastDigit == 4){
        mul = mul*i
        flag = true
    }

}
// mul==1?console.log(0):console.log(mul)
if(flag == false){
    console.log(0)
}
else{
    console.log(mul)
}