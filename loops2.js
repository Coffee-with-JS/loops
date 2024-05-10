// Take a number and return all the even digits of the number.

// Constraints:
// 0 <= number <= 10000

// Input:
// A single integer is provided as input.
// Output:
// Return a list of even digits of the number, each digit in a new line.
// Return -1 in case there are no even digits

// Example:
// Input:
// 1204
// Output:
// 2
// 0
// 4


let n = 120400 //=> 004021 => 2,0,4,0,0
let t = n
let flag = false

// let find zeros at end: 
let zeroCount = 0
while(t>0){
    let digits = t%10  // 0,0
    if(digits == 0){
        zeroCount++ // 2
        flag = true
    }
    else{
        break
    }
    
    t = parseInt(t/10) 
}

t = n



// reverse the number: 
let rev = 0
while(t>0){
    let digits = t%10  // 4,0,2
    rev = rev*10 + digits // 4021
    
    t = parseInt(t/10) // 1204 =>120=`12`=>1 => 0
}
console.log(rev)
// console.log(t)

 t = rev
 
while(t>0){
    let digits = t%10 
    if(digits%2==0){
        console.log(digits)
        flag = true
    }
    t = parseInt(t/10)
}


for(let i = 1; i<=zeroCount; i++){
    console.log(0)
}

if(flag == false){
    console.log(-1)
}





//2nd solution: 


// let num = 1200;
// let tempNum = num;
// let count = 0;
// while(tempNum > 0){
//     count++;
//     tempNum = Math.floor(tempNum / 10);
// }
// let power = 10 ** (count - 1); // 1
// let flag = 0;
// while(power > 0){
//     let digit = Math.floor(num / power); // 1200 , 1000 // 200 , 100 // 00 , 10 // 0 , 1
//     num = num % power;
//     if(digit % 2 == 0){
//         console.log(digit);
//         flag = 1;
//     }
//     power = Math.floor(power / 10);
// }
// if(flag == 0){
//     console.log(-1);
// }