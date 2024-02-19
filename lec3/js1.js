var sum = 0 ;
let x ;



for(let i =0 ; true ; i++){
    x = prompt("Please enter a number");
    if( !isNaN(x) ){
        if(x == 0){
            alert(`the summtion = ${sum} `);
            break;
        }
        sum += parseInt(x) ;
    }
    else{
        alert("ENTER NUMBER PLEASE !!! ") ;
    }
}