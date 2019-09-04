import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TestModel } from '../shared/models/home.model'
import { Observable, of, from } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-forms-demo",
  templateUrl: "./forms-demo.component.html",
  styleUrls: ["./forms-demo.component.css"]
})
export class FormsDemoComponent {
  name = new FormControl("");

  groupedForm = new FormGroup({
    fname: new FormControl(""),
    lname: new FormControl("")
  });

  constructor() {}



  ngOnInit() {
               this.name.setValue("input form");

               const person: TestModel = {
                 id: 104,
                 name: "ravi"
               };

               //---basic example of map. notice the  string is converted to uppercase.
               const source = of("david");
               source
                 .pipe(map(name => name.toUpperCase()))
                 .subscribe(data => console.log(data));

               //---basic example of tap.--notice there is no change observed when using tap.
               source
                 .pipe(tap(name => name.toUpperCase()))
                 .subscribe(data => console.log(data));

               ////---basic example of converting to observables.
               // const peObs: Observable<TestModel> = of(person);
               // peObs.subscribe(mydata => console.log(typeof(mydata)));

               //--- example for converting a promise to observable.
               const perPromise: Promise<
                 TestModel
               > = Promise.resolve(person);
               const peObs: Observable<TestModel> = from(
                 perPromise
               );
               peObs.subscribe(mydata =>
                 console.log(mydata, typeof mydata)
               );
             }

  onSubmit() {
    console.log(this.groupedForm.value);
  }
}
