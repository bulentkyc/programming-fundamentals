console.log('Hello World!');

let myVar = parseInt(prompt('Give me a number'));
let name = 'Bulent';

console.log(myVar, name);

if (myVar < 2) {
    let info = 'info'
    //console.log(myVar, name, lName, info);
    //we can not use any variable before then the definition.
    console.log(myVar, name, info);
    if (myVar>0) {
        console.log(info);
    } 
} else {
    //console.log(myVar, name, info);// SIBLING SCOPE can not reach variable of SIBLING SCOPE
    console.log(myVar, name);
}

let lName = 'Kyc';
//var lName = 'Kyc'; // undefined
//var is working different then let

//console.log(info); // PARENT SCOPE can not reach variable of CHILD SCOPE

/*

INFO: Scope is the code-block between curly brackets
INFO: Global-Scope is the code-block which is not between
any curly brackets. It's directly on the root of the file

//HEADS-UP: Every scope can reach variables on itself and all parents
//TRICK: You can ask yourself is this scope, child of the scope which you
wish to reach a variable from

*/

let userName = prompt('Please type your user name');
let luckyNumber = parseInt(prompt('Whta is your lucky number'));

//HEADS-UP: if (userName == 'bulent' || 'Antonis' || 'Nicklaus')
//THIS CODE ALWAYS WORKS SINCE STRING IS TRUE
//HEADS-UO: THERE'S NO COMPARISON ON THE CODE


//console.log(userName == 'bulent' && 'Antonis' && 'Nicklaus');

if (userName == 'bulent' || userName == 'Antonis' || userName == 'Nicklaus') {
    console.log('Welcome on admin panel');
} else if (luckyNumber < 0) {
    console.log('Negative');
} else {
    console.log('Positive or 0');
}

/*
HEADS-UP: if you connect else , if you create a chain!
So you'll have one thing which has some branches.
*/


//Use-Case -1

if (luckyNumber < 0) {
    console.log('Lucky number can not be negative!');
}

//Use-case -2
let day = prompt('Please give a day').toUpperCase();

if ( day == 'Monday' ) {
    console.log('Syndrome');
} else {
    console.log('Happy');
}

//Use-case -3

let age = parseInt(prompt('How old are you?'));

if (age < 18) {
    if (age > 12) {
        if(age < 15) {
            console.log('12-15');
        } else {
            console.log('15-18');
        }
    } else {
        console.log('12-');
    }
    
} else {
    console.log('18+');
}

if (age >12 && age <15) {
    console.log('12-15');
}

if (age < 18 && age >=15) {
    console.log('15-18');
}

if (age < 12) {
    console.log('12-');
}

if (age >= 18) {
    console.log('18+');
}

if (18 > age) {
console.log('Yayy');
}

let x = 'Nicklaus';
let y = 'Mihály';

console.log('x',x,'y',y);
/* x=y;
y=x; */
let t = x;
x=y;
y=t;

console.log('x',x,'y',y);

/* 
if (userName == 'bulent' || userName == 'Antonis' || userName == 'Nicklaus') {
    console.log('Welcome on admin panel');
}
 */



let  test, test2;

console.log(test, test2);

test2 = 'Some text';

test2 = undefined;

console.log(test, test2);



//Use-case -4 
let dayNum;

if(day == 'MONDAY') {
    dayNum = 1
} else if (day == 'TUESDAY'){
    dayNum = 2
}else if (day == 'WEDNESDAY'){
    dayNum = 3
} else if (day == 'THURSDAY'){
    dayNum = 4
} else if (day == 'FRIDAY'){
    dayNum = 5
} else if (day == 'SATURDAY'){
    dayNum = 6
} else if (day == 'SUNDAY'){
    dayNum = 7
} else {
    dayNum = undefined;
}

console.log(dayNum);





//-------------------//

switch (day) {
    case 'MONDAY':
        dayNum = 1;
        break;

    case 'TUESDAY':
        dayNum = 2;
        break;

    case 'WEDNESDAY':
        dayNum = 3;
        break;

    case 'THURSDAY':
        dayNum = 4;
        break;

    case 'FRIDAY':
        dayNum = 5;
        break;

    case 'SATURDAY':
        dayNum = 6;
        break;

    case 'SUNDAY':
        dayNum = 7;
        break;

    default:
        console.log('This is not a day');
        break;
}


console.log('dayNum', dayNum);