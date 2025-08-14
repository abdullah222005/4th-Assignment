function totalFine( fare ) {
          // You have to write your code here
    if (typeof fare !== "number" || fare <= 0) {
        return 'Invalid';
    }
    let fine = fare + (fare * 0.2) + 30;
    return fine;
}
console.log(totalFine("gorib"));

