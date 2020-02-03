"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/


var orderTotal = 0;
// total cost in the cart
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// beginning text for the table that will be put into the html

for(var i = 0; i < item.length; i++){
   // for loop that runs the length of the item array
   cartHTML += "<tr><td><img src = 'tc_" + item[i] + ".png' alt=" + item[i] + "/></td>";
   // html code that uses the item array to find the png and item number
   cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
   // html code that uses the itemDescription, itemPrice, and itemQty arrays to fill in the description, prices, and quantity
   var itemCost = itemPrice[i] * itemQty[i];
   // finds the cost of items by multiplying the price by the quantity from the arrays
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   // adds the item costs to the html code
   orderTotal += itemCost;
   // adds to a subtotal
}

cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";
// adds the total amount of money to the html code after the for loop, so the final ammount cannot be changed
document.getElementById("cart").innerHTML = cartHTML;
// puts all the code into the div with the id cart