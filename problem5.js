function  resultReport( marks ) {
          // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
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
console.log(resultReport(100));
