import { tsConstructorType } from "@babel/types"

class User {
  constructor(first, last, e) {
    this.f = first;
    this.l = last;
    this.email = e;
  }
}

var userOne = new User("Paul", "O'Conner", "poconner@elevenfifty.org");
console.log(userOne.first);
console.log(User.f);
console.log(userOne.l);
console.log(userOne);