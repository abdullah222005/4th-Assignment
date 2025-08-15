function  bestTeam( player1, player2 ) {
          // You have to write your code here
    if((typeof player1 !== "object" || player1 === null || Array.isArray(player1)) || (typeof player2 !== "object" || player2 === null || Array.isArray(player2))){
        return 'Invalid'; 
    }
    if(player1.foul + player1.cardR + player1.cardY > player2.foul + player2.cardR + player2.cardY){
        return player2.name;
    }
    else if(player1.foul + player1.cardR + player1.cardY === player2.foul + player2.cardR + player2.cardY){
        return 'Tie';
    }
    else{
        return player1.name;
    }
}
console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));
