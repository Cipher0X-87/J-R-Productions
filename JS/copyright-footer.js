let currentDate = new Date();

let currentYear = currentDate.getFullYear();

console.log("Current Year = " + currentYear);

document.getElementById("footerInformation").innerHTML = "Copyright Tyrhejar © " + currentYear;