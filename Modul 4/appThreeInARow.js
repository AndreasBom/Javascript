
//Namespace
var bom = {};

/**************************************************************************************
 *                  Canvas
 * ************************************************************************************/
    //Variabler för canvas
bom.canvas = document.getElementById("canvas");
bom.ctx = canvas.getContext("2d");

//Nytt spel instansieras när sidan har laddats
window.onload = function () {
    bom.GameObj = new bom.game();

};
/**************************************************************************************
 *                   Objekt och funktioner
 * ************************************************************************************/


//Objekt som innehåller funktioner för att skapa spelplanen
bom.Board = function() {

    this.drawBoard = function() {
        //Ritar vertikala sträck
        for (var i = 100; i < 300; i = i+100){
            bom.ctx.beginPath();
            bom.ctx.moveTo(i, 0);
            bom.ctx.lineTo(i, 300);
            bom.ctx.closePath();
            bom.ctx.stroke();
        }

        //Ritar horisontella sträck
        for (var i = 100; i < 300; i = i+100){
            bom.ctx.beginPath();
            bom.ctx.moveTo(0, i);
            bom.ctx.lineTo(300, i);
            bom.ctx.closePath();
            bom.ctx.stroke();
        }
    };

    //Function som ritar cirklar
    this.drawCircle = function(x, y, color) {
        bom.ctx.beginPath();
        bom.ctx.arc(x, y, 40, 0, 2*Math.PI);
        bom.ctx.closePath();
        if(color == "red"){
            bom.ctx.fillStyle = "red";
        }else if (color == "green") {
            bom.ctx.fillStyle = "green";
        }
        bom.ctx.fill();
    };
};
/***********************************************************/



 //Stor klass som håller reda på vems tur det är och lägger ut spelmarkörer på rätt plats
