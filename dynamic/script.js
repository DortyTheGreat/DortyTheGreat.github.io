function F1() {
    let ANS1 = 0;
    let ANS2 = 0;

    let LENTA = [];
    for (let i = 0; i < 1000; i++) {
        LENTA.push(0);
    }


    let start = parseInt(document.getElementById("In1").value, 10);

    //let mult = parseInt(document.getElementById("In3").value, 10);
    let add1 = parseInt(document.getElementById("In2").value, 10);
    let add2 = parseInt(document.getElementById("In3").value, 10);

    let mult1 = parseInt(document.getElementById("In4").value, 10);
    let mult2 = parseInt(document.getElementById("In5").value, 10);

    let Mid = parseInt(document.getElementById("In6").value, 10);
    let NO = parseInt(document.getElementById("In7").value, 10);
    let Fin = parseInt(document.getElementById("In8").value, 10);

    for (let i = 0; i < 1000; i++) {
        LENTA.push(0);
    }

    LENTA[start] = 1;

    for (let i = start; i < Mid; i++) {
        LENTA[i + add1] += LENTA[i];
        LENTA[i + add2] += LENTA[i];
        LENTA[i * mult1] += LENTA[i];
        LENTA[i * mult2] += LENTA[i];
        LENTA[NO] = 0;
    }

    ANS1 = LENTA[Mid];

    for (let i = 0; i < 1000; i++) {
        LENTA[i] = 0;
    }

    LENTA[Mid] = 1;

    for (let i = Mid; i < Fin; i++) {
        LENTA[i + add1] += LENTA[i];
        LENTA[i + add2] += LENTA[i];
        LENTA[i * mult1] += LENTA[i];
        LENTA[i * mult2] += LENTA[i];
        LENTA[NO] = 0;
    }


    ANS2 = LENTA[Fin];



    document.getElementById("An1").value = ANS1;
    document.getElementById("An2").value = ANS2;
    document.getElementById("An3").value = ANS2*ANS1;

}

In1.oninput = F1;
In2.oninput = F1;
In3.oninput = F1;
In4.oninput = F1;
In5.oninput = F1;
In6.oninput = F1;
In7.oninput = F1;
In8.oninput = F1;
//setInterval(Bobbi,1000);
