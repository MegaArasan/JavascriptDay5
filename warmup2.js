// 15.Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
    if(num1%2!=0 && num2%2!=0){
        return true
    }else{
        return false
    } }
   var both=areBothOdd(1,3)
   console.log(both)

//    16.Given a first and a last name, “getFullName” returns a single string with the
//  given first and last names separated by a single space
function getFullName(firstName, lastName){
   var str=firstName.concat(' ',lastName)
   return str
   }
  var name1= getFullName("GUVI","GEEK")
  console.log(name1)

//   17.Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
   var a=word1.length
   if(a==undefined){
       return -1
   }
   return a
   }
   console.log(getLengthOfWord("Mega"))

// 18.Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
   return (word1.length==word2.length)?"True":"False"
   }
   console.log(isSameLength("GUVi","GEEk"))

//19.Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    // Distance = sqrt{(x2-x1)^{2} + (y2-y1)^{2}} 
    return Math.sqrt(Math.pow(x2 - x1, 2) +
                Math.pow(y2 - y1, 2) * 1.0);
}

// 20.Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array
function getNthElement(array,n){
    return array[n]
   }
  var nth= getNthElement([1, 3, 5], 1);
  console.log(nth)

//   21.Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(arr){
    var q=arr.length
    if(q>0)
    return arr[q-1]
    else
    return -1
   }
  var w= getLastElement([1, 2, 3, 4,5,6,7,8,9]);
  console.log(w)

// 22.Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
    return obj.mykey
   }
   console.log(getProperty(obj,"mykey"))

//23.Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {
    mykey: "value"
   };
   addProperty(obj, 'myProperty');
   console.log(obj); // --> true   
   function addProperty(obj, key) {
    obj[key] = true;
    return obj;
   }

// 24.Given an object and a key, “removeProperty” removes the given key from the given object
function removeProperty(obj, key){
    if (obj && obj [key])
     delete obj[key]
    return obj
   }
   var rem=removeProperty(obj,"mykey")
   console.log(rem)

//25.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    const answer = []
    let positiveSum = 0
    let negativeSum = 0
    let count=0
    if(arr.length) {
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            count+=1
        } else {
            negativeSum += arr[i]
        }
      }
      answer.push(count)
      answer.push(negativeSum)
    }
    return answer
}
console.log(ar2(arr));

// 26.Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(j)
{
    var l=[]
    for(i=0;i<j.length;i++)
    {
    if(j[i] > 0) 
    l.push(j[i])
    }
    return l;
}
var j = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var k = getPositives(j);
console.log(k);

//27.Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n
function powersOfTwo(n){
    var resul=[]
    for (i=0;i<=n;i++)
    {
      resul.push(Math.pow(2,i))  
   
    }
    return resul;
  }
  let n=2
  let twopow=powersOfTwo(n)
  console.log(twopow)