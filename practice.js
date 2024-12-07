/* let keyword :-> For the purpose of the functions scope, let keyword is used.*/
let age = 30;
console.log(age);

//The following example shows the div color change requested by getElementById.
let carName = "volvo", color = "BLACK", price = 2000;
document.getElementById("cardemo").innerHTML = color;

//this example shows the for loop where we use let keyword to declare the i value 
for (i=0; i < 3; i++)
{
    console.log(i);
};

//this is parameterised function. this function is callled when the parameter value is provided from another component/function
function greet(name) {
    return "Hello" + " " + name + "!";
};
console.log(("Allice"));
console.log(("Bob"));


//this example shows the if else condition with less than operator
let num1 = 100;
let num2 = 20;

if (num1 < num2){
    console.log("Number is less than num2.");
} else {
    console.log("Number is grether than num1.");
};

//this example shows the if else condition with greater than equal to operator
let grade = 85;

if (grade >= 90) {
    console.log("You can get an A! Exellence Work.");
} else if(grade >= 80) {
        console.log("You can get a B! Good work.");
} else {
    console.log("You got an f! failed.");
};

// this example list is a variable that contains the string "Welcome ,To, Home,!".

let list = "Welcome ,To, Home,!";

console.log(list);

// this example arreay initialized and print fruits keyword then adding the sstring array and shows

let fruits = ["apple","banna","cherry"];

console.log(fruits);

fruits.push("orange");

console.log(fruits);

// this example initaliszed temprature, adding the  incresed temprature and decresing temprature and gives final output 

let temperature  = 25.3;

console.log(temperature);

let incresedTemperature = temperature + 5;

console.log("incresed temperature:",incresedTemperature);

let decresedTemperature = temperature - 3.5;

console.log("decresed temprature:", decresedTemperature);

//  this example boolean conditional statement if statement is decide to which code is execute

let theRaning = true;

console.log("is raning?",theRaning);

let isRaning = false;

console.log("is raning?",isRaning);

// this example the user1 variable assigned null value and print the value of user1 console which is null 
 
let user1 = null;

console.log("user1:",user1);

// this  example the function is it will be update the content of html element with the id "cdemo" to display "PHP!"

function myFunction(){
    document.getElementById("cdemo").innerHTML = "PHP!";
};

// this example This prompts the user with the message "Please enter your name:" and stores the user's input in the name1 variable it will display something like "Hello, Tohid " if the user entered "Tohid"

let name1 = prompt("please enter your name:");

console.log("Hello," + name1 + "!");

// const variable //

// this example The const keyword ensures that the value of PI cannot be changed later in the code
const PI = 3.14159;

console.log("The value of:",PI);

// this example defines a constant object user with properties and const it to the immutable(you cant re assign user) 

const user = {
    name: "Allice",
    age: 23
};

user.age = 34;
console.log(user);

// this example const is used to the contents of the array can still be modified(i.e. element can add to array)

const number = [1,2,3];

number.push(4);
console.log(number);

// this example const keyword that the greeting cannot be reassign the string 

const greeting = "Hello,World!";

console.log(greeting);

// this example const define variable value and the uppercase method convert to string to uppercase, to the lowercase method convert the string lowercase

const title = " In India.";

const addingtitle = "Make" + title;
console.log(addingtitle);


const uppercasetitle = title.toUpperCase();
console.log(uppercasetitle);

const lowercaseaddingtitle = addingtitle.toLowerCase();
console.log(addingtitle);



// var variable //

// this example var variable myname and age1 defines assign the value of string console display show result  

var myName = "John!!";

var age1 = 30;

console.log(myName);

console.log(age1);

// this example this for loop initalize the variable i and i is decleared var  console print the i value, it has global scope 

for (var i = 0; i < 3; i++){
    console.log(i);
}

console.log(i);

// this example display function defines,the variable message1 declare and assign string console print the message1

function display() {
    var message1 = "This is for!"
    console.log(message1);
}

display();

// this example the define two variable and console the print result 

var color11 = "green";

var color12 = "blue";

console.log(color11);

console.log(color12);


// Data types //

// string //

// this example  let keyword define variable string with single quotes and print result

let nameone = 'Tohid';

console.log(nameone);

// this example let keyword define variable string with double quotes and print result 

let nametwo = "Aditya";

console.log(nametwo);

//this example let define the two variable with value and let fullname new variable define the value of fullname console which display   

let firstname = 'Omkar';

let lastname = 'kadam';

let fullname = firstname + " " + lastname ;

console.log(fullname);

// this example the define variable message21 and assign to string ,the .lenght property return the total number of character of string 

let message21 = "Welcome to maharashatra";

console.log(message21.length);

// this example the quote variable define a string , the blackshlash (\) are used to escape(i.e.avoid) the double quotes like("")

let quote = "He said, \" Hello, how are you?\"";

console.log(quote);

// this example the text variable define a string touppercase conevert string uppercase, tolowercase convert the string lowercase,substring is extract part of index 0 to 8 and print the result 

let text = "Hello, Javascript!";

console.log(text.toUpperCase());

console.log(text.toLowerCase());

console.log(text.substring(0,8));

// this example the declare variable  comparision in between conndition(true,false),str1 > str2: This compares the two strings lexicographically (alphabetically) using Unicode values,since "b" is less than "o","banana" is not greater than "orange"

let str1 = "banana";

let str2 = "orange";

console.log(str1>str2);


// number //

// this example the declare variable age21 and assign value,and simply stores the number 30 in the variable age21 and prints it to the console  

let age21 = 30;

console.log(age21);

// this example the declare variable and assign floating value and simply stores the value 10.94 in the variable price1 and prints it to the console 

let price1 = 10.94;

console.log(price1);

// this example of Arithemetic operation

// this example the declare variable num10 and num20 assign the value, the calculates sum num10 and num20 and stores result then print the result

let num10 = 10;

let num20 = 5;

let sum = num10 + num20 ;
console.log(sum);

// this example  the calculates the diffrence between num10 and num20 and store result then print result 

let diffrence = num10 - num20 ;

console.log(diffrence);

// this example the multiplies num10 and num20 and store the result then print result

let product = num10 * num20;

console.log(product);

// this example the divides num10 and num20 and store result then print result

let quotient = num10 / num20;

console.log(quotient);

// this example the calculates the remainder (modulo) of num10 divided by num20 and prints the result (0)

let remainder = num10 % num20;

console.log(remainder);

//this example this attempt divide the string by the number,dividing a string by a not a number because of operation is not valid, since you can't divide a string by a number, the result is NaN.(not a number)

let result = "Hello"/2;

console.log(result);

// this example this rounds the number 10.5778 3 decimal places resulting 10.578 the toFixed() method return string and toString() this method converting the number to a string  

let num30 = 10.5778;

console.log(num30.toFixed(3));

let numstr = num30.toString();

console.log(numstr);

//  this example this decleare variable str and assign value, tostring() method is used to convert a value into a string 

let str = "300";

let num = str.toString();

console.log(str);

// this example this declare variable floatstr and assign value, The parseFloat() function is used to convert a string that represents a floating-point number into an actual number.

let floatstr = "3.14";

let floatnum = parseFloat(floatstr);

console.log(floatnum);





// Bigint //

// this example the declare a variable bigint and assign big integer value, Bigint which can stores larger than the maximum value   

let Bigint = 123456789012345678901235467890n;

console.log(Bigint);

// Arithmetic operator //

// this example the declare the two variable and sum1 is adds two bigint and store the result then print result

let bigint1 =  1000000000000000000n;

let bigint2 =  5000000000000000000n;

let sum1 = bigint1 + bigint2 ;

console.log(sum1);

// this example the declare a variable and multiplication of two bogint values and store the result then display result

let product1 = bigint1 *  bigint2;

console.log(product1);


// Boolean //

// this example the declare two variable assign value true & false the logs value of isactive (which is true) to the print result, the value of iscomplete (which is false)to the print result  

let isactive = true;

let iscomplete = false;

console.log(isactive);

console.log(iscomplete);

// this example the declare variable isauthenticated and assign boolean value if check isauthenticated is true the code is inside is run and print otherwise else condition run and print

let isauthenticated = true;


if (isauthenticated) {
    console.log("Welcome Back, User");
} else {
    console.log("Please log in");
};

// this example the declare a variable ageboy the code check whether ageboy is an adult or a minor based on the age

let ageboy = 18;

let isadult = ageboy >=  18;

console.log(isadult);

let isminor = ageboy < 18;

console.log(isminor);

// 4 Boolean in Logical Operations //

// this example the declare two  variable with boolean value,  && (AND): Returns true only if both conditions are true, || (OR): Returns true if at least one condition is true.

let isweekend = true;

let isholiday = false;

console.log(isweekend && isholiday); // both are true to get output is true

console.log(isweekend ||  isholiday); // at least on is true 

console.log(isholiday); // reverce the boolean value

// this example in this non empty string are truly, so block of code is runs  and the number is 0 falsy the block is does not run 

if ("Hello") {
    console.log("This is truly..!"); // output: This is truthy! because non-empty string is truthy.
};

if (0){
    console.log("This Wont to run."); // This won't run because 0 is falsy
};

let value = null;

if (!value) {
    console.log("THis is falsy.."); // output: This is falsy beacause value is null.
};

// 6 Converting Other Types to Boolean//

let num31 = 1;
 
console.log(Boolean(num31)); // output: true(since 1 is truly value)


let string = "";

console.log(Boolean(string)); // output: false (beacause string is empty)

let obj = {};

console.log(Boolean(obj)); // output: true (since an object is always truly)




// undefined //

// this example the declare variable mycar  if a variable is declared but not assigned a value, it automatically holds the value undefined 
 
let myCar;

console.log(myCar); // output: undefined (when you declare variable without assigning a value)

// this example if a function does not have a return statement, it implicitly returns undefined by default.

function sayHello(){

    console.log("Hello,World");
}

let result1 = sayHello(); // This function doesn't return anything

console.log(result1); //output: unddefined

// this example this creates an object with two properties name and age, If you try to access a property that does not exist in an object, it will return undefined.


let person = {
    name: "Sidhu",
    age: 20
}

console.log(person.address); // output: undefined  (beacause address is does not exist)


