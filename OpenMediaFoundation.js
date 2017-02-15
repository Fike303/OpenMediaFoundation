/* It is a good idea to use a simple js alert to verify that our JavaScript file is connected properly
-this alert can easily be turned on or off using a comment

alert("JavaScript is connected");
*/

/* 1.) declare the values in the array */
var myArray = [8,4,8,9,16,1,14,7,19,3,0,5,2,11,6];

/* 2.) sort the array so that the numbers are in ascending order
*/
 myArraySorted = (myArray.sort(function(a,b){
        return a - b
        }
    )
);
console.log(myArraySorted);  

/* 3.) remove duplicate entries from the array
*/
for(i=0; i<myArray.length; i+=1)
    {
    for(j=i+1; j<myArray.length; j+=1)
        {
        if(myArray[i]===myArray[j])
            {
            myArray.splice(myArray[i],1);
            }
        }
    }
console.log(myArray);

/* 4.) Compare the values held in neighboring indexes to determine where the first gap occurs in our sequence.
If this gap is greater than 1, we know that the sequence has been broken
*/

for(i=0; i<myArray.length; i++)
    {
        if((myArray[i+1] - myArray[i]) > 1)
            {
            answer = (myArray[i]+1);
            console.log(myArray[i]+1);
            break;
            /* we use the "break" above to stop running through the for-loop once we have revealed the first gap in the sequence as noted in the instructions for this exercise.
            */
            }
    }
/* we can now use the "answer" to fill in the result for our HTML statement
*/
document.getElementById("result").innerHTML = answer;


/***********************************/
/*The final code block in its entirety. 
*/
/*var myArray = [8,4,8,9,16,1,14,7,19,3,0,5,2,11,6];
    var myArraySorted = (myArray.sort(function(a,b){
            return a - b
            }
        )
    );
    for(i=0; i < myArray.length; i+=1 ){
            for( j=i+1; j < myArray.length; j+=1 ){
                if(myArray[i]===myArray[j]){
                    myArray.splice(myArray[i], 1);
                }
            }
        };
      for(i=0; i<myArray.length; i++)
    {
        if((myArray[i+1] - myArray[i]) > 1)
            {
            answer = (myArray[i]+1);
            console.log(myArray[i]+1);
            break;
            }
    }
    document.getElementById("result").innerHTML = answer;
    */


