console.log("checkInventory module loaded...");

function checkInventory(requestedInventory) {
	console.log("checkInventory called with requestedInventory=", requestedInventory);
	return true;
}

module.exports = checkInventory;
