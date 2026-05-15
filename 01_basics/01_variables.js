const accountId = 144223
let accountEmail = "smverse@gmail.com"
var accountPassword = "12345678"
accountCity = "Jaipur"
let accountState;


//accountId = 2 // not allowed


accountEmail= "hc@email.com"
accountPassword = "9876543211"
accountCity = "Lucknow"


console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
