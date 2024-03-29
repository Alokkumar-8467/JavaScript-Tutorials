// Strings

// String are Immutable in JavaString. 

console.log("Hello")

let firstName = "Wow";
let lastName = "Programming";
console.log(firstName,lastName)

// Now String Concatination

// 1st method (Using + Operator)

let fullName = firstName + " " + lastName;
console.log("String shown by using Operator = "  + fullName)

// 2nd method (Using Template literals) 

let completeName = `I want to Become ${firstName} ${lastName}`
console.log("String shown by using template = " + completeName )

// Getting String Character

// by doing this we get that index element in console
// here put index of that element
console.log("In firstName at index [2] we get 'w' = " + firstName[2]) 

// String Methods
// These are built-in functions to manipulation a string.

// to change it to lower case and upper case also
console.log("change to upper case = " + firstName.toUpperCase())
console.log("change to lower case = " + lastName.toLowerCase())


// indexOf

// knowing index by word present in variable
console.log("to check m is present in variable or not and m present at 6th index = " + lastName.indexOf("m"))


// String trim Method
// trim removes all the extra spaces

let hobbies = "    coding reading running"
console.log(hobbies)
console.log("after using trim = " + hobbies.trim())

// 

// includes method
// it only tells that it is present or not in true or false form 
// it is used to check the presence of that string

console.log("reading present so it shows true = " + hobbies.includes("reading"))
console.log("anabell not present so it shows false = " + hobbies.includes("anabell"))


// Length of String(str.length)  

let stre = "Alokkumar";
console.log(hobbies.length)

// String Indices (str[0],str[1]..)

console.log(hobbies[3])


// Slice method in String
// it pick that sliced piece and show it in result
// So the lastName defined as  "Programmer"
// Now after using slice from index 0 to 3 it takes only "Pro" as in result
console.log("After using slice = " + lastName.slice(0,3))



// Split in String

let favcolor = "Brown Blue Black Grey";
let arrColors = favcolor.split(' ');
console.log(arrColors)




// In JavaScript String is Immutable

let str = "Hello";
str[0] = "p";
str[1] = "q";

// There will be no change in "str" variable;
console.log("No changes in string = " + str)

// But we can concatinate string with vaiables
let alpha = str + " I am Alpha";
console.log("Now it concatinate the str with new string = " + alpha)


// Template Literals

let specialString = `This is a template literal`;
console.log(typeof specialString)

// Uses of template literals
//  In template literals we use string and variables.

console.log(` the cost of  ${str} is  this one `)

// When we use variable under template literals then it called String Interpolation

//  `string text ${expression} string text`

// Escape char
//  We also use \n for using next line. 
//  We also use \t for tab space.


// str1.concat(str2)  joins str2 with str1.

let str1 = "alok";
let str2 = "kumar";

let res = str1.concat(str2);
consol.log(res);

// str.replace(searchVal,newVal)
// in this we replace the existing value with the new one.

let str = "hello";
console.log(str.replace("h","y"));


// str.charAt(idx)
// By using this we find char at that particular index.

let str = "IloveJS";
console.log(str.charAt(3));