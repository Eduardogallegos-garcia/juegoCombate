
let vidaActual1=4;
let vidaActual2=4;
let pelea=[];
let clicks=[];
let estado='';
function inicial(){
    let vida1=document.querySelector(".vidaj1");    
    vida1.innerText=vidaActual1;
    let vida2=document.querySelector(".vidaj2");
    vida2.innerText=vidaActual2;
}

function peleador1(event){
    alert("desde peleadorr 1")
    let peleador=50;
    pelea.push(peleador);    
    console.log(pelea)  
    clicks.push(miFuncion(event));
    console.log(clicks);
    estado='peleador 1'
}
function jugar(){
    let jugador1=0;
    let jugador2=0;
   if(clicks[0]=='btnj1'){
       jugador1=pelea[0];  
       let resJugador1=document.querySelector(".respJugador1");
        resJugador1.innerText=`El jugador 1 eligio ${estado} con un poder de ${jugador1}`;
       jugador2=pelea[1];
       let resJugador2=document.querySelector(".respJugador2");
        resJugador2.innerText=`El jugador 2 eligio ${estado} con un poder de ${jugador2}`
       console.log("presiono primero j1"+jugador1);
       console.log(jugador2);
   }else{
    jugador1=pelea[1];
    jugador2=pelea[0];
    console.log("presiono segundo "+jugador1);
    console.log(jugador2);
   }
    
}
function miFuncion(event) {
    console.log(event); // Verifica si event está definido
    let botonPresionado = event.target.classList.value; 
   return botonPresionado;
}

inicial();