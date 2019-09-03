function sudokuGames(){
    game[
        0,0,0, 8,7,2, 0,0,1,
        7,8,5, 0,0,0, 0,0,0,
        0,0,0, 0,0,5, 8,0,0,

        5,0,3, 0,0,0, 9,6,0,
        1,0,8, 0,0,0, 2,0,7,
        0,9,6, 0,0,0, 1,0,8,

        0,0,1, 5,0,0, 0,0,0,
        0,0,0, 0,0,0, 7,1,9,
        8,0,0, 6,9,1, 0,0,0];

    return game;
}        
function pressButton(id){
    var valueOnDiv = document.getElementById(id).innerHTML;
    var sudoku = [];
    
    // Puts value on the defined square
    if(valueOnDiv == ''){
        document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + 1 ;
    }

    // Builds array with values on screen
    for(i = 1; i <= 9; i++ ){
        idTateti = 'sudoku'+i;
        tateti.push(document.getElementById(idTateti).innerHTML);
    }
        
}

function buildTable(){
    let newGame = game();
    var value = 0;
    for(n = 1; n <= 9; n++ ){
        let textGrid = '';
        for(i = 1; i <= 9; i++ ){
            textGrid = textGrid+"<div id='sudoku"+n+'-'+i+"' onClick='pressButton(this.id)'></div>";
        }
        document.getElementById('sudoku'+n).innerHTML = textGrid;
    }

    for(i = 0; i <= 81; i++){
        
    }
}   