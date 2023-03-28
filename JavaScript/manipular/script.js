let decre = document.querySelector('#decremento');
let incre = document.querySelector('#incremento')
let input_atual = document.querySelector('#atual')

var aux = input_atual.value;

incre.addEventListener('click',function(){
    //alert("test")
    aux++
    input_atual.value = aux;
    console.log(aux);
})

decre.addEventListener('click',function(){
    //alert("tset")
    if(aux>0){
    aux--
    input_atual.value = aux;
    console.log(aux)
    }else{
        aux=0;
        input_atual.value = aux;
    }
})