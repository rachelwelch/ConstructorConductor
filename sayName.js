//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age) {
  	this.name = name;
  	this.age = age;
  }


//Now create three instances of Person with data you make up

  var rachel = new Person('Rachel', 28);
  var tyler = new Person('Tyler', 30);
  var bobby = new Person('Bobby', 26);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  var Person = function(name, age) {
  	this.name = name;
  	this.age = age;
  	this.sayName = function() {
  		alert(this.name);
  	}
  }
