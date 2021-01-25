//Declaration
//storing users options on type of operation
let service;

//array for numbers input for addition/multiplication
let numbers_array = new Array();

//numbers input for subtraction/division
let firstNum;
let secondNum;

function add(array) {
    summ = 0

    for (let i = 0; i < array.length; i++) {
        summ = summ + Number(array[i]);
    }

    return summ;
}

function sub(firstNum, secondNum) {
    return Number(firstNum) - Number(secondNum);
}

function mult(array) {
    product = 1;

    for (let i = 0; i < array.length; i++) {
        product = product * Number(array[i]);
    }

    return product;

}

function div (firstNum, secondNum) {
    if (secondNum == 0) {
        return 'Error: division by zero';
    }

    else {
        return (Number(firstNum) / Number(secondNum)).toFixed(2);
    }
}

function findMin(array) {
    min_num = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        if (Number(array[i]) < min_num) {
            min_num = Number(array[i]);
        }
    }

    return min_num;
}

function findMax(array) {
    max_num = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        if (Number(array[i]) > max_num) {
            max_num = Number(array[i]);
        }
    }

    return max_num;

}

function findSquare(number) {
    return number*number;
}


//Immediately Invoking function expression
(function() {
    service = prompt("Which of the following operations would you like to perform \n"
                    + "1. Addition \n"
                    + "2. Subtraction \n"
                    + "3. Multiplication \n"
                    + "4. Division \n" 
                    + "5. Find minimum in list\n"
                    + "6. Find maximum in list \n" 
                    + "7. Find square of a number");

    if (service == 1 || service == 3 || service == 5 || service == 6) {
        let numbers = prompt("How many numbers are you operating on?")

        for (let i = 0; i < parseInt(numbers); i++) {
            numbers_array[i] = prompt("Enter number " + (i+1) + ": ");
        }

        if (service == 1) {
            console.log('Result: ' + add(numbers_array));
        }
        
        else if (service == 3) {
            console.log('Result: ' + mult(numbers_array));
        }

        else if (service == 5) {
            console.log('Minimum: ' + findMin(numbers_array));
        }

        else if (service == 6) {
            console.log('Maximum: ' + findMax(numbers_array));
        }

    }

    else if (service == 2) {
        firstNum = prompt("Enter first number: ");
        secondNum = prompt("Enter second number: ");

        console.log('Result: ' + sub(firstNum, secondNum));
    }

    else if (service == 4) {
        firstNum = prompt("Enter first number: ");
        secondNum = prompt("Enter second number: ");

        console.log('Result: ' + div(firstNum,secondNum));
    }

    else if (service == 7) {
        number = prompt("Enter number you want to find square of: ");
        console.log('Result: ' + findSquare(number));
    }

    else {
        console.log("Choose options 1-4.")
    }    
})();
