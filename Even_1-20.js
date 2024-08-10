//Examples: print even number between 1 to 20 including 1 and 20

var sn=1, en=20;

while (sn <= en) {
    if (sn%2==0) {                      //logic to print only even number
        console.log("Even Number: "+sn);
    }
    //  else {
    //     console.log("Odd Number");     //uncomment this if you want to show odd one
    // }
    sn++;
}