let next = document.getElementById("next");
let slide = document.getElementById("slide");
let stop = document.getElementById("stop");
let pre = document.getElementById("pre");
let now = document.getElementById("now");
index = 1 ;
function nextfn() {
    if(index < 4 ){
        index++;
    }
    now.src = `${index}.jpg` ;
}
function prefn() {
    if(index > 1 ){
        index--;
    }
    now.src = `${index}.jpg` ;
}
var x
function slidefn(flag) {
    if(flag == 1){
    x = setInterval(() => {
        now.src = `${index}.jpg` ;
        if(index == 4){
            index = 0 ;
        }
        index++ ;
    } , 500) ; 
    }
    if(flag == 0){
        clearInterval(x);
    }    
}
