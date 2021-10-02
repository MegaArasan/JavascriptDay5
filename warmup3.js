// 28.Find the maximum number in an array of numbers
function findMax(ar)
{
return Math.max(...ar)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:", max);

// 29.Print the first 100 prime numbers
printPrimes(100);
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
function isPrime(n)
{
        for(var i = 2; i < n; i++)
          if(n % i === 0) return false;
        return n > 1;
}

// 30.Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}

// 31.Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
 var dat=s.split(",")
 let sum=0
 for(i=0;i<dat.length;i++)
 {
     sum+=parseFloat(dat[i])
 }
 return sum
}