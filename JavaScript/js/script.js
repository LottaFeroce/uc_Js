let btn_liga = document.querySelector('#on-off');
let lampada = document.querySelector('#lamp')

btn_liga.addEventListener('click',function(){
    //console.log("test")
    if(lampada.src.match("lampada_lig")){
       lampada.src="./img/lampada_deslig.jpg";
    }else{
        lampada.src="./img/lampada_lig.jpg"
    }
})