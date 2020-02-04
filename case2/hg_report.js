"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1><h2>By: " + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg'/><table><tr><th>Product ID</th><td>" + itemID + "</td></tr><tr><th>List Price</th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr><tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;
// html code for the game information
document.getElementsByTagName("article")[0].innerHTML = gameReport;
// makes the first article tag have all the code from the gameReport var

var ratingsSum = 0;
// sum of all ratings is 0
var ratingsCount = ratings.length;
// ratingsCount is the total amount of ratings

for(var i = 0; i < ratings.length; i++){
   ratingsSum += ratings[i];
   // adds all the ratings together
}

var ratingsAvg = ratingsSum/ratingsCount;
// averages all the ratings using previous vars
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";
// puts the average rating into the html code

for(var i = 0; i < 3; i++){
   // starts at 0 and goes to 2 by steps of 1
   ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr><tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr><tr><th>Rating</th><td>";
   // adds html code for the user reviews/ratings
   for(var x = 0; x < ratings[i]; x++){
      ratingReport += "<img src='hg_star.png'/>";
   }
   // displays starts based on how highly the user rated the game
   ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
   // adds the summaries from user reviews
}
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
// adds the html code from ratingReport to the first aside element