// this is my fist js file
console.log("turkey");
console.log("This page has been built by Farhan Ayyash");
var x;
x = prompt('what is you name?');
var today= new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
  greeting= 'Good evening!';
} else if (hourNow > 12) {
greeting = ' Good afternoon!';
} else if (hourNow > 0) {
greeting = 'Good morning!';
} else {
greeting = 'Welcome! ' ;
}
document.write('<p>Hello <b>'+ x +'</b>, '+ greeting + '</p>')
function myFunction() {
    alert(x +" will go to another page, Good Bye!");
  }