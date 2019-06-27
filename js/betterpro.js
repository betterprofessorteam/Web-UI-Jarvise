var signupbtn = document.querySelector("btn_getStarted");
signupbtn.addEventListener('mouseleave', function(event){
  event.target.style.color = 'none';
});

var signupbtn2 = document.querySelector("btn_getStarted");
signupbtn2.addEventListener('mouseenter', function(event){
  event.target.style.color = '2px solid red';
});