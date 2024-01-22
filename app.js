let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;   
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroDeUsuario === numeroSecreto) {
          asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
          document.getElementById('reiniciar').removeAttribute('disabled');
    }    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor')        
        } else {
            asignarTextoElemento('p', 'El número es mayor')
        }
        intentos++;
        limpiarcaja();
            
        
    }
    return;

}
function limpiarcaja() {
  document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGernerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }

    if (listaNumerosSorteados.includes(numeroGernerado)) {
        return generarNumeroSecreto;
    } else {
        listaNumerosSorteados.push(numeroGernerado);
        return numeroGernerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juegazo del número oculto');
    asignarTextoElemento('p', `Indica un número del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    limpiarcaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disable','true')
   
}

condicionesIniciales()


