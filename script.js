function clr(){
    document.getElementById("display").value="";
}
function del(){
    document.getElementById('display').value=document.getElementById('display').value.slice(0,-1); 
}
function equal(){
    let x = document.getElementById("display").value;
    let y= eval(x);
    document.getElementById("display").value=y;
}