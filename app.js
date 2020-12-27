// this is my fist js file
console.log("turkey");
console.log("This page has been built by Farhan Ayyash");
var x = 0 ;
x = check(x,'What is your First Name ?');
var xx = 0 ;
xx = check(xx,'What is your Last Name ?');
function check(x, y ){
  while (x == "" || x == null || x == undefined || x == 0){
      x = prompt(y);
  }
  return x;
}
var yy ;
yy = prompt('How many photos do you want?');

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
document.write('<p>Hello <b>'+ x +" "+ xx +'</b>, '+ greeting + '</p>')


var cc = "";
for (i =0 ; i < yy ; i++){
  cc =cc + '<img style="width:500px; height:auto ;margin:0 0 0 200px;" src="https://www.conexioconsulting.com/wp-content/uploads/2017/11/17-INTERESTING-FACTS-ABOUT-TURKEY.jpg" alt="photo about turkey">'+'<h1 style="margin:-50px 0 0 900px;">'+(i+1)+'</h1>'+'<br>'  ;  
}
document.write(cc)
  

function myFunction() {
    alert(x +" will go to another page, Good Bye!");
  }
var c = ""
function myFunction2() {
  y = prompt('How many photos do you want?');
  for (i =0 ; i < y ; i++){
    console.log(i)
    c =c + '<img style="width:500px; height:auto ;margin:0 0 0 200px;" src="https://www.conexioconsulting.com/wp-content/uploads/2017/11/17-INTERESTING-FACTS-ABOUT-TURKEY.jpg" alt="photo about turkey">'+'<h1 style="margin:-50px 0 0 900px;">'+(i+1)+'</h1>'+'<br>'  ;  
  }
  var result_display = document.getElementById('result');
  result_display.innerHTML = c;
}