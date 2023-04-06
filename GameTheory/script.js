function F1(){
	let ANS1 = 0;
	let ANS2 = "";
	let ANS3 = "";
	
	let SizeX=300;
    	let SizeY=300;
	
    	let start = parseInt(document.getElementById("In1").value,10); 
    	let mult = parseInt(document.getElementById("In3").value,10); 
    	let add = parseInt(document.getElementById("In2").value,10);; 
    	let limit = parseInt(document.getElementById("In4").value,10);; 
    	let itter = 4;
	
	ANS1 =  Math.floor(Math.min((limit-start)/mult/mult) + !!(((limit-start)%(mult*mult))),limit - mult*mult*start);
	ANS1 =  Math.min(ANS1,limit-mult*mult*start);
	
	let Mat = [];

	for (var i = 0; i < 1500; i++) {
  	 Mat[i] = [];
	}

	for(let i = 1;i<1500;i++){
        for(let j = 1;j<1500;j++){
            if(i+j >= limit){
                Mat[i][j] = 'L';
            }else{
            Mat[i][j] = 'U';
            }
        }
       }

	
	for(let Itter = 0; Itter < itter;Itter++){
    for(let i = start;i<SizeX;i++){
        for(let j = 1;j<SizeY;j++){
                if(i+j >= limit){continue;}
            let A1 = Mat[i][j+add];
            let A2 = Mat[i][j*mult];
		//console.log(Mat);
            let A3 = Mat[i+add][j];
            let A4 = Mat[i*mult][j];
            if(A1 == 'L' || A2 == 'L' || A3 == 'L' || A4 == 'L'){
                Mat[i][j] = 'W'; continue;
            }
            if(A1 == 'U' || A2 == 'U' || A3 == 'U' || A4 == 'U'){
                continue;
            }
            if(A1 == 'W' && A2 == 'W' && A3 == 'W' && A4 == 'W'){
                Mat[i][j] = 'L'; continue;
            }
        }
    }
    }

	for(let i=1;i<Math.floor((limit-start)/mult) + !!(((limit-start)%(mult)));i++){
        if(Mat[start][i] == 'W'){ANS2 += (i + ' '); }
    }

    for(let i=1;i<Math.floor((limit-start)/mult) + !!(((limit-start)%(mult)));i++){
        if(Mat[start][i] == 'L'){ANS3 += (i + ' '); }
    }

	
	document.getElementById("An1").value = ANS1;
	document.getElementById("An2").value = ANS2;
	document.getElementById("An3").value = ANS3;
	
}

In1.oninput = F1;
In2.oninput = F1;
In3.oninput = F1;
In4.oninput = F1;
//setInterval(Bobbi,1000);
