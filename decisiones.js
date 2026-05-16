function calcularVoto(){

let edad=parseInt(document.getElementById("edad").value);

if(edad>=18){
document.getElementById("resultado").innerHTML="Puede votar";
}else{
document.getElementById("resultado").innerHTML="No puede votar";
}

}

function calcularSueldo(){

let horas=parseFloat(document.getElementById("horas").value);
let pago=parseFloat(document.getElementById("pago").value);

let sueldo=0;

if(horas<=40){
sueldo=horas*pago;
}else{
let extras=horas-40;
sueldo=(40*pago)+(extras*(pago*2));
}

document.getElementById("resultado").innerHTML=
"Sueldo semanal: $"+sueldo;

}

function calcularRegalo(){

let dinero=parseFloat(document.getElementById("dinero").value);

if(dinero<=10){
document.getElementById("resultado").innerHTML="Regalo: Tarjeta";
}else if(dinero<=100){
document.getElementById("resultado").innerHTML="Regalo: Chocolates";
}else if(dinero<=250){
document.getElementById("resultado").innerHTML="Regalo: Flores";
}else{
document.getElementById("resultado").innerHTML="Regalo: Anillo";
}

}

function calcularEstacionamiento(){

let horas=parseInt(document.getElementById("horas").value);

let total=0;

if(horas<=2){
total=horas*5;
}else if(horas<=5){
total=(2*5)+((horas-2)*4);
}else if(horas<=10){
total=(2*5)+(3*4)+((horas-5)*3);
}else{
total=(2*5)+(3*4)+(5*3)+((horas-10)*2);
}

document.getElementById("resultado").innerHTML=
"Total: $"+total;

}

function calcularMenor(){

let nombre1=document.getElementById("nombre1").value;
let edad1=parseInt(document.getElementById("edad1").value);

let nombre2=document.getElementById("nombre2").value;
let edad2=parseInt(document.getElementById("edad2").value);

let nombre3=document.getElementById("nombre3").value;
let edad3=parseInt(document.getElementById("edad3").value);

let menorNombre=nombre1;
let menorEdad=edad1;

if(edad2<menorEdad){
menorEdad=edad2;
menorNombre=nombre2;
}

if(edad3<menorEdad){
menorEdad=edad3;
menorNombre=nombre3;
}

document.getElementById("resultado").innerHTML=
"Menor: "+menorNombre+" - "+menorEdad+" años";

}

function calcularDescuento(){

let precio=parseFloat(document.getElementById("precio").value);

let descuento=0;

if(precio>=200){
descuento=precio*0.15;
}else if(precio>100){
descuento=precio*0.12;
}else{
descuento=precio*0.10;
}

let total=precio-descuento;

document.getElementById("resultado").innerHTML=
"Descuento: $"+descuento+
"<br>Total: $"+total;

}

function calcularBeca(){

let edad=parseInt(document.getElementById("edad").value);
let promedio=parseFloat(document.getElementById("promedio").value);

let beca="";

if(edad>18){

if(promedio>=9){
beca="$2000";
}else if(promedio>=7.5){
beca="$1000";
}else if(promedio>=6){
beca="$500";
}else{
beca="Carta de invitación";
}

}else{

if(promedio>=9){
beca="$3000";
}else if(promedio>=8){
beca="$2000";
}else if(promedio>=6){
beca="$100";
}else{
beca="Carta de invitación";
}

}

document.getElementById("resultado").innerHTML=
"Beca: "+beca;

}

function calcularBono(){

let antiguedad=parseInt(document.getElementById("antiguedad").value);
let sueldo=parseFloat(document.getElementById("sueldo").value);

let bono1=0;
let bono2=0;

if(antiguedad>2 && antiguedad<5){
bono1=sueldo*0.20;
}else if(antiguedad>=5){
bono1=sueldo*0.30;
}

if(sueldo<1000){
bono2=sueldo*0.25;
}else if(sueldo<=3500){
bono2=sueldo*0.15;
}else{
bono2=sueldo*0.10;
}

let bono=Math.max(bono1,bono2);

document.getElementById("resultado").innerHTML=
"Bono mayor: $"+bono;

}

function calcularPoliza(){

let tipo=document.getElementById("tipo").value;

let alcohol=document.getElementById("alcohol").checked;
let lentes=document.getElementById("lentes").checked;
let enfermedad=document.getElementById("enfermedad").checked;

let edad=parseInt(document.getElementById("edad").value);

let base=0;

if(tipo=="A"){
base=1200;
}else{
base=950;
}

if(alcohol){
base+=base*0.10;
}

if(lentes){
base+=base*0.05;
}

if(enfermedad){
base+=base*0.05;
}

if(edad>40){
base+=base*0.20;
}else{
base+=base*0.10;
}

document.getElementById("resultado").innerHTML=
"Póliza: $"+base;

}

function calcularVacaciones(){

let dinero=parseFloat(document.getElementById("dinero").value);
let costo=parseFloat(document.getElementById("costo").value);

let mexico=750*costo*2;
let pv=800*costo*2;
let acapulco=1200*costo*2;
let cancun=1800*costo*2;

let destino="Quedarse en casa";

if(dinero>=cancun){
destino="Cancún";
}else if(dinero>=acapulco){
destino="Acapulco";
}else if(dinero>=pv){
destino="Puerto Vallarta";
}else if(dinero>=mexico){
destino="México";
}

document.getElementById("resultado").innerHTML=
"Destino: "+destino;

}

function calcularAntiguedad(){

let anios=parseInt(document.getElementById("anios").value);

let bono=0;

if(anios>5){
bono=1000;
}else{
bono=anios*100;
}

document.getElementById("resultado").innerHTML=
"Bono: $"+bono;

}

function calcularSueldo2(){

let horas=parseInt(document.getElementById("horas").value);
let pago=parseFloat(document.getElementById("pago").value);

let sueldo=0;

if(horas<=40){

sueldo=horas*pago;

}else if(horas<=45){

sueldo=(40*pago)+((horas-40)*(pago*2));

}else if(horas<=50){

sueldo=(40*pago)+(5*(pago*2))+((horas-45)*(pago*3));

}else{

document.getElementById("resultado").innerHTML=
"No permitido";

return;

}

document.getElementById("resultado").innerHTML=
"Sueldo: $"+sueldo;

}

function calcularViaje(){

let alumnos=parseInt(document.getElementById("alumnos").value);

let costo=0;

if(alumnos>100){
costo=20;
}else if(alumnos>=50){
costo=35;
}else if(alumnos>=20){
costo=40;
}else{
costo=70;
}

let total=alumnos*costo;

document.getElementById("resultado").innerHTML=
"Costo por alumno: $"+costo+
"<br>Total: $"+total;

}