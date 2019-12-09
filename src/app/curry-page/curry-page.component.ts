import { Component, OnInit } from '@angular/core';


interface TypeInterface {
  animal();
  plant();
}

interface ActionInterface {
  water();
  run();
}

class MethodTypeClass implements TypeInterface, ActionInterface {
  water() {
    console.log('the plant needs to water');
  }
  run() {
    console.log('the animal needs to run');
  }
  animal() {
    console.log('this is animal');
  }
  plant() {
    console.log('this is plant');
  }
}


@Component({
  selector: 'app-curry-page',
  templateUrl: './curry-page.component.html',
  styleUrls: ['./curry-page.component.css']
})
export class CurryPageComponent implements OnInit {
  baseMethod;
  methodtype: MethodTypeClass = new MethodTypeClass();
  constructor() { }

  ngOnInit() {
    this.baseMethod = this.methodA(this.methodtype);
  }

  methodA(methodtype) {
    return (innerType) => {
      methodtype[innerType]();
      if (innerType === 'animal') {
        methodtype['run']();
      } else {
        methodtype['water']();
      }
    };
  }

  click_method(type) {
    this.baseMethod(type);
  }


}
