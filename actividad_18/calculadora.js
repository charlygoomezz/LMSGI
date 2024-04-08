function sumar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let suma = numero1 + numero2
    document.getElementById("resultado").value = suma;
    return suma;
}

  function restar(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resta = numero1 - numero2
    document.getElementById("resultado").value = resta;
    return resta;
  }

  function multiplicar(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let multiplicacion = numero1 * numero2
    document.getElementById("resultado").value = multiplicacion;
    return multiplicacion;
  }

  function dividir(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let division = numero1 / numero2
    document.getElementById("resultado").value = division;
    return division;
  }