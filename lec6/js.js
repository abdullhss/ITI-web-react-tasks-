let expires  = undefined;

function save(){


let name = document.getElementById("name").value
let age = document.getElementById("age").value
let color = document.getElementById("color").value;
let gender 
var genders = document.getElementsByName('gender');
let counter = 1 ;
for (var i = 0, length = genders.length; i < length; i++) {
  if (genders[i].checked) {
    gender = genders[i].value
    break;
  }
}
createCookie("name",name ,expires ) ;
createCookie("age",age,expires) ;
createCookie("gender",gender,expires) ;
createCookie("color",color,expires) ;
createCookie("counter", counter ,expires) ;

window.location.href="./index2.html" ;
}




function createCookie(key,value,expires){
    if(expires == undefined){
        document.cookie = key+"="+value
    }
    else{
        var date = new Date()
        date.setMonth(date.getMonth()+expires)
        document.cookie = key+"="+value+";expires="+date.toUTCString()
    }
}


function getAllCookies(){
    var data = document.cookie.split('; ')
    var dataList = []
    for(var i =0;i<data.length;i++){
        var key = data[i].split('=')[0]
        var value = data[i].split('=')[1]
        dataList[key] = value
    }
    return dataList
}

function deleteCookie(key){
    var date = new Date()
    date.setMonth(date.getMonth()-1)
    document.cookie = key+"=;expires="+date.toUTCString()
    // createCookie(key,"",-1)
}




let img = document.getElementById("img");

if(img.src = getAllCookies()["gender"] == "male"){
  img.src = "1.jpg"; 
}
else{
  img.src = "2.jpg"; 
}
let n = getAllCookies()["name"] ;
let na = document.getElementById("name");
na.innerText = n ;

na.style.color = getAllCookies()["color"]

let counter = parseInt( getAllCookies()["counter"] );

deleteCookie("counter")

counter = parseInt(counter + 1); 

createCookie("counter" , counter , expires);

let num = document.getElementById("num");
num.innerText = counter ;
num.style.color =  getAllCookies()["color"]