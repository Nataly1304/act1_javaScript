//  aca se le pide al ususario que ingrese su año de nacimiento 
nacimiento=parseInt(prompt("Por favor ingresa tu año de nacimiento"))
// aca se obtiene la fecha actual del usuario.
const fecha = new Date(); // Se obtiene la fecha actual usando el objeto Date.
const fechaActual =fecha.getFullYear();
// en esta linea se calcula la edad restando el año de nacimiento del año actual.
let edad=fechaActual-nacimiento;

// aca se le pide al usuario que ingrese el nombre  
var nombres=prompt("ingrese tu nombre");
//var edad=parseInt(prompt("ingrese la edad"));
//document.write("bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad")

// aca se comprueba la edad y muestra un mensaje según la edad.
if(edad <=8){
    document.write("bienvenido niño "+nombres+" usted tiene "+edad+" años de edad y eres un niño") 
}

 else if(edad<=8 && edad>=17){
    document.write("bienvenido joven "+nombres+" usted tiene "+edad+" años de edad y eres un joven") 
}

else{
    document.write("bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad y es mayor de edad") 
}  
