let precio = 0
let envio = 500
let costoTotal = 0
let costoDescuento = 0
let carrito = 0


const nombre = prompt('Ingrese su nombre')
alert(`Hola ${nombre}. Bienvenido a la MONCHO`)

let articulo = prompt('Que articulo desea comprar (remera negra = 1 / remera rosa = 2 / remera verde = 3')
while(articulo != '1' && articulo != '2' && articulo != '3'){
    alert('Ese tipo de articulo no existe')
    articulo = prompt('Que articulo desea comprar (remera negra = 1 / remera rosa = 2 / remera verde = 3')
}
if(articulo == 1){
    precio = 1250
}else if(articulo == 2){
    precio = 1450
}else{
    precio = 1500
}
alert(`El precio del articulo es de ${precio}`)


let cantidad = prompt('Que cantidad de ese articulo desea comprar (compra maxima 5 unidades)')
while(cantidad != '1' && cantidad != '2' && cantidad != '3' && cantidad != '4' && cantidad != '5'){
    alert('No puede comprar ese cantidad')
    cantidad = prompt('Que cantidad de ese articulo desea comprar (compra maxima 5 unidades)')
}
if(cantidad == 1){
    carrito = precio * 1
}else if(cantidad == 2){
    carrito = precio * 2
}else if(cantidad == 3){
    carrito = precio * 3
}else if(cantidad == 4){
    carrito = precio * 4
}else{
    carrito = precio * 5
}
alert(`El costo total del carrito es de ${carrito}`)


let medioPago = prompt('Puede pagar en efectivo al recibir su compra (1) o puede pagar con tarjeta de credito (2) con 10% descuento')
while(medioPago != '1' && medioPago != '2'){
    alert('Ese medio de pago no existe, porfavor complete con "1" para pagar en efectivo, o con "2" para pagar con tarjeta de credito')
    medioPago = prompt('Porfavor complete con "1" para pagar en efectivo, o con "2" para pagar con tarjeta de credito (10% descuento)')
}
if(medioPago == 1){
    costoTotal = carrito + envio
    alert(`El costo total (articulo + envio) es de ${costoTotal}`)
}else{
    costoDescuento = carrito - (carrito*(1/10)) + envio
    alert(`El costo total con el 10% de descuento mas el envio es de ${costoDescuento} `)
}