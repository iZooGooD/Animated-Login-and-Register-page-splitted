document.querySelector("#register").addEventListener("click",openregform)
function openregform(){
  document.querySelector(".register-form").style.display="flex";
  document.querySelector(".login-form").style.display="none";
  document.querySelector("#register").className="active"
  document.querySelector("#login").className=""
  

}
document.querySelector("#login").addEventListener("click",openlogform)
function openlogform(){
  document.querySelector(".register-form").style.display="none";
  document.querySelector(".login-form").style.display="flex";
  document.querySelector("#register").className=""
  document.querySelector("#login").className="active"

}