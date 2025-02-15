
let vidaActual1=4;
let vidaActual2=4;
let pelea=[];
let clicks=[];
let estados=[];
let estado='';
function inicial(){
    let vida1=document.querySelector(".vidaj1");    
    vida1.innerText=vidaActual1;
    let vida2=document.querySelector(".vidaj2");
    vida2.innerText=vidaActual2;
}

function peleador1(event){    
    let peleador=50;
    pelea.push(peleador);   
    clicks.push(miFuncion(event));
    estado='peleador 1'
    estados.push(estado);
    
}
function peleador2(event){
    
    let peleador=100;
    pelea.push(peleador);     
    clicks.push(miFuncion(event));   
    estado='peleador 2'
    estados.push(estado);
   
}
function peleador3(event){
   
    let peleador=150;
    pelea.push(peleador);    
    clicks.push(miFuncion(event));   
    estado='peleador 3'
    estados.push(estado);
    
}
function peleador4(event){
   
    let peleador=200;
    pelea.push(peleador);     
    clicks.push(miFuncion(event));   
    estado='peleador 4'
    estados.push(estado);
   
}
function jugar(){
let winner=document.querySelector(".winner");
   if(clicks[0]=='btnj1'){       
       let resJugador1=document.querySelector(".respJugador1");
        resJugador1.innerText=`El jugador 1 eligio ${estados[0]} con un poder de ${pelea[0]}`;
       
       let resJugador2=document.querySelector(".respJugador2");
        resJugador2.innerText=`El jugador 2 eligio ${estados[1]} con un poder de ${pelea[1]}`
       
       
       if(pelea[0]>pelea[1]){           
            winner.innerText="El jugador 1 es el ganador"
       }else if (pelea[0]<pelea[1]){
        winner.innerText="El jugador 2 es el ganador"
       }else{
        winner.innerText="Empataron"
       }
   }else{
    let resJugador1=document.querySelector(".respJugador1");
        resJugador1.innerText=`El jugador 1 eligio ${estados[1]} con un poder de ${pelea[1]}`;
       
       let resJugador2=document.querySelector(".respJugador2");
        resJugador2.innerText=`El jugador 2 eligio ${estados[0]} con un poder de ${pelea[0]}`
        if(pelea[1]>pelea[0]){           
            winner.innerText="El jugador 1 es el ganador"
       }else if (pelea[1]<pelea[0]){
        winner.innerText="El jugador 2 es el ganador"
       }else{
        winner.innerText="Empataron"
       }
   }

    
}
function miFuncion(event) {
    console.log(event); // Verifica si event está definido
    let botonPresionado = event.target.classList.value; 
   return botonPresionado;
}

inicial();