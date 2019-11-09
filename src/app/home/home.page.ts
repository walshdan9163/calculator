import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  currCalculation="";
  inputOperator(op)
  {
    this.currCalculation += op;
    console.log(this.currCalculation);
  }
  inputNumber(num)
  {
    this.currCalculation += num;
    console.log(this.currCalculation);
  }

  calculateResult()
  {
    console.log(this.currCalculation+"=Fuck you");
  }

}
