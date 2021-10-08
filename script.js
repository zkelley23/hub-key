// Names of people go in this array
var names = [
    "Grace",
    "Hiram",
    "Ian",
    "Harold",
    "Jesse",
    "Thomas",
    "Wilk",
    "Zach",
    "Amanda"
];

// Alphabetize array
names.sort();

// Add JKB at the end
names.push("JKB");

// Loop through names to create buttons
let i = 0;
let len = names.length;
let getButtons = [];
for (; i < len; i++) {
    getButtons[i] = `<button type="button" onclick="getUser('` + names[i] + `')">` + names[i] + `</button>`;
}

// Push buttons to page
document.getElementById('buttons').innerHTML = getButtons.join("");

// Function to save the selected name and put it in the <h1>
function getUser(userName) {
    localStorage.setItem('savedName', userName);
    document.getElementById('keyLoc').innerHTML = userName;
}

// Loads the saved name into the <h1>
window.onload = (event) => {
    document.getElementById('keyLoc').innerHTML = localStorage.getItem('savedName');
    console.log('Page loaded correctly.');
};