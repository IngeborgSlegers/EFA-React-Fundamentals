class User {
  constructor(name){
    this.name = name;
    this.type = "Trial User"
  }
  greet() {
    console.log('Welcome back, ' + this.name);
  }
  status() {
    console.log('Current status: ' + this.type);
  }
}

var anonDude = new User("Anonymous Dude");

anonDude.greet();
anonDude.status();

var anonLady = new User("Anonymous Lady");

anonLady.greet();
anonLady.status();

var jess = new User('Jess');
jess.greet();
jess.status();