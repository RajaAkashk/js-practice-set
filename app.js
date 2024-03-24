let age = 25;
let name = "radha";
console.log(`${name} age is ${age}.`);


let price = 19.99;
let isAvailable = true;
console.log(price , isAvailable);


let num1 = 12;
let num2 = 22;
console.log(num1*num2 , num1+num2 , num1-num2 , num1/num2);


let count = 10;
console.log(count);
count +=5;
console.log(count);


let a = 12;
let b = 22;

if(a>b){
console.log("a is grester than b");

}else if(a == b){
console.log("a is equal to b");
}else{
console.log(" b is greater than a ")
}


let name1 = 'raj';
let age2 = 17;
let isStudent = true;

if(name1 ="" || age2 < 18 || isStudent == true ){
console.log("you have enter somethig wrong ")
}

let isMorning = true;
let isWeekday = true;
let isHoliday = false;

if(isMorning == true  &&  isWeekday==true && isHoliday== false ){
console.log("it is not a holidsay")
}else if(isMorning == true  &&  isWeekday==true && isHoliday== true ){
console.log("it is a holidsay")
}else if(isMorning == false  &&  isWeekday==true && isHoliday== false ){
console.log("it is not morning")
}


let isLogged = true;
let isAdmin = false;

let checking = isLogged && isAdmin;
console.log(checking);

let checking2 = !isLogged && isAdmin;
console.log(checking2);

let checking3 = isLogged && !isAdmin;
console.log(checking3);

let isStudent = true;
let isSenior = true;
let discount = false;

let eligiable = (isSenior || isStudent) || discount;

if(eligiable){
console.log("The person qualifies for a discount.");
}else{
console.log("The person not qualifies for a discount.");
}


let member = true;
let coupon = true;
let check = member && coupon && !(member && coupon) ;
if(check){
console.log("why you have both");
}else{
console.log("okay you can come")
}


let isEmployed = true;
let isEligibleForRetirement = false;
let yearsOfService = 25;

if(isEmployed === true && yearsOfService >= 20){
console.log("not eligiale for retirement")
}else{
console.log("eligiale for retirement") 
}


let str1 = "rajaa";
let str2 = "rajaAkash";

if(str1===""){
console.log("string is emplty")
}else if(str1.length > str2.length){
console.log("string 1 is greater")
}else{
console.log("string 2 is greater")
}


let num1 = 22;
let num2 = 32;
let num3 = 62;

if(num1+num2 > num3){
console.log("not")
}else{
console.log("yes")
}