// function parameters not provided //

 function greet(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  greet("Tohid"); 

//  Explicitly Assigning undefined to a Variable//

  let status = undefined;

  console.log(status); // Outputs: undefined

  

  //  NULL //

  // this example the declare a variable myvar and assign to the value null 

  let myvar = null;

  console.log(myvar);  // output:null

  // this example the declare the variable mycar11 assign value 199 the check the if mycar11 is equalto null , since myvar11 is not null, the else block is executed. 

  let myvar11 = 199;

  if (myvar11 === null) {

    console.log("myvar is null");
  } else {

    console.log("myvar has value");
  }

  // this example the declare variable person1 an assign value is null, define a function setperson that takes name and age as parameters and assign them to a new object person,calls the set person function with argument person name and age 

  let person1 = null;

  function setPerson(name,age) {

    person = {name: name, age: age };
  }

  setPerson("Tohid","24");
  console.log(person); // output: name:Tohid , age:24 


  // this example the define function greetg that accept parameter person9, inside function it checks if person9 is null ,if person9 is not null logs greeting message  Calls the greetg function, passing null as the argument

  function greetg(person9){
    if (person9 === null) {
        console.log("No person to greetg.");
    } else{
        console.log("Hello," + person9);
    }
}

greetg = (null);


// symbol //

// this example the creates a new symbol with the description and  Logs the symbol, which is a unique, immutable value

let mySymbol = Symbol("description");

console.log(mySymbol);

// this example  these create two unique symbol

let symbol1 = Symbol("id");
let symbol2 = Symbol("id");

let user0 = {
  name: "Alice",
  [symbol1]: 1234,  // Using symbol as a property key
  [symbol2]: 1234
};

console.log(user0[symbol1]);  // Output: 1234
console.log(user0[symbol2]);  // Output: 5678
console.log(symbol1 === symbol2);  // Output: false



// Object // 

// this example the creates an object personp with three properties name,age & job and print result 

let personp = {

    name: "Abhi",
    age: 24,
    job: "Engineer"
};

console.log(personp); // Output: { name: "John", age: 30, job: "Engineer" }
console.log(personp.age); // output: age: 24
console.log(personp.job); // output: job
console.log(personp.name); // output: name

// this example  the creates an object productp with fouer properties and Dot notation is used to access and log specific properties of an object 

let productp = {

    name: "see food",
    price: 300,
    test: "Very Good",
    mfgdate: "20/2024"
}
// Dot notation //

console.log(productp.name);
console.log(productp.price);

// Bracket notation//

console.log(productp["test"]);
console.log(productp["mfgdate"]);


// Adding or Modifying Properties  //


person.city = "New York";    // Adding a new property
person.age = 31;             // Modifying an existing property
person.address = "Itli";

console.log(person);  // Output: { name: "John", age: 31, job: "Engineer", city: "New York" }



// Object Methods this example the creates object persond with name, The this keyword inside a method refers to the object the method belongs to, allowing access to its properties.

let persond = {

    name: "Mohit",

    greet: function(){
        console.log("Hello," + this.name);
    }
}

persond.greet(); // output: Hello,Mohit

// this example the defines a constructer function person with two parameter name,age Constructor functions are used to create new objects with specific properties. The new keyword creates an instance of the object based on the constructor function.

function persson(name,age) {

    this.name = name;
    this.age = age;
}

let persson1 = new persson("Bob",40);
console.log(persson1);  // Output: Person { name: "Bob", age: 40 }

// this example  destructuring allow you to unpack values from objects into indivisual variable, making the code more consice and readable

let pperson = {

    name: "Chom",
    age: 57,
    job: "Teacher"
};

let { name,job } = pperson;
console.log(name); // output: Chom
console.log(job);  // output: Teacher


// js conditional statement //

// this example the declare variable age2 with value if check the value of age2 is greater than or equal to 18 and if condition is true print result 

let age2 = 23;

if (age2 >=18){
    console.log("You are on adult.");
}; // output: You are on adult

//  if Condition with a String Comparison this example set the variable namee to string if checks condition is equal to string print the result 

let namee = "AISH";

if(namee === "AISH"){
    console.log("Hello AISH");
}; // OUTPUT: Hello AISH

// if Condition with Multiple Conditions (Logical AND) this example set the variable agea value ,&& operator ensures that both conditions must be true before executing the code inside the if block.

let agea = 20;

let hasTicket = true;

if(agea >= 18 && hasTicket) {
    console.log("You can enter concert.");
}; // output: You can enter concert.

// if condition  with Negation (Logical NOT) this example  the variable set israising for false, ! operator negates the value of isRaising, meaning the condition checks if isRaising is false. If so, the code inside the if block runs. 

let isRaising = false;
 
if(!isRaising) {
    console.log("Its not raning.!");
};  // output:Its not raning.!


// if else condition //

// this example sets the variable boyage, if-else statement checks whether the person is 18 or older to determine if they are eligible to vote

let boyage = 20;

if(boyage >= 18){
    console.log("Can Vote.");
} else {
    console.log("Canot Vote.");
};

// 2 if-else with a Number Check this example set the variable number1, The % operator finds the remainder when number1 is divided by 2. If the remainder is 0, the number is even; otherwise, it is odd


let number1 = 5;

if(number1 % 2 ===0){
    console.log("Number is even.");
} else{
    console.log("Number is add.");
};

// 3 if-else with String Comparison this example sets variable writing, The if-else statement checks whether writing matches "welcome". If it does, it logs one message; if not, it logs a different message

let writing = "HELLO!";

if(writing === "welcome") {

    console.log("Hello,there..");
} else {
    console.log("Goodbye..");
}; // output: Goodbye..

// 4 if-else with Multiple Conditions this example set the variable The && operator means that both conditions must be true for the code inside the if block to run. If either condition is false, the else block runs

let issunny = true;

let isweekend1 = false;

if(issunny && isweekend1){

    console.log("Lets go for beach.");
} else{
    console.log("Maybe another time.");      // &&: when both condition are true 
}; // output:  Maybe another time.

// 6 Using if-else for Grading System this example set the variable score 85,The conditions are evaluated in order, and since the score doesn't meet the conditions for "A", "B", or "C", it defaults to "F". There is also an issue with the condition else if (score >= 100) because 100 is not greater than or equal to 85

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 100) {
  console.log("Grade: B");
} else if (score >= 95) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
} // output: Grade: F


// 7 if-else with Boolean Logic this example Sets the variable isloggedin to false,  The if-else statement checks if the user is logged in (if isloggedin is true). If so, it logs "Welcome Back!", otherwise, it logs "Please log in."

let isloggedin = false;

if (isloggedin) {

    console.log("Welcome Back!");
} else {
    console.log("Please log in.");
};


// switch case statement this example set the variable day, The switch statement checks the value of day and executes the corresponding case block. If no match is found, the default block executes

    let day = 6;

     switch (day){

        case 1:
            console.log("Monday");
        break;

        case 2:
            console.log("Tuesaday");
        break;

        case 3:
            console.log("wednesday");
        break;
        
        case 4:
            console.log("Thursaday");
        break;
        
        case 5:
            console.log("Friday");
        break;
        
        case 6:
            console.log("Saturday");
        break;
        
        case 7:
            console.log("Sunday");
        break;

        default:
            console.log("Weekend");
    };  // output: Saturday

