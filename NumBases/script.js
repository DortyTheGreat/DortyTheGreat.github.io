
function parseBigInt(strin, base){
	let ret = 0n;
	let powers = 1n;
	for(let i = strin.length - 1; i > -1; --i){
		ret += BigInt(parseInt(strin[i],base)) * powers;
		powers *= BigInt(base);
	}
	return ret;
}

function Bobbi(){
	let from_base = parseInt(document.getElementById("from_base").value,10);
	let to_base = parseInt(document.getElementById("to_base").value,10);
	let num = parseBigInt(document.getElementById("num").value,from_base);
	document.getElementById("res").value = num.toString(to_base);
}

from_base.oninput = Bobbi;
to_base.oninput = Bobbi;
num.oninput = Bobbi;

//setInterval(Bobbi,1000);