bom.game = function() {
    //Spelartur
    this.p1 = true;


    //Positioner på spelplanen, color:false = ledig,spelfärg tilldelas när spot är upptagen. id för att kunna bestämma position matematiskt.
    this.spots = {
        n: {
            color: false,
            id: 12
        },
        ne: {
            color: false,
            id: 13
        },
        e: {
            color: false,
            id: 23
        },
        se: {
            color: false,
            id: 33
        },
        s: {
            color: false,
            id: 32
        },
        sv: {
            color: false,
            id: 31
        },
        v: {
            color: false,
            id: 21
        },
        nv: {
            color: false,
            id: 11
        },
        c: {
            color: false,
            id: 22
        }
    };

    //Array som håller lägger till de this.spots som blir upptagna
    this.playedBricksArray = [];

    //Turn() Funktion som förs när spelare klickar på önskad cell för att lägga ut spelbricka
        //Cirkel ritas ut efter att rätt färg har bestämts (varannan grön och röd)
        //spelartur byts
        //En kontroll för om det ligger 3 i samma färg i rad
        //Ev avslutas spelet med att vinnaren skrivs till skärmen.
    this.turn = function (x, y) {
        var color;
        if (this.p1 == true) {
            color = "green";
        } else {
            color = "red";
        }

        if (x > 0 && x < 100 && y > 0 && y < 100 && this.spots.nv.color == false) {//Kontrollerar i vilken cell användaren klickar, samt om denna cell är ledig.
            console.log("NV");
            bom.board.drawCircle(bom.coordArray[7].x, bom.coordArray[7].y, color);//Bestämd plats för var cirkeln läggs
            this.spots.nv.color = color;//Färg loggas till aktuell cell
            this.gamePlayed(this.spots.nv);//Spelare skiftas, this.spots-objektet läggs till playedBricksArray[]
            var vinnare = this.checkForWin();//Kontrollerar om det ligger tre i rad av samma färgoch sparar returvärdet till variabeln vinnare (returvärde = "Färg" är vinnare!)
            this.endGame(vinnare);//Avslutar spelet genom att skriva ut vinnaren på skärmen



        }
        else if (x > 100 && x < 200 && y > 0 && y < 100 && this.spots.n.color == false) {
            console.log("N");
            bom.board.drawCircle(bom.coordArray[0].x, bom.coordArray[0].y, color);
            this.spots.n.color = color;
            this.gamePlayed(this.spots.n);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);

        }
        else if (x > 200 && x < 300 && y > 0 && y < 100 && this.spots.ne.color == false) {
            console.log("NE");
            bom.board.drawCircle(bom.coordArray[1].x, bom.coordArray[1].y, color);
            this.spots.ne.color = color;
            this.gamePlayed(this.spots.ne);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);

        }
        else if (x > 200 && x < 300 && y > 100 && y < 200 && this.spots.e.color == false) {
            console.log("E");
            bom.board.drawCircle(bom.coordArray[2].x, bom.coordArray[2].y, color);
            this.spots.e.color = color;
            this.gamePlayed(this.spots.e);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);

        }
        else if (x > 200 && x < 300 && y > 200 && y < 300 && this.spots.se.color == false) {
            console.log("SE");
            bom.board.drawCircle(bom.coordArray[3].x, bom.coordArray[3].y, color);
            this.spots.se.color = color;
            this.gamePlayed(this.spots.se);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);

        }
        else if (x > 100 && x < 200 && y > 200 && y < 300 && this.spots.s.color == false) {
            console.log("S");
            bom.board.drawCircle(bom.coordArray[4].x, bom.coordArray[4].y, color);
            this.spots.s.color = color;
            this.gamePlayed(this.spots.s);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);

        }
        else if (x > 0 && x < 100 && y > 200 && y < 300 && this.spots.sv.color == false) {
            console.log("SV");
            bom.board.drawCircle(bom.coordArray[5].x, bom.coordArray[5].y, color);
            this.spots.sv.color = color;
            this.gamePlayed(this.spots.sv);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);

        }
        else if (x > 0 && x < 100 && y > 100 && y < 200 && this.spots.v.color == false) {
            console.log("V");
            bom.board.drawCircle(bom.coordArray[6].x, bom.coordArray[6].y, color);
            this.spots.v.color = color;
            this.gamePlayed(this.spots.v);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);


        }
        else if (x > 100 && x < 200 && y > 100 && y < 200 && this.spots.c.color == false) {
            console.log("C");
            bom.board.drawCircle(bom.coordArray[8].x, bom.coordArray[8].y, color);
            this.spots.c.color = color;
            this.gamePlayed(this.spots.c);
            var vinnare = this.checkForWin();
            this.endGame(vinnare);
        }
    };



    //Funktion som sorterar arrayn basserat på objektens id
    this.sortArrayOfObjects = function() {
        var swap = true;
        for( var i = 1; i <= this.playedBricksArray.length;i++){
            swap = false;
            for( var j = 0; j < this.playedBricksArray.length - 1; j++){
                if(this.playedBricksArray[j+1].id < this.playedBricksArray[j].id){
                     var temp = this.playedBricksArray[j];
                    this.playedBricksArray[j] = this.playedBricksArray[j+1];
                    this.playedBricksArray[j+1] = temp;
                    swap = true;
                }
            }
        }

    };

    //Kontrollerar om 3 i sammafärg ligger i rad
    this.checkForWin = function () {

        //Sorterar arrayn med upptagna platser efter objektets id
        this.sortArrayOfObjects();

        //Kontrollerar om tre av samma färg ligger i rad
            //Är baserat på:
            // Rader har en differans på 1 mellan varje cell
            //kolumner har en differans på 10 mellan varje cell
            //Diagonalerna har en differans på 9 resp 11 mellan varje cell
            //Cellernas id:
            //11    12    13
            //21    22    23
            //31    32    33
        for (var i = 0; i < this.playedBricksArray.length; i++){
            for(var j = i+1; j < this.playedBricksArray.length; j++){
                for(var k = i+2; k < this.playedBricksArray.length; k++){
                    var x = this.playedBricksArray[i].id;
                    var y = this.playedBricksArray[j].id;
                    var z = this.playedBricksArray[k].id;

                    var colorX = this.playedBricksArray[i].color;
                    var colorY = this.playedBricksArray[j].color;
                    var colorZ = this.playedBricksArray[k].color;

                    var diff = Math.abs(x - y);
                    var diff2 = Math.abs(y - z);

                    //Kontrollerar rader
                    if (diff == 1 && diff2 == 1 &&  colorX == colorY && colorX == colorZ) {
                        if(colorX == "green"){
                            console.log("Green")
                            return "Grön spelare vinner!";
                        }else {
                            console.log("Red")
                            return "Röd spelare vinner!";
                        }

                    }
                    //Kontrollerar kollumner
                    if (diff == 10 && diff2 == 10 &&  colorX == colorY && colorX == colorZ) {
                        if(colorX == "green"){
                            console.log("Green")
                            return "Grön spelare vinner!";
                        }else {
                            console.log("Red")
                            return "Röd spelare vinner!";
                        }

                    }
                    //Kontrollerar Diagonalt
                    if (diff == 9 && diff2 == 9 &&  colorX == colorY && colorX == colorZ) {
                        if(colorX == "green"){
                            console.log("Green")
                            return "Grön spelare vinner!";
                        }else {
                            console.log("Red")
                            return "Röd spelare vinner!";
                        }
                    }

                    //Kontrollerar Diagonalt
                    if (diff == 11 && diff2 == 11 &&  colorX == colorY && colorX == colorZ) {
                        if(colorX == "green"){
                            console.log("Green")
                            return "Grön spelare vinner!";
                        }else {
                            console.log("Red")
                            return "Röd spelare vinner!";
                        }
                    }

                }
            }

        }
    };
    //Funktion som skriver ut vinnaren på skärmen, när variabeln winner innehåller en sträng
    this.endGame = function (winner) {
        if (winner == "undefined" || winner == null){
            document.getElementById("winner").innerHTML = "";
        }else {
            document.getElementById("winner").innerHTML = winner;
        }



    };

    //Jämför två färger och returnerar true om lika, false om olika
    this.isEqual = function (color1, color2) {
        if(color1 == color2){
            return true
        }
        return false;
    };

    //Funktion som byter spelare och som körs efter att bricka är utlagd + lägger till playedBricksArray[]
    this.gamePlayed = function(idOfCoordinate) {
        if(this.p1 == false){
            this.p1 = true;
        }else {
            this.p1 = false;
        }

        //Lägger till playedBricksArray[]. Använd notation idOfCoordinate.n.id som parameter
        this.playedBricksArray.push(idOfCoordinate);
    };
};//Game slut
/****************************************************************************************/



////Spelplan skapas när sidan laddas, körs direkt, m.h.a () efter funktionen
bom.newBoard = function() {
    bom.board = new bom.Board();
    bom.board.drawBoard();
}();



//Ny tom spelplan, samt initialinställningar
bom.newGame = function() {
    //Raderar allt visuellt på spelplanen
    bom.ctx.clearRect(0,0,300,300);

    //Kastar objektet om det existerar
    if(typeof GameObj != "undefined")
    {
        delete bom.GameObj;
    }

    //Ny spelplan
    bom.board = new bom.Board();
    bom.board.drawBoard();

    //Nytt spelarObjekt
    bom.GameObj = new bom.game();

};


/***********************************************************************************************
 *                   Eventlyssnare
 ************************************************************************************************/

bom.canvas.addEventListener('click', function(e) {
    //En bricka läggs ut vid klick, under förutsättningar som finns i klassen game och funktionen turn
    bom.GameObj.turn(e.offsetX, e.offsetY);

});

document.getElementById("newGame").addEventListener('click', function(){
    bom.newGame();
});



/******************************************************************************************
 *                      Data
 * ***************************************************************************************/
    //Kordinat på spelplanen
bom.coordArray = [
    n=
    {
        x:150,
        y:50
    },
    ne=
    {
        x:250,
        y:50
    },
    e =
    {
        x:250,
        y:150
    },
    se =
    {
        x:250,
        y:250
    },
    s =
    {
        x:150,
        y:250
    },
    sv =
    {
        x:50,
        y:250
    },
    v =
    {
        x:50,
        y:150
    },
    nv =
    {
        x:50,
        y:50
    },
    c =
    {
        x:150,
        y:150
    }
];

