// Ejercicio 1: Contador de números pares
function contadorDePares() {
    const inicio = parseInt(document.getElementById('rangoInicio').value);
    const final = parseInt(document.getElementById('rangoFinal').value);
    let contador = 0;
    for (let i = inicio; i <= final; i++) {
        if (i % 2 === 0) {
            contador++;
            }
    }
    document.getElementById('resultado').innerText = `Cantidad de números pares: ${contador}`;
}

// Ejercicio 2: Conversor de temperatura
function convertirTemperature() {
    const opcion = document.getElementById('opcionConversion').value;
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultado;
    if (opcion === 'celsiusAFahrenheit') {
        resultado = (temperatura * 9/5) + 32;
        document.getElementById('resultadoTemperatura').innerText = `${temperatura}°C = ${resultado}°F`;
    } else {
        resultado = (temperatura - 32) * 5/9;
        document.getElementById('resultadoTemperatura').innerText = `${temperatura}°F = ${resultado}°C`;
    }
}

// Ejercicio 3: Adivina el número

    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    function adivinar(){
        const usuario = parseInt(document.getElementById('intento').value);
        const pista = document.getElementById('pista');

        if(isNaN(usuario) || usuario < 1 || usuario > 100){
            pista.innerText = "Por favor, introduce un número válido entre 1 y 100."
        } else if(usuario === numeroRandom){
            pista.innerText = "¡Felicidades! Has acertado";
        } else if (usuario < numeroRandom){
            pista.innerText = "¡Muy bajo! Prueba otra vez";
        } else{
            pista.innerText = "¡Muy alto! Prueba otra vez";
        }
    }

// Ejercicio 4: Cambiar el color de la pantalla
function cambiarColorPantalla() {
    const color = document.getElementById('color').value;
    document.body.style.backgroundColor = color;
}

// Ejercicio 5: Usuario y contraseña
function loguearse() {
    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;

    if (usuario === "goku" && contrasenia === "Vegeta777") {
        alert("¡Bienvenido!");
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
// Ejercicio 6: Verificador de números primos
function verificarPrimo() {
    const numero = parseInt(document.getElementById('introducirNumero').value);

    if (numero <= 1 || isNaN(numero)) {
        document.getElementById('resultado').innerText = "Por favor, ingresa un número válido mayor que 1.";
        return;
    }

    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        document.getElementById('resultado').innerText = `${numero} es un número primo.`;
    } else {
        document.getElementById('resultado').innerText = `${numero} no es un número primo.`;
    }
}
// Ejercicio 7: Generador de secuencia de Fibonacci
function secuenciaFibonacci() {
    const terminos = parseInt(document.getElementById('terminos').value);

    if (terminos <= 0 || isNaN(terminos)) {
        document.getElementById('fibonacci').innerText = "Por favor, ingresa un número válido mayor que 0.";
        return;
    }

    let secuencia = "Secuencia de Fibonacci: ";
    let numero1 = 0;
    let numero2 = 1;

    for (let i = 0; i < terminos; i++) {
        secuencia += numero1 + ", ";
        const contador = numero1 + numero2;
        numero1 = numero2;
        numero2 = contador;
    }

    document.getElementById('fibonacci').innerText = secuencia;
}