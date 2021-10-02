//print odd numbers in array
let res=function(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2!=0)
        console.log(arr[i])
}
}
res([1,2,3,4,5]);

//Convert all the strings to title caps in a string array
let upper=function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(' '));
  }
upper("mega can dream");

//Sum of all numbers in an array
let sum=function(arr){
    var total=0
    for(i=0;i<arr.length;i++)
    { 
       total+=parseInt(arr[i])
    }
    console.log(total)
}
sum([12,25,36,54,78])

//Return all the prime numbers in an array
var result = function(arr){
  for(var i = 0; i<arr.length; i++){
      var count = 0;
      for(var j = 2; j<=arr[i]/2; j++){
          if(arr[i]%j==0){
              count++
              break
          } }
      if(arr[i]==2 || count==0){
          console.log(arr[i])
      }
  }
}

result([1,2,3,4,5,6,7]);

//Return all the palindromes in an array
var palindrome = function (arr){
	let res = new Array();
	for (let k in arr){
		let pal = true;
		for (let i = 0, j = arr[k].length-1; i < arr[k].length/2; i ++, j --){
			if (arr[k][i] != arr[k][j]){
				pal = false;
				break;
			}
		}
		if (pal){
			res.push(arr[k]);
		}
	}
	console.log( res);
}
palindrome(["malayalam","liril","mega","arasan"])

//Return median of two sorted arrays of same size
var n=[5,10,15,20,25,30,35,40]
var m=[1,2,3,4,5,50,100,120];
var median=function(n,m){
  let j = 0, k = 0;
let arr3 = new Array();

for (let i = 0; i < n.length+m.length; i ++){
	if (j == n.length){
		arr3.push(m[k++]);
	}
	else if (k == m.length){
		arr3.push(n[j++])
	}
	else if (n[j] <= m[k]){
		arr3.push(n[j++]);
	}
	else{
		arr3.push(m[k++]);
	}
}
console.log (arr3[Math.floor((n.length + m.length)/2)])
}
median(n,m);

//Remove duplicates from an array
let num = [1,1,1,2,3,4,44,4,55,55,5,5,55,5,6];

let map = function(num){
  var dub=[]
for (let i = 0; i < num.length; i ++){
	if (!(dub.includes(num[i]))){
		dub.push(num[i]);

	}
}
console.log (dub)
}
map(num);

//Rotate an array by k times
var nums=[23,5,6,9,8,87]
var k=4;
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop()) 
  }
  console.log(nums);
};
rotate(nums,k)