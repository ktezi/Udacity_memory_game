let CardStylelist = ["fa-diamond",
"fa-paper-plane",
'fa-anchor',
'fa-bolt',
'fa-cube',
'fa-leaf',
'fa-bicycle',
'fa-bomb',
'fa-diamond',
'fa-paper-plane',
'fa-anchor',
'fa-bolt',
'fa-cube',
'fa-leaf',
'fa-bicycle',
'fa-bomb',
];
let counter = 0;
let m = [];
let liveTimer, totalSeconds = 0;
let moves = 0;
let matchCounter = 0;
let first_elem = null;
let second_elem = null;
let loaders = document.getElementsByClassName("grid-item");
const timerContainer = document.querySelector(".timer");
timerContainer.innerHTML = totalSeconds + ' s';
const movesContainer = document.querySelector(".moves");
movesContainer.innerHTML = 0;


// shuffle array
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

shuffleArray(CardStylelist);
startTimer()
let firstCard, secondCard;

for (let i = 0; i < 16; i++) {
let x = document.createElement("div");
let y = document.createElement("button");
let z = document.createElement("i");
z.className += "fa";
y.appendChild(z);
y.className += "grid-item";
x.appendChild(y);
let p = document.getElementsByClassName("gridContainer");
p[0].appendChild(x);
}

for (let i = 0; i < loaders.length; ++i) {
if (counter < 2) {
loaders[i].addEventListener("click", (e) => {
if (loaders[i].classList.length < 2) {
addMove();
let x = loaders[i];
x.classList.add('show')
y = CardStylelist[i];
x.children[0].classList.add(y);
counter++;
if (counter == 1) {
first_elem = x.children[0];

}
if (counter === 2) {
second_elem = x.children[0];
checkForMatch(first_elem, second_elem);
}

}
});
}

}

function checkForMatch(first_elem, second_elem) {
if (first_elem.className == second_elem.className) {
let a = document.getElementsByClassName("grid-item")
first_elem.parentNode.classList.add('match');
second_elem.parentNode.classList.add('match');
matchCounter++;
counter = 0;
first_elem = null;
second_elem = null;
}
else {
setTimeout(function () {
first_elem.parentNode.classList.remove('show');
second_elem.parentNode.classList.remove('show');

}, 500)

}

if (matchCounter == (loaders.length / 2)) {
setTimeout(() => {
window.alert("Congratulations! You Won!");
stopTimer();
}, 500);
}
counter = 0;
m = [];
}

const starsContainer = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;
starsContainer.innerHTML = star + star + star;

//IT WILL DISPLAY THE RATINGS
function rating(moves) {
if (moves < 12) {
starsContainer.innerHTML = star + star + star;
} else if (moves < 18) {
starsContainer.innerHTML = star + star;
} else {
starsContainer.innerHTML = star;
}
}

//FUNCTION THAT WILL ADD COUNT OF MOVES TO THE DOM
function addMove() {
moves++;
movesContainer.innerHTML = moves;
rating(moves);
}

function startTimer() {
liveTimer = setInterval(function () {
totalSeconds++;
timerContainer.innerHTML = totalSeconds + 's';
}, 1000);
}

function stopTimer() {
clearInterval(liveTimer)
}