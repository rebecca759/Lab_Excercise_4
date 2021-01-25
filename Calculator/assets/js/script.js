let service;

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
    product = 0;

    for (let i = 0; i < array.length; i ++) {
        product = product * Number(array[i]);
    }

}

function div (firstNum, secondNum) {
    if (secondNum == 0) {
        return 'Error: division by zero';
    }

    else {
        return (Number(firstNum) / Number(secondNum)).toFixed(2);
    }
}

(function() {
    service = prompt("Which of the following operations would you like to perform \n"
                    + "1. Addition \n"
                    + "2. Subtraction \n"
                    + "3. Multiplication \n"
                    + "4. Division");

    let firstNum;
    let secondNum;

    if (service == 1 || service == 3) {
        let numbers = prompt("How many numbers are you operating on?")
        let numbers_array = new Array();

        for (let i = 0; i < parseInt(numbers); i++) {
            numbers_array[i] = prompt("Enter number " + (i+1) + ": ");
        }


        if (service == 1) {
            console.log('Result: ' + add(numbers_array));
        }
        
        // else if (service == 3) {
        //     console.log('Result: ' + mult(firstNum, secondNum));
        // }
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

    else {
        console.log("Choose options 1-4.")
    }    
})();
