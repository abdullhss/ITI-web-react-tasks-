importScripts('script.js')
onmessage=function(e){
    var result=add(e.data[0],e.data[1])

    this.postMessage([result])
    //this.close()
}