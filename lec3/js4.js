let counter = 0 ;
let string = prompt("enter string");
for(let i=0 ; i < string.length ; i++){
    if(string[i] == 'e'){
        counter++;
    }
}
alert(`e rebeted ${counter} times `);