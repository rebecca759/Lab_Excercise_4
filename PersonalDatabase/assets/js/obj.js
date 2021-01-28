const personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    age: 0,
    bmi: 0,
    job: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    

    ageCalc:function() {return this.age = new Date().getFullYear() - this.birthYear;},

    checkVote:function(){
        let tempAge = this.ageCalc();
        if (tempAge >= 18) {
            this.isEligibleToVote = true;
        }

        else {
            this.isEligibleToVote = false;
        }
    },

    calcBmi: function() {
        let temp_bmi = Number(this.weight / (Math.pow(this.height,2)));
        this.bmi = temp_bmi.toFixed(2);
        let weight;
        
        if (this.bmi <= 18.5) {
            weight = "Underweight";
        }

        else if (this.bmi > 18.5 && this.bmi <= 24.9) {
            weight = "Normal or Healthy Weight";
        }

        else if (this.bmi >= 25.0 && this.bmi <= 29.9) {
            weight = "Overweight";
        }

        else if (this.bmi >= 30.0) {
            weight = "Obese";
        }

        return weight;
    }
};

//Recieve the values from input and assign to object properties
personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your last name");
personProfile.job = prompt("What is Your profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Enter your weight in Kg");
personProfile.height = prompt("Your Height in M? ");
let numberOfFamily = prompt("Number of Family? ");

//Receiving the family number
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family Members " + (i+1));
}


//Adding self Invoking Function Expression
(function() {
    
    //call age and check vote fun
    personProfile.ageCalc();
    personProfile.checkVote();
    personProfile.calcBmi();

    console.log("****************************************")
    console.log("Here is your Profile")
    console.log("Profession: " + personProfile.job);
    console.log("Age: " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote: " + personProfile.isEligibleToVote);
    console.log("BMI: " +  personProfile['bmi']);
    console.log("Weight Status: " +  personProfile.calcBmi());
    console.log("Family Members");

    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function(member,index) {
        console.log("Family Member " + (index+1) + ": " + member);
    });

})();