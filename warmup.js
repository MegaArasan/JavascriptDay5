//1. Given a number, “addFive” returns 5 added to that number.
var a =5;
function addFive(a) { 
  var res=5+a
  return res
}
var result1 = addFive(a)
console.log(result1)

//2. Given a number, return its opposite
var b=5
function getOpposite(b) {
    if (b !=NaN)
    {
        b = -b
    }
    else
    {
        b = -1;
    }
    return b;
}
var result2= getOpposite(b)
console.log(result2)

// 3.minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
      return Math.floor(min * 60);

}
var secs = toSeconds(min)
console.log(secs)

// 4.Create a function that takes a string and returns it as an integer.
var mystr = "1000";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(myint)

// 5.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint)

// 6.Create a function that takes an array and returns the first element.
var arr = [1,2,3];
function getFirstElement(arr) {
    return arr[0]
}
var data = getFirstElement(arr)
console.log(data)

// 7.Write a function that converts hours into seconds.
function hourToSeconds(arr) {
    var arr1=[]
    for(var i=0;i<arr.length;i++){
        let seconds = arr[i] * 60 * 60;
        arr1.push(seconds)
    }
    return arr1
}
var data1 = hourToSeconds(arr)
console.log(data1)

// 8.Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var peri = findPerimeter(6,7)
console.log(peri)

// 9.Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(n1,n2) {
    let sum=n1+n2;
    return (sum<100)? "True":"False"
}
var res = lessThan100(122,15)
console.log(res)

// 10.Two numbers are passed as parameters.The first parameter divided by the second parameter
//  will have a remainder, possibly zero.  Return that value.
function remainder(n3,n4) {
    let remain=n3%n4
    return remain
}
var resu = remainder(-9,45)
console.log(resu)

// 11.function that returns the total number of legs of all the animals.
function CountAnimals(tur,horse,pigs) {
    let two=tur*2
    let four1=horse*4
    let four2=pigs*4
    let total=two+four1+four2
    return total
}
var legs = CountAnimals(5,2,8)
console.log(legs)

// 12.Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(n5,n6) {
    var sec=60
var frame1=n5*n6*sec
return frame1
}
var fps = frames(10,25)
console.log(fps)

// 13.Create a function that returns true if an integer is evenly divisible by 5, and false otherwise
function divisibleByFive(num1) {
    return (num1%5==0)? "True":"False"
}
var divisible = divisibleByFive(-55)
console.log(divisible)

// 14.Given a number, “isEven” returns whether it is even.
function isEven(m){
    if(typeof(m)!="number")
    {
        return -1
    }
    else if(m%2==0)
    {
        return true
    }else{
        return false
    }
   }
   var even = isEven("11h")
   console.log(even)