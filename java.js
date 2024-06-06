
var x = 5; // integer
var status = true; // boolean - TF
var x = 6;
var y = 4; 
var z = x+y;
console.log(z)
x = 8 
console.log(x)

let first_name = "Ryan";
let last_name = "Golden"
console.log("My full name is", first_name, last_name);
// const - can not redclare once constant!
const pi = 3.14;
console.log(pi)
// Java has differnt types of operators
// Arithmetic

var r = 7; 
var y = 12;
console.log(r+y)
console.log(r-y)
console.log(r/y)
console.log(r*y)
console.log(r%y)

// Assigment

let w = 12;
let t = 8;
w += t; // w = w+t

console.log(w+t)

// compariosn 

let num1 = 35;
let num2 = 55;
console.log(num1 > num2)
console.log(num1 <= num2)
console.log(num2 <= num1)
console.log(num1 != num2)

// logical ops and &, or | , not !

let isadult  = true;

let hasalisense = true;

let candrive = isadult && hasalisense ;

console.log(candrive)

let nocar = false;
let underage = true;

// conditionals  if  ,  else  else -if 
let age = 20;
if(age >=18){
    console.log("you are a adult")
}
var dice1 = 5;
var dice2 = 1;

var sum = dice1+dice2;
// console.log(sum)

if (sum == 7 || sum == 3)
    {console.log("you win");}
else if (dice1 == dice2) 
    {console.log("you lose")}

else {console.log("try again !")}

// fucntions are blocks of usable code 
// function decleration
function guest(name){
console.log("Goodbye"+ " " + name);
}
guest("Ryan");

// guest();function call

function add(a,b){
    return a+b;
    
}
var result = add(5,3);
console.log(result);
function greet(first_name , last_name){
    console.log("Hello" + "" + first_name + "" + last_name )
}
greet("RYan"," Golden")
// scope of funtion local and global
function Herefunction(){
    let localvar = "I am here";
    console.log(localvar);
}
Herefunction ();

let global = "i am global"
function example(){
    console.log(global)
}
example();
console.log(global);

// function types , built in function , user designed

console.log(Math.floor(Math.random()* 6) +1);
- (0,1) - (0,6) - (1,7)
function randomumber(){
    return (Math.floor(Math.random()* 6) +1);
}
let randomResult = randomumber();
console.log("The dice roll is " + " " + randomResult);

(Math.floor (Math.random()* 12) +1);
- (0,1) - (0,12) - (1,13)
function wildnumber(){
    return (Math.floor (Math.random()* 12) +1);
}
let randomsets = wildnumber();
console.log("the wild card is " + " " + randomsets);

// Condtion and operators

// max of two number 
function max(b,c){
    if (b<c){
        return c;
    }
    else {
        return b;
    }
}
console.log(max(8,6));

// Find if number is even or odd 
function findoutevenorodd(num){
    if(num%2 == 0)
        return "even";
    else{
        return "odd";
    }
}
console.log(findoutevenorodd(4));

// find characther is a vowel or consonant

function checkverbs(char){
    char = char.toLowerCase();
    if(char =="a" || char == "e" || char == "i" || char == 'o' ){
        return "vowel";
    
    }
    else {
        return "constant"
}
}
//  loops- for , while, do while 

for(i =0; i<4; i++){
    console.log(i);
}
for(i = 1; i<12; i++){
    if(i ==3){
        continue;
    }
    if(i ==6){
        break;
    }
    console.log(i)

}

for(j =36; j>22; j--){
    if(j ==27){
        continue;
    }
    console.log(j)
}

// function shuffleCards(){
//     return (Math.floor(Math.random()*21) + 1);
// }
// function Testyourluck(){
//     let deck1 = shuffleCards();
// let deck2 = shuffleCards();
// let sum = deck1 + deck2;
// let result = "";

// if(sum === 21|| sum === 11){
//     result = "you win";
// }
    
// else if (sum === 5 || sum === 2|| sum === 7){
//     result = "you lose";
// }
// else {
//     result = "try again";
// }
// return (Math.floor(Math.random()*21) + 1);

// }

function shuffleCards(){
    return (Math.floor(Math.random()* 21) + 1);
}
function Letsplay(){
    let deck1 = shuffleCards();
    let deck2 = shuffleCards();
    let sum = deck1 + deck2;
    let result = "";

    if (sum === 7 || sum === 11){
        result = "you win";
    } else if (sum === 2 || sum === 3 || sum === 12){
        result = "you lose "
    }
    else{
        result = "try again"
    }
    return(Math.floor(Math.random()*21) + 1);
}
let hard = shuffleCards();
let now = Letsplay();

    
    





    

















