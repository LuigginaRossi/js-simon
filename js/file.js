// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//individuo elementi html:
const numRandomEls = document.querySelector(".random-num");
console.log(numRandomEls);

const goodLuckEl = document.querySelector(".good-luck");
console.log(goodLuckEl);

const firstInput = document.querySelector( "[name='first-num']" );
console.log( firstInput.value );

/**
 * creo function per generare 5 numeri random :
 * @param {number} max 
 * @returns {number}
 */
 function createNumRandom( min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * genero un array di 5 numeri diversi usando la funtion createNumRandom.
 * @param {number}
 * @returns {Array}
 */
 function createRandList( num ) {

    numList = [];

    while( numList.length < 5){

       //creo costante richiamando funzione genera numero random:
        const numRandom = createNumRandom(1, num);
        
        if (!numList.includes(numRandom)) {
            numList.push(numRandom)
        } 
    }
    return numList;
}

const randomList = createRandList(20);
console.log (randomList);

 numRandomEls.innerHTML = randomList;



//    setInterval(azzeraNumList, 30000);
//    function azzeraNumList () {
//        numRandomEls.innerHTML = "";
//        goodLuckEl.innerHTML = "Now enter the numbers you remember and good luck!"
//        return randomList;
//    }
//    console.log(azzeraNumList ())