    //get values from the user. We need to get the Fizz and the Buzz values.
function getValues(){

    //get user values from the page.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let numbers = [];
    //parse for numbers.

    //check they are integers.

    //we can call fizzBuzz

    //call displayData and write them to the screen.


}


function fizzBuzz(fizzValue, buzzValue)
{

    // init the returnArray
    let returnArray = [];

    //loop from 1 to 100

    //we need to check the current in three steps
    //check to see if divisible by both 3 and 5
    //if so push 'FizzBuzz' into array and not the number

    //check to see if divisible by Fizz value (3)
    //if so push 'Fizz' into array and not the number

    //check to see if divisible by Buzz value (5)
    //if so push 'Buzz' into array and not the number

    //finally, if none then push the number into the array

    returnArray;

}

function displayData(fbArray){

    //loop over the array and create a tablerow for each item

    //add all the rows to the table
}


//OLD CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//get the values from the page
//start or controller function
function getValues() {
    //get values from page
let fizzValue = document.getElementById("fizzValue").value;
let buzzValue = document.getElementById("buzzValue").value;
let numbers = [];
//We need to validate our input
//parse into integers
fizzValue = parseInt(fizzValue);
buzzValue = parseInt(buzzValue);

if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){

    //call generateNumbers
    let numbers = generateNumbers(fizzValue,buzzValue);
     //call displayNumbers
     displayNumbers(numbers);
    }else{
alert("You must enter intgers");

    }


   
}

//generate numbers from the startValue to the endValue
//logic functions
function generateNumbers(fValue, bValue){
    let numbers = [];

    //we want to get all numbers from start to end
for (let index = fValue; index <= bValue; index++) {
    //this will execute in a loop until index = eValue
    numbers.push(index);
}
    return numbers;
}

//display the numbers and mark the even numbers bold
//display or view functions
function displayNumbers(numbers){
let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];
        if(number % 2 == 0){
            className = "even";

        }
        else{
className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
document.getElementById('results').innerHTML = templateRows

}