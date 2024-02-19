let x = prompt("enter string");

if( !isNaN(x) ){
alert("enter string only");
location.reload();
}
else{

    let flag = 0 ;
    var result = window.confirm("case sens ?? ");
    if (result === true) {
        for(let i =0 ; i < x.length/2 ; i++){
            if(x[i] === x[x.length -1 - i]){
                flag = 1 ; 
            }
            else{
                alert("not bal");
                flag =0 ; 
                break;
            }
        }
        if(flag){
            alert("bal");
        }
    } else {
        x = x.toLocaleLowerCase() ;
        for(let i =0 ; i < x.length/2 ; i++){
            if(x[i] === x[x.length -1 - i]){
                flag = 1 ; 
            }
            else{
                alert("not bal");
                flag =0 ; 
                break;
            }
        }
        if(flag){
            alert("bal");
        }
    }
}