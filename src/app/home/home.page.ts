import { Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { evaluate } from "mathjs"


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value = "";

  constructor() {}
  currNumbers=[];
  currOperators=[];
  currNumber="";
  currEquation ="";

  
  changeSign()
  {
    if(this.currNumber.slice(0,1) ==="-")
    {
      let currNumLength = this.currNumber.length;
      this.currNumber = this.currNumber.slice(1,this.currNumber.length);
      this.value = this.value.slice(0, this.value.length-currNumLength) + this.currNumber;
      console.log(this.currNumber);
    }
    else
    {
      let currNumLength = this.currNumber.length;
      this.currNumber = "-"+this.currNumber;
      this.value = this.value.slice(0, this.value.length-currNumLength) + this.currNumber;
      console.log(this.currNumber);
    }

  }
  inputOperator(op)
  {
    //If the currentNumber is null, then we change the last operator we put in to the new one
    if(this.currNumber === "")
    {
      this.currOperators[this.currOperators.length-1] = op;
      this.value= this.value.slice(0,this.value.length-1) + op;
      return;
    }
    this.currNumbers.push(this.currNumber);
    this.currNumber="";
    this.currOperators.push(op);
    this.value += op;

    console.log(this.currNumbers);
    console.log(this.currOperators);

  }
  inputNumber(num)
  {
    this.currNumber += num;
    this.value += num;
  }

  calculateResult()
  {
    //Append the currNumber in the event of a correct input
    if(this.currNumber !== "")
    {
      this.currNumbers.push(this.currNumber);
    }

    //If we push calculate result before appending a second number
    //Remove the last operator
    if(this.currNumbers.length !== this.currOperators.length+1)
    {
      this.currOperators.splice(this.currOperators.length-1,this.currOperators.length);
      console.log(this.currOperators);
    }
    //Display the string
    let j =0;
    let calculateString = "";
    for(let i=0; i < this.currOperators.length; i++)
    {
      calculateString += this.currNumbers[j] +this.currOperators[i];
      j+=1;
    }
    calculateString += this.currNumbers[j]
    console.log(calculateString);
    this.value = String(evaluate(calculateString));


    //Reset the state
    this.resetState();
  }

  resetState()
  {
    this.currNumber="";
    this.currNumbers=[];
    this.currOperators=[];
  }
  resetAll()
  {
    this.value ="";
    this.currNumber="";
    this.currNumbers=[];
    this.currOperators=[];
  }

}
