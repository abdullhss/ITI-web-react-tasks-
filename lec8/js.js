let xml = new XMLHttpRequest() ;
let data ;
xml.open("GET" , "./data.json" );
xml.onreadystatechange = ()=>{
    if(xml.readyState == 4 ){
        if(xml.status >= 200 && xml.status < 300){
            data = JSON.parse(xml.responseText) ;
        }
    }
}
xml.send() ;
let band = document.getElementById("band");
setTimeout(() => {

    let counter =1 ;
    for(let val in data){
        document.getElementById(`${counter}`).innerText = val ;
        counter ++ ;
    }
    let members = document.getElementById("members") ;
    let bandName 
    band.onclick = () => {
        members.innerHTML=``
        let counter2 =1 ;
        bandName = band.options[band.selectedIndex].innerText ;
        for(let val in data[bandName]){

                //console.log(data[bandName]);
                let option = document.createElement("option")
                option.text = data[bandName][val].name;
                members.appendChild(option);
                counter2++ ;
        }
    }
    members.onclick = ()=>{
        
        let link = members.options[members.selectedIndex];
        
        for(let val in data[bandName]){

            link = data[bandName][val].value
        }
        window.location.href = link
        
    }
    
} , 200)