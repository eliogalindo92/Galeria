// JavaScript Document
function cant_elem(){
	for(var i=0; i<4; i++){
	var elementos = document.querySelectorAll(".menu");
	elementos[i].onclick=mensaje;
}
}
function mensaje(){
	alert("Mensaje");
}

window.onload=cant_elem;