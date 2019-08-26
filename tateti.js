        let markValue = 'X';
        let ganador = '';

        function pressButton(id){
            var valueOnDiv = document.getElementById(id).innerHTML;
            var tateti = [];
            var idTateti = '';
            
            // if the winner is already defined, exit the function
            if(!ganador==''){return;}

            // Puts value on the defined square
            if(valueOnDiv == ''){
                document.getElementById(id).innerHTML = markValue;
            }

            // Builds array with squares values
            for(i = 1; i <= 9; i++ ){
                idTateti = 'tateti'+i;
                tateti.push(document.getElementById(idTateti).innerHTML);
            }

            // Defines if found a winner
            if( (tateti[0]==tateti[1] && tateti[1]==tateti[2] && !tateti[0]=='') ||
                (tateti[3]==tateti[4] && tateti[4]==tateti[5] && !tateti[3]=='') ||
                (tateti[6]==tateti[7] && tateti[7]==tateti[8] && !tateti[6]=='') ||
                (tateti[0]==tateti[4] && tateti[4]==tateti[8] && !tateti[0]=='') ||
                (tateti[2]==tateti[4] && tateti[4]==tateti[6] && !tateti[2]=='') ||
                (tateti[0]==tateti[3] && tateti[3]==tateti[6] && !tateti[0]=='') ||
                (tateti[1]==tateti[4] && tateti[4]==tateti[7] && !tateti[1]=='') ||
                (tateti[2]==tateti[5] && tateti[5]==tateti[8] && !tateti[2]=='') ) {
                document.getElementById('ganador').innerHTML = 'Ganador : '+markValue;
                ganador = markValue;
            }
             
            // Sets up the mark to be written
            markValue == 'X' ? markValue = 'O' : markValue = 'X';   
        }

        function buildTable(){
            var textGrid = '';
            ganador = '';
            for(i = 1; i <= 9; i++ ){
                textGrid = textGrid+"<div id='tateti"+i+"' onClick='pressButton(this.id)'></div>";
            }
            document.getElementById('tateti').innerHTML = textGrid;
            document.getElementById('ganador').innerHTML = 'Ganador : ';
        }   