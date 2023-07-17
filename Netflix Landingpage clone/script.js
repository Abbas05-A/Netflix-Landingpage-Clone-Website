var question = document.querySelectorAll(".question")

question.forEach(function(Question) {
  Question.onclick=function (){
      Question.classList.toggle("open")
  }
})

var Emailfield = document.getElementsByClassName('email-field');
var Emaillabel = document.getElementsByClassName('email-label');
var Emailerror = document.getElementsByClassName('email-error');
var Cancelym =document.getElementsByClassName('material-symbols-outlined');
var Demo = document.getElementsByClassName('demo');

function validate(){
  Emaillabel[0].style.bottom ="34px";
  Emaillabel[0].style.fontSize = "12px";
  Emailfield[0].style.outline = "2px solid white";
}

function validated(){
  Emaillabel[1].style.bottom ="34px";
  Emaillabel[1].style.fontSize = "12px";
  Emailfield[1].style.outline = "2px solid white";
}

function validateEmail(){
  if(!Emailfield[0].value.match(/^[A-Za-z\_\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      Cancelym[0].innerHTML = 'cancel'
      Emailerror[0].innerHTML = 'please enter a valid email address';
      Emailerror[0].style.color = "red";
      Emailfield[0].style.borderColor = "red";
      Emailfield[0].style.outline = "none";
      return false
  }
  else
  {
      Cancelym[0].innerHTML = '';
      Emailerror[0].innerHTML = '';
      Emailfield[0].style.borderColor = "rgb(43, 184, 113)"
      Emailfield[0].style.backgroundColor = "rgba(70, 90, 126, 0.4)";
      Emailfield[0].style.outline = "none";
      return
  }
}
function validateEmail1(){
  if(!Emailfield[1].value.match(/^[A-Za-z\_\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      Cancelym[1].innerHTML = 'cancel';
      Emailerror[1].innerHTML = 'please enter a valid email address';
      Emailerror[1].style.color = "red";
      Emailfield[1].style.borderColor = "red";
      Emailfield[1].style.outline = "none";
      return false
  }
  else
  {
      Emailerror[1].innerHTML = '';
      Cancelym[1].innerHTML = '';
      Emailfield[1].style.borderColor = "rgb(43, 184, 113)"
      Emailfield[1].style.backgroundColor = "rgba(70, 90, 126, 0.4)";
      Emailfield[1].style.outline = "none";
  return
  }
}