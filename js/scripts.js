/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.           OK
Ogni cella ha un numero progressivo, da 1 a 100.                                    OK
Ci saranno quindi 10 caselle per ognuna delle 10 righe.                             OK

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. OK

*/

// funzione crea N celle con numero progressivo
function createCells (min, max, container) {

        //Crea N celle e inseriscile in un contenitore
        for (let i = min; i <= max; i++ ) {

            // Crea nuova cella
            const cell = document.createElement('div');

            // // Attribuisci al mio nuovo div cella la classe che ne determina le dimensioni --> è giusto ??
            cell.classList.add('stile-cella');
            cell.classList.add('riga-dieci');
            cell.innerHTML = i;
            container.append(cell);


            // Al click di ogni cella 
            cell.addEventListener ('click',
            
                function () {

                    if (this.classList.contains('clicked')) {
                        this.classList.remove('clicked');
                    }
                    else {
                        this.classList.add('clicked');
                        console.log('Il numero della cella cliccata è: ', i);
                    }
                }
            
            )
        }
    

    return createCells;
}

// Quando devo creare griglia? Al click del bottone Play
// Prendo bottone Play da HTML
const buttonPlay = document.getElementById('button-play');
console.log(buttonPlay);


buttonPlay.addEventListener ('click',

    function () {

        const myGrid = document.getElementById('grid');
        console.log(myGrid);

        allCells = createCells (1, 100, myGrid);
        console.log(allCells);

    }
    // Per fermare il click: posso aggiungere solo 1 volta la griglia --> soluzione temporanea
    , {once : true}

);







