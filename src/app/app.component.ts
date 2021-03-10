import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  ngOnInit(){
    var arr = [
      { name: 'John', contributions: 2 }, 
      { name: 'Mary', contributions: 4 }, 
      { name: 'John', contributions: 1 }, 
      { name: 'Mary', contributions: 1 }
    ],
    result = [];

    arr.forEach(function (a) {
        if (!this[a.name]) {
            this[a.name] = { name: a.name, contributions: 0 };
            result.push(this[a.name]);
        }
        this[a.name].contributions += a.contributions;
    }, Object.create(null));

    console.log(result);

    var sum = result.reduce((a, b) => ({contributions: a.contributions + b.contributions}));
    console.log(sum.contributions);
  }
}
