// debugger;
var ar;

ar = ['h', 'o', 'I', 'd'];

console.log(ar);
console.warn("longitud de ar", ar.length, ar);
console.log("longitud de ar" + ar.length + ar);


//======================*********======================

var minombre = "davis alexander vargas";


// for (let i = 0; i < minombre.length; i++) {
//     console.log(minombre[i], "posición: " + i);

// }
//======================*********======================
var mod;
var nombreCompleto = "";
for (let i = 0; i < minombre.length; i++) {
    mod = i % 2;
    if (mod > 0) {

        console.log(minombre[i].toLowerCase(), "posición: " + i);
        nombreCompleto = nombreCompleto + minombre[i].toLowerCase();
    } else {
        console.log(minombre[i].toUpperCase(), "posición: " + i);
        nombreCompleto = nombreCompleto + minombre[i].toUpperCase();

    }

}
console.log(nombreCompleto);

//======================*********======================

mostrarTexto(minombre);

function isPar(x) {
    return x % 2 == 0 ? true : false;
}

function convertChart(c, isVe) {
    return isVe ? c.toUpperCase() : c.toLowerCase();
}

function getLast(text) {
    return text[text.length - 1];

}

function mostrarTexto(t) {
    var tmp = "";
    for (let i = 0; i < minombre.length; i++) {
        tmp = tmp + convertChart(minombre, isPar(i));
        console.log(getLast(tmp), "=>", i)


    }
    console.log(tmp);
}






//=============================================================================


var ar = [1, 2, "3", 4, "5"];

ar = ar.map(i => i + 1);

console.log(ar);

console.log(ar.filter(item => item < 3));


var ar = [2, 4, 6, 8, 10];
var ans = ar.reduce((con, cur) => {
    console.log(con);
    return cur + con;
}, 0);

console.log(ans);