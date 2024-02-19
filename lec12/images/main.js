var timerId;
document.getElementById('startBtn').addEventListener('click',function(){
    var i=0;
    timerId = setInterval(function(){
        i++;
        document.getElementById('s1').innerHTML+=","+i;
    },1000)
})
document.getElementById('stopBtn').addEventListener('click',function(){
    clearInterval(timerId)
})
var myWorker = new Worker('worker.js')
document.getElementById('addBtn').addEventListener('click',function(){
    var val1=parseInt(document.getElementById('txt1').value)
    var val2=parseInt(document.getElementById('txt2').value)
    myWorker.postMessage([val1,val2])
})
myWorker.onmessage=function(evt){
    document.getElementById('s2').innerHTML=evt.data[0]
    myWorker.terminate()
}