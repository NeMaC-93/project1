var rez=0;
var y=null;
var op="";
var check_operator=false;
var check_zarez=false;
function prikaz(num_arg){
	if(op!=""){
		if(check_operator==true){
		document.getElementById('res').value="";
		document.getElementById('res').value+=num_arg;
		y=parseFloat(document.getElementById('res').value,10);
		check_operator=false;
	    check_zarez=false;
		}else{
		document.getElementById('res').value+=num_arg;
		y=parseFloat(document.getElementById('res').value,10);
		}
	}else{
		var temp = document.getElementById('res').value+=num_arg;
		document.getElementById('res').value = parseFloat(temp);
		rez=parseFloat(document.getElementById('res').value,10);
	}
}
function brisanje(){
	document.getElementById('res').value=0;
	check_operator=false;
	check_zarez=false;
	rez=0;
	y=null;
	op="";
}
function akcija(akcija_arg){
	rezultat();
	op= akcija_arg;
	check_operator=true;
}
function rezultat(){
	if(rez!==null && y!==null){
		switch(op){
		case "sabiranje":
		document.getElementById('res').value=eval("rez+y");
		rez=parseFloat(document.getElementById('res').value,10);
		y=null;
		(rez%1!=0) ? check_zarez=true : check_zarez=false;
		break;
		case "oduzimanje":
		document.getElementById('res').value=eval("rez-y");
		rez=parseFloat(document.getElementById('res').value,10);
		y=null;
		(rez%1!=0) ? check_zarez=true : check_zarez=false;
		break;
		case "mnozenje":
		document.getElementById('res').value=eval("rez*y");
		rez=parseFloat(document.getElementById('res').value,10);
		y=null;
		(rez%1!=0) ? check_zarez=true : check_zarez=false;
		break;
		case "deljenje":
		document.getElementById('res').value=eval("rez/y");
		rez=parseFloat(document.getElementById('res').value,10);
		y=null;
		(rez%1!=0) ? check_zarez=true : check_zarez=false;
		break;
		}
	}
}
function zarez(){
	if(check_zarez==false){
		document.getElementById('res').value+=".";
		check_zarez = true;
	}
}
function koren(){
	var koren_arg = document.getElementById('res').value;
	document.getElementById('res').value=Math.sqrt(koren_arg);
	rez = document.getElementById('res').value;
	(rez%1!=0) ? check_zarez=true : check_zarez=false;
}
function kvadrat(){
	var kvadrat_arg = document.getElementById('res').value;
	document.getElementById('res').value=Math.pow(kvadrat_arg,2);
	rez = document.getElementById('res').value;
	(rez%1!=0) ? check_zarez=true : check_zarez=false;
}
function kub(){
	var kub_arg = document.getElementById('res').value;
	document.getElementById('res').value=Math.pow(kub_arg,3);
	rez = document.getElementById('res').value;
	(rez%1!=0) ? check_zarez=true : check_zarez=false;
}