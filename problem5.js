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
console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));