// Without break Statement  this example set the variable numberr,  The lack of break statements causes "fall-through," meaning the switch statement doesn't stop executing after matching a case. It continues to the next case until it hits a break or the end of the switch block

    let numberr = 2;

    switch (numberr) {

        case 1:
            console.log("One");
        
        case 2:
            console.log("Two");
            
        case 3:
            console.log("Three");
        
        default:
            console.log("Other Number");    
    };  // output: // Two
                //  Three
                //  other number

   //  Using switch with default this example  a switch statement is used to compare the value of the variable and Since there is no match with the given case values, the default case is executed
   
   let color1 = "blue";

   switch (color1) {

    case "red":
        console.log("Color is red.");
        break;

    case "green":
        console.log("Color is green");
        break;
        
    case "aqua":
        console.log("Color is aqua");
        break;
        
    default:
        console.log("Color is unknown");    
   };


   // Ternary Operator //

   // Ternary operator a ternary operator is used to check the value of age3 and assign a value to the variable resultt based on the condition 

   let age3 = 18;

   let resultt = age3 >= 18 ? "You are an adult" : "You are an minor";

   console.log(resultt);

   // this example  the ternary operator is used to check whether the value of number22 (which is 7) is even or odd 

   let number22 = 7;

   let result4 = (number22 % 2 === 0) ? "Even" : "Odd";

   console.log(result4); // output: Odd

   // 3 Nested Ternary Operator this example a nested ternary operator is used to determine the grade based on the value of score22 (which is 85)
   
   let score22 = 85;

   let grade1 = score22 >= 90 ? "A" :(score22 >= 80  ? "B" :(score22 >= 70 ? "C" : "F" ));

   console.log(grade1);

   

   // Nested if else statement //

   // This is how nested if-else statements allow you to check multiple conditions in sequence

        let score4= 85;

        if (score4 >= 90) {
            console.log("Grade A");
        } else {
            if (score4 >= 80) {
                console.log("Grade B");
            } else {
                if (score4 >= 70) {
                    console.log("Grade C");
                } else {
                    console.log("Grade F");
                }
            }
        }
        
    // this example a nested if else statement, this time for checking the age and determining if a person is eligible for various condition

    let age7 = 20;

    if (age7 >= 19) {

        if (age >= 21) {

            console.log("You are an adult and eligible to a drink alcohol.");
        } else{

            console.log("You are an adult but not eligible drink alcohol.");
        } 
    } else {
        console.log("You are an minor.");
    }


    // looing statement // 

    // for loop //

    //  a for loop is used to print numbers from 0 to 4 to the console, the loop runs 5 times and prints 0 to 5

    for (let i = 0; i < 5; i++) {

        console.log(i);
    };

    // this example  a for loop is used to iterate over the fruits array and print each fruit to the console

    let fruit = ["apple","banana","cheery","date"];

    for(let i = 0; i < fruit.length; i++) {

        console.log(fruit[i]);
    };

    // while loop //

    //this example the while loop checks if a is less than or equal to 5. If it is, the loop continues; if not, the loop stops

    let a = 1;

    while (a <= 5) {

        console.log(a);

      a++;
    }

    // this example The while loop continues as long as number is less than or equal to 10


    let sum2 = 0;

    let numbers = 1;

    while (numbers <= 10) {

        sum2 += numbers;     // Add the current number to sum 

        numbers++;          // Increment the number
    }

    console.log("The sum of numbers from 1 to 10 is:",sum2);


    // Do while loop//

    // this example In a do...while loop, the code inside the loop runs at least once before checking the condition, ensuring that the loop will always execute at least once

    let number2 = 1;

    do{
        console.log(number2);

        number2++;
    } while (number2 <= 6);

    // this example the do...while loop iterates over each character in the string "Hello" and prints them one by one until it reaches the end of the string

    let str11 = "TohidSutar";

    let index = 0;

    do {

        console.log(str11[index]);
        index++;
    } while (index < str11.length);



    // Js String Methods //

    // lenght// Returns the number of characters in a string 

    let str3 = "Hello!";

    console.log(str3.length);

    // toUpperCase() this method Converts all characters of the string to uppercase

    let str4 = "hello";

    console.log(str4.toUpperCase());

    // tolowercase() this method Converts all characters of the string to lowercase

    let str5 = "HELLO";

    console.log(str5.toLowerCase());

    // charAt() this method Returns the character at a specified index 

    let str6 = "Hello";

    console.log(str6.charAt(5));

    // indexOf() this method Returns the index of the first occurrence of a substring

    let str7 = "welcome,home";

    console.log(str7.indexOf("home")); // 8

    // lastIndexOf() this method Returns the index of the last occurrence of a substring

    let str8 = "Hello, world, world!";

    console.log(str8.lastIndexOf("world"));

    // substring() this method Returns a part of the string between two specified indices

    let str9 = "Hello,world";

    console.log(str9.substring(0,8));

    // slice() this method Similar to substring(), but can handle negative indices 

    let str10 = "Hello,world";

    console.log(str10.slice(7));

    // replace() this method Replaces the first occurrence of a substring with a new value 

    let str12 = "Hello, world";

    console.log(str12.replace("Hello","Welcome to"));

    // split() this method Splits a string into an array of substrings based on a separator

    let str13 = "apple,banana,orange";

    console.log(str13.split(","));

    // trim() this method Removes whitespace from both ends of a string

    let str14 = "   hello, world!";

    console.log(str14.trim());

    // concat() this method Combines two or more strings into one string 
    
    let str15 = "Hello";

    let str16 = " World";

    console.log(str15.concat(str16));

    // includes() this method Checks if a substring is present in the string, returns true or false

    let str17 = "Hello world";

    console.log(str17.includes("home"));

    // repeat() this method Returns a new string with a specified number of copies of the original string

    let str18 = "Hi!";

    console.log(str18.repeat(3));

    // startsWith() this method Checks if a string starts with a specified substring, returns true or false

    let str19 = "Hello, world";

    console.log(str19.startsWith("Hello"));

    // endsWith() this method Checks if a string ends with a specified substring, returns true or false

    let str20 = "Hello, world";

    console.log(str20.endsWith("Hello"));

    // match() this method Matches a string against a regular expression and returns an array of matches

    let str21 = "The rain in Spain stays mainly in the plain.";

    console.log(str21.match(/ain/g));

    // search() this method Tests a string against a regular expression and returns the index of the first match, or -1 if no match is found 

    let str22 = "The rain in Spain stays mainly in the plain.";

    console.log(str22.search("Spain"));


    // Js array method //

    // push() this method Adds one or more elements to the end of an array and returns the new array length 

    let arr1 = [1,2,3];

    arr1.push(4,5);

    console.log(arr1);

    // pop() this method Removes the last element from an array and returns that element 

    let arr2 = [1,2,3,4];

    let last = arr2.pop();

    console.log(arr2);

    console.log(last);

    //shift() this method Removes the first element from an array and returns that element

    let arr3 = [1,2,3];

    let first = arr3.shift();

    console.log(arr3);

    console.log(first);

    // unshift() this method Adds one or more elements to the beginning of an array and returns the new array length

    let arr4 = [2,3];

    arr4.unshift(1);

    console.log(arr4);

    //concat() this method Merges two or more arrays and returns a new array 

    let arr5 = [1,2];

    let arr6 = [3,4];

    let resultarr56 = arr5.concat(arr6);

    console.log(resultarr56);

    // join() this method Combines all elements of an array into a single string, separated by a specified separator

    let arr7 = [1,2,3,4];

    console.log(arr7.join('-'));

    // slice() this method Returns a shallow copy of a portion of an array between two specified indices

    let arr8 = [1,2,3,4,5];

    let sliced = arr8.slice(1,4);

    console.log(sliced);

    //splice() Adds/removes elements from an array at a specific index and can modify the original array

    let arr9 = [1,2,3,4];

    arr9.splice(2,1,'a','b');

    console.log(arr9);

    // forEach() this method Executes a provided function once for each array element

    let arr10 = [1, 2, 3];

    arr10.forEach(item => console.log(item));

    // map() this method Creates a new array populated with the results of calling a provided function on every element

    let arr11 = [1, 2, 3];

    let doubled = arr11.map(x => x * 2);

    console.log(doubled);

    //  filter() this method Creates a new array with all elements that pass the test implemented by the provided function

    let arr12 = [1, 2, 3, 4, 5];

    let even = arr12.filter(x => x % 2 === 0);

    console.log(even);

    // reduce() Applies a function to each element (from left to right) to reduce the array to a single value

    let arr13 = [1, 2, 3, 4];

    let sum3 = arr13.reduce((acc, val) => acc + val, 0);

    console.log(sum);

   
