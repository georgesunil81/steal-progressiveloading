console.log("Appcontroller called...");

var $ = require("jquery");

var checkCredit = require("progressive/pages/credit/credit.js");
var checkInventory = require("progressive/pages/inventory/inventory.js");

console.log("requires are successful...");

var enoughCredit;
var enoughInventory;

$(function() {
	$('#purchase').append('<h1>So, you have made a purchase decision ... ... ... check the network tab to see if checkcredit and checkinventory modules are loaded from dist...</h1>');

	enoughCredit = checkCredit(100);

	enoughInventory = checkInventory(12);		

	if (enoughCredit && enoughInventory) {
		alert("Eligible to purchase");
	}

});
