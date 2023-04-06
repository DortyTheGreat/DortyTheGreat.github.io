function F1(){

	let huh2 = parseInt(document.getElementById("In2").value,10);
	let huh = parseInt(document.getElementById("In1").value,10);
	let DataStart = parseInt(document.getElementById("In3").value,10);
	let Bit1 = parseInt(document.getElementById("In2").value,10);
	let Herz1 = parseInt(document.getElementById("In1").value,10);
	let Type1=1;	

	let DataEnd = -1;
	let Bit2 = parseInt(document.getElementById("In12").value,10);
	let Herz2 = parseInt(document.getElementById("In11").value,10);
	let Type2 = 1;
	if (document.getElementById("CheckBox1").checked){
		Type1=1;
	}
	
	if (document.getElementById("CheckBox2").checked){
		Type1=2;
	}
	
	if (document.getElementById("CheckBox3").checked){
		Type1=3;
	}
	
	if (document.getElementById("CheckBox4").checked){
		Type1=4;
	}



	if (document.getElementById("CheckBox11").checked){
		Type2=1;
	}
	
	if (document.getElementById("CheckBox12").checked){
		Type2=2;
	}
	
	if (document.getElementById("CheckBox13").checked){
		Type2=3;
	}
	
	if (document.getElementById("CheckBox14").checked){
		Type2=4;
	}

	DataEnd = DataStart * Type2 * Herz2 * Bit2 / Type1 / Bit1 / Herz1; 



	document.getElementById("In13").value = DataEnd;
	
}

In1.oninput = F1;
In2.oninput = F1;
In3.oninput = F1;

In11.oninput = F1;
In12.oninput = F1;


CheckBox1.oninput = F1;
CheckBox2.oninput = F1;
CheckBox3.oninput = F1;
CheckBox4.oninput = F1;

CheckBox11.oninput = F1;
CheckBox12.oninput = F1;
CheckBox13.oninput = F1;
CheckBox14.oninput = F1;
//setInterval(Bobbi,1000);
