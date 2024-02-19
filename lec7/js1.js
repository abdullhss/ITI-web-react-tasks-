let fPic = document.getElementById("f");
let sPic = document.getElementById("s");
let tPic = document.getElementById("t");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

reset.addEventListener("click" , () => {
    fPic.style.top = "0px";
    fPic.style.left = "200px" ;
    sPic.style.top = "200px";
    sPic.style.left = "0px" ;
    tPic.style.top = "200px";
    tPic.style.left = "400px" ;
    ftop  = parseInt(getComputedStyle(fPic).top)
    tleft = parseInt(getComputedStyle(tPic).left) ;
    sleft = parseInt(getComputedStyle(sPic).left) ;
})

let x 

let sleft = parseInt(getComputedStyle(sPic).left) ;
let tleft = parseInt(getComputedStyle(tPic).left) ;
let ftop  = parseInt(getComputedStyle(fPic).top)
let f1 = true 
let f2 = true 
let f3 = true 

start.addEventListener("click" , () => {
    if(start.innerText == "start"){
        start.innerText="stop" ;
        x = setInterval( () => {
                        
            if( ftop <= 200 && f1 ){
                ftop += 10 ;
                if(ftop >= 195){
                    f1 = false ; 
                }
            }else{
                ftop -= 10 ;
                if(ftop <= 5){
                    f1 = true ; 
                }
            }
            



            if( sleft <= 200 && f2 ){
                sleft += 10 ;
                if(sleft >= 195){
                    f2 = false ; 
                }
            }else{
                sleft -= 10 ;
                if(sleft <= 5){
                    f2 = true ; 
                }
            }
            
            if( tleft >= 200 && f3 ){
                tleft -= 10 ;
                if(tleft <= 205){
                    f3 = false ; 
                }
            }else{
                tleft += 10 ;
                if(tleft >= 395){
                    f3 = true ; 
                }
            }
            



            fPic.style.top = ftop+"px";
            sPic.style.left =  sleft+"px";
            tPic.style.left = tleft+"px";
        },100)
    }
    else{
        clearInterval(x)
        start.innerText="start" ;
    }
})