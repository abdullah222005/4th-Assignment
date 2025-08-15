function totalFine(fare) {
          // You have to write your code here
    if (typeof fare !== "number" || fare <= 0){
        return 'Invalid';
    }
    let fine = fare + (fare * 0.2) + 30;
    return fine;
}


function onlyCharacter(input) {
    if (typeof input !== "string") {
        return 'Invalid';
    }
    return input.split(' ').join('').toUpperCase();
}


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


function  isSame(arr1 , arr2 ) {
          // You have to write your code here
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid';
    }
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


function  resultReport(marks) {
          // You have to write your code here
    if (!Array.isArray(marks)) {
        return 'Invalid';
    }
    let total = 0;
    let pass = 0;
    let fail = 0;
    for(const mark of marks){
    if(typeof mark !== "number" || isNaN(mark)){
        return "Invalid";
    }
        total += mark;  
        if(mark >= 40){
            pass++;
        }
        else{
            fail++;
        }
    }
    let finalScore = marks.length === 0 ? 0 : Math.round(total / marks.length);
    return {finalScore, pass, fail}; 
}