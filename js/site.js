//get values from the user. We need to get the Fizz and the Buzz values.
function getValues(){

//get user values from the page.

//parse for numbers.

//check they are integers.

//we can call fizzBuzz

//call displayData and write them to the screen.


}


function fizzBuzz(fizzValue, buzzValue)
{

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