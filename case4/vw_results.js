"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: 
   Date:   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

var reportHTML = "<h1>" + raceTitle + "</h1>";
// creates a var to hold the html code for the reports

for(var i = 0; i < race.length; i++){
   // runs for the length of the race array
   var totalVotes = 0;
   votes[i].forEach(calcSum);
   // calculates the sum for each item in the votes array
   reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
   reportHTML += candidateRows(i, totalVotes);
   reportHTML += "</table>";
   // adds html code to the reportHTML var
}

document.getElementsByTagName("section")[0].innerHTML = reportHTML;
// puts the html code from reportHTML into the first section element

function candidateRows(raceNum, totalVotes){
   var rowHTML = "";
   // creates an empty string for the rowHTML
   for(var j = 0; j < 3; j++){
      var candidateName = candidate[i][j];
      var candidateParty = party[i][j];
      var candidateVotes = votes[i][j];
      var candidatePercent = calcPercent(candidateVotes, totalVotes);

      rowHTML += "<tr><td>" + candidateName + " (" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + " (" + candidatePercent.toFixed(1) + ")</td>";
      // creates html code the candidate information
      for(var k = 0; k < candidatePercent; k++){
         rowHTML += createBar(candidateParty);
      }
      // creates a colored bar for each candidate
      rowHTML += "</tr>";
      // closes the table row for the rowHTML code
   }
   return rowHTML;
   // returns rowHTML after completing the function
}




/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

function createBar(partyType){
   // used to create bar graphs for each candidate
   var barHTML = "";
   // creates an empty string for barHTML

   if(partyType === "D"){
      barHTML = "<td class='dem'></td>";
   }else if(partyType === "R"){
      barHTML = "<td class ='rep'></td>";
   }else if(partyType === "I"){
      barHTML = "<td class ='ind'></td>";
   }

   return barHTML;
}