
function insert(num){
    window.document.getElementById('resultado-display').innerHTML += num
}
function apagar(){
    window.document.getElementById('resultado-total').innerHTML = ''
    window.document.getElementById('resultado-display').innerHTML = ''
}
function apagarum(){
    var resp = window.document.getElementById('resultado-display').innerHTML
    window.document.getElementById('resultado-display').innerHTML = resp.substring(0, resp.length -1)
}
function resp(){
   var resul = window.document.getElementById('resultado-display').innerHTML
   if(resul){
        window.document.getElementById('resultado-total').innerHTML = eval(resul)
   }
   else{
    window.document.getElementById('resultado-display').innerHTML = ''  
   }
}