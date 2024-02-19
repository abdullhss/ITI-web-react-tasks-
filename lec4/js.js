function task1() {
    let n = prompt("enter size of arr");
let a =0 , b =1 ;
let arr = [];
for(let i =0 ; i < n ; i++){
    let x = prompt("enter number");
    arr.push(x);
    if(arr[n-1] == 0){
        alert("Error : cuz 0 ")
        i-- ;
    }
}
let c= arr[0] ;
for(let i =0 ; i < n ; i++){
    a+= parseInt(arr[i]) ;
    b *= parseInt(arr[i]) ;
}
for(let i =1 ; i < n ; i++){
    c /= arr[1] ;
}
document.write(`<h1>sum ${a} </h1>`);
document.write(`<h1>multiplication ${b} </h1>`);
document.write(`<h1>division ${c} </h1>`);
}

function task2() {
    let n = prompt("enter size of arr");
    let arr = [];
    for(let i =0 ; i < n ; i++){
    let x = prompt("enter number");
    arr.push(x);
    }
    arr = arr.sort(function (a, b) {  return a - b;  });
    console.log(arr);
}

function task3(){
    
    var r = parseFloat(prompt("Enter the radius",0));
    
        var area = (r * r * Math.PI);
        console.log(area);
}
function root() {
    var n = parseFloat(prompt("Enter number",0));
    
    console.log(Math.pow(n, 1/2));
}

function cos(){
    var degree = parseFloat(prompt("Enter degree",0));
    console.log(Math.cos(degree * Math.PI / 180));
}

function W(){
        var win , lastr , lastl; 
        if(win!= undefined){
            win.close()
            }
            win = open("index2.html","_blank","width=200,height=200")
            let interval = setInterval(()=>{
                win.moveBy(100,100)
                lastl = window.screenX ;
                lastr = window.screenY ;
            } , 1000);
            
    
    // function stop(){
    // clearInterval(interval) ;
    // }
}
function W1(){
    let x = "test";
    let index = 0 ;
    win = open("index2.html","_blank","width=200,height=200")

    let re = setInterval(() => {
        win.window.document.write(`<span>${x[index]}</span>`);
        if(index == x.length - 1){
            clearInterval(re) ;
        }
        index++ ;
    } , 500)

}
