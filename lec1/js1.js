let parametrs = window.location.search ;
let data = new URLSearchParams(parametrs) ;
let name = data.get("name");
let gender = data.get("male");
if(data.get("male") == "male"){
gender = "male" ;
}
else{
    gender = "female" ; 
}
let email = data.get("email");
let p = document.getElementById("data");
let final = `name = ${name} , email = ${email} , gender = ${gender}` ;
p.innerText = final;