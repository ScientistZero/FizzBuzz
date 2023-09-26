    //get values from the user. We need to get the Fizz and the Buzz values.
function getValues(){

    //get user values from the page.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let numbers = [];
    //parse for numbers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //check they are integers.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //we can call fizzBuzz
        let fbArray = fizzBuzz(fizzValue,buzzValue);
        //call displayData and write them to the screen.
        displayData(fbArray);

        }else{
    alert("You must enter intgers");
    
        }
}

    //do Fizz Buzz
function fizzBuzz(fizzValue, buzzValue){
    let returnArray = [];
    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        
        //check to see if divisible by both 3 and 5
        //check to see if divisible by Fizz value (3)
        //check to see if divisible by Buzz value (5)
        if (i % fizzvalue ==0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0){
            returnArray.push('Fizz');
        } else if (i % buzzValue == 0){
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }


    returnArray;

}

    //loop over the array and create a tablerow for each item
function displayData(fbArray){

    

    //add all the rows to the table
}