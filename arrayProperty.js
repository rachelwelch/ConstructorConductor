//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  // String.prototype.reverse = function() {
  // 	console.log(this);
  // }

  // var myStr = "Hello World";
  // myStr.speak();

  String.prototype.reverseString = function(str) {
  	console.log(str.split("").reverse().join(""));
  }

  var myStr = "string";
  myStr.reverseString(myStr);