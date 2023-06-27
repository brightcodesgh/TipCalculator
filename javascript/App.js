//Get div and inputs Id's
const amountInput = document.getElementById('amount');
const tipInput = document.getElementById('tip');
const peopleNumDiv = document.getElementById('people');
const totalDiv = document.getElementById('total');

//convert inputs and div's into Number();

let numberOfPeople = Number(peopleNumDiv.innerText)

//Using ES6 to calculate the bill with amount and tipamount
const CalculateBill = () =>{

   const amount = Number(amountInput.value);
   const tipAmount = Number(tipInput.value);

   //calculate total bill
   const totalbill = amount * 1 + tipAmount;

   //divide totalbill by number of people to get bill per person and store it in a variable
   const billperPerson = totalbill / numberOfPeople;

   //update the totaldiv 
   totalDiv.innerText = `$${billperPerson.toFixed(2)}`

}

//increament function
const increasePeople = () =>{
   //increase number of people by one
   numberOfPeople += 1;

   //update the DOM with the new number
   peopleNumDiv.innerText = numberOfPeople;

   //calculate the bill base on the number of people
   CalculateBill()
}


//decrease function
const decreasePeople = () =>{

   //check and make sure the number of people doesn't go below 1
   if(numberOfPeople <= 1){
      return 
   }

   //decrease number of people by one
   numberOfPeople -= 1;

   //update the DOM with the new number
   peopleNumDiv.innerText = numberOfPeople;

   //calculate the bill base on the number of people
   CalculateBill()
 }


