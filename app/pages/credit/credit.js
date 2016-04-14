console.log("checkCredit module loaded...");

function checkCredit(userCredit) {
	console.log("checkCredit called with userCredit=", userCredit);
	return checkCreditworthiness(userCredit);
	//return true;
}


function checkCreditworthiness(userCredit) {
	console.log("checkCreditworthiness called internally with userCredit=", userCredit);
	return true;
}


module.exports = checkCredit;



