class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.type = "Trial User";
  }

  greet() {
    console.log('Welcome back, ' + this.name);
  }

  status() {
    console.log('Current status: ' + this.type);
  }
}

var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

class BronzelevelUser extends User {
  constructor(username, password, ccinfo) {
    super(username, password)
    this.type = "Bronze User";
    this.ccinfo = ccinfo;
  }

  getInfo() {
    console.log(this.username, this.password, this.type, this.ccinfo);
  }
}

var bronzeGuy = new BronzelevelUser("Bronze Dude", "bronze7589", '424242424242');
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
