/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-07-HTML/sw.js", {
    scope: "/ICS20-Unit5-07-HTML/",
  })
}

/**
 * This function multiplies numbers using loops
 */
function convert() {
  const number = parseInt(document.getElementById("number").value);
  let total = 0;
  
  for (let counter = 1; counter <= number; counter++) {
    total += counter;
  }
  document.getElementById("answer").innerHTML = "The answer is: " + total;
}