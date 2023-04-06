function Bobbi(){
	let huh2 = parseInt(document.getElementById("In2").value,10);
	let huh = parseInt(document.getElementById("In1").value,10);
	
	if (document.getElementById("CheckBox1").checked){
		document.getElementById("In3").value = huh+huh2;
	}
	
	if (document.getElementById("CheckBox2").checked){
		document.getElementById("In3").value = huh-huh2;
	}
	
	if (document.getElementById("CheckBox3").checked){
		document.getElementById("In3").value = huh*huh2;
	}
	
	if (document.getElementById("CheckBox4").checked){
		document.getElementById("In3").value = huh/huh2;
	}
}

In1.oninput = Bobbi;
In2.oninput = Bobbi;
CheckBox1.oninput = Bobbi;
CheckBox2.oninput = Bobbi;
CheckBox3.oninput = Bobbi;
CheckBox4.oninput = Bobbi;
//setInterval(Bobbi,1000);
