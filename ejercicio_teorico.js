/*
Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

function operacion (num1, num2, num3, num4) {
    var primeras2 = num1 + num2;
    var ultimas2 = num3 + num4;  
    var resultado = primeras2 * ultimas2;
    if (resultado > 50){
      console.log("¡El número es mayor que 50!")
    } else {
      console.log("¡El número es menor (o igual) que 50!");
    }
  }
  
  console.log ("Prueba 1:")
  operacion(1,2,3,4)
  console.log ("Prueba 2:")
  operacion(1,2,3,40)
  console.log ("Prueba 3:")
  operacion(0,1,1,49)