/**
 * BLOQUE 1 - Codigo sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
 /* console.log(‘============== BLOQUE 1 ==============’);
 console.log(‘Primero’); 
 console.log(‘Segundo’);
 console.log(‘Tercero’); */

 const  validatePayment = () => {
    setTimeout(() => {
        console.log('2 validando la tarjeta');
    },0); 

 }
 console.log('1 presione el boton boton de compra');
 validatePayment();
 console.log('3 ver el mensaje de "gracias joven"')