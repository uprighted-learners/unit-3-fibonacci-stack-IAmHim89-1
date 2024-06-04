// Create the `series` variable
var series = [0, 1];

while (series.length < 12) {
   // your code here
   
   let call1 = series.pop();
   let call2 = series.pop();

   var sum = call2 + call1;
    
   
   series.push(call2, call1, sum);
   console.log(series);   
  }  
// Print the Fibonacci sequence to the console
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
