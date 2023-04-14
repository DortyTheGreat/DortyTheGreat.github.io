function Bobbi(){
	let huh2 = parseInt(document.getElementById("In2").value,10);
	let huh = parseInt(document.getElementById("In1").value,huh2);
	let huh3 = parseInt(document.getElementById("In3").value,10);
	document.getElementById("In4").value = huh.toString(huh3);
}

In1.oninput = Bobbi;
In2.oninput = Bobbi;
In3.oninput = Bobbi;

//setInterval(Bobbi,1000);
