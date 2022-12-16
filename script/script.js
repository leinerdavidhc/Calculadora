function numbers(valor){
    document.getElementById('display').value+=valor;
}
function operacion(){
    let op=document.getElementById('display').value;
    if(op==0){
        document.getElementById('display').value="sin operacion";
    }else{
        document.getElementById('display').value=eval(op);
    }
}

function clean(){
    document.getElementById('display').value=" ";
}

function delte(){
    let valor=document.getElementById('display').value;
    valor=valor.slice(0,-1);
    document.getElementById('display').value=valor;
}

function porcetaje(){
    let valor=document.getElementById('display').value;
    valor=(valor/100);
    document.getElementById('display').value=valor;
}


function cambioColor(){
    document.querySelector(".radioButton-circle").classList.toggle("radioButton-CircleActive");
    document.body.classList.toggle("bodyActive");
    document.querySelector(".calculadora").classList.toggle("calculadoraActive");
    document.querySelector(".bn").classList.toggle("botonActive");
    document.querySelector(".display").classList.toggle("displayActive");
}