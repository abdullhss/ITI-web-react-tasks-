let first
let secound
let operation
let flag = 0
function EnterNumber(val){
    if(flag == 0){
        first = parseInt( val) ;
        flag =1 ;
    }
    else{
        secound = parseInt(val) 
    }
}
function EnterClear(){
    document.getElementById("Answer").value = "" ;
}
function EnterOperator(val){
    operation = val ;
}
function EnterEqual() {
    if(operation == '+'){
        document.getElementById("Answer").value = first + secound
    }
    else if(operation == '-'){
        document.getElementById("Answer").value = first - secound
    }
    else if(operation == '*'){
        document.getElementById("Answer").value = first * secound
    }
    else if(operation == '/'){
        if(secound != 0){
            document.getElementById("Answer").value = first / secound
        }
        else{
            document.getElementById("Answer").value ="Error 0 !!"
        }
    }
}