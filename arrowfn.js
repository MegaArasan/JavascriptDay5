//Print odd numbers in an array
var arr=[1,2,3,4,5,6,7,8]
let odd=arr.filter((num)=>{
    return num%2!=0
})
console.log(odd)

//Convert all the strings to title caps in a string array
var str=["mega can dream"]
var arr1=str.map((str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  })
console.log(arr1)

//Sum of all numbers in an array
  var arr2=[12,25,36,54,78]
  let total=arr2.reduce((a,b)=>a+b,0);
console.log(total);

//Return all the prime numbers in an array
const arr3= [1, 3, 2, 5, 10];
const Prime = arr3.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) 
    return false;
  }
  return num !== 1;
});
console.log(Prime);

//Return all the palindromes in an array
let arr4=['mega',121,'malayalam',325,'arasan',141]
let palindrome= arr4.filter((item) => {

    let temp = item+"";

    if (temp.split('').reverse().join('') === item+"")
    {
        return true
    }else{
    return false
    }
})
console.log(palindrome)
