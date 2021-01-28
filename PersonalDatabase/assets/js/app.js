//Declaration
//You can check this Variables aren't under the window object

var firstName;
var lastName;
var age;
var job;

//Age variable for Holding Number Value
let tempAge;

//Eligible to vote
let isEligibleToVote;

//family store array
let familyMember = new Array();

//number of Family
let numberOfFamily;


//Weight and Height
let weight;
let height;


//Receive the values from input
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession?");
birthYear = prompt("Enter Your year of Birth");
weight = prompt("Your Weight");
height = prompt("Your Height?");
numberOfFamily = prompt("Number of Family?");


//Receiving family number
for (let i = 0; i <parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your family Members" + (i+1));
}

tempAge = calcAge(birthYear);

//check Eligibility
if (tempAge >= 18) {
    isEligibleToVote = true;
}

else {
    isEligibleToVote = false;
}

//age calculator function 
function calcAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

//bmi calculator
function calcBmi(weight,height) {
    return Number(weight / (height**height)).toFixed(2);
};

//Adding Self Invoking function expression
(function() {
    //Display the result on console from input
    console.log("Here is your profile")
    console.log("Full Name:" + firstName + " " + lastName);
    console.log("Profession: " + job);
    console.log("Age: " + tempAge + " " + "years old")
    console.log("Is Eligible to Vote? " + isEligibleToVote)

    console.log("Family Members");
    //Displaying the family member with foreach

    familyMember.forEach(function(member, index) {
        console.log("Family Member" + (index+1) + " " + member)
    });

    console.log("BMI: " + calcBmi(weight,height));
})();
