let btns = document.querySelectorAll(".diff__btn")
let btnActive = document.querySelector(".diff__btn.active").textContent;
let colorsContainer = document.querySelector(".colors");
let colorsBlocks;
let rgb = document.querySelector(".rgb");
let text = document.querySelector(".status");

let colors = [];
let btnActiveValue;

btnActiveValue=btnActive

createBlocks(btnActive)

resetGame();



function resetGame() {
 
	createBlocks(btnActiveValue);
	document.body.style.color = "black";
	colors = [];
	pickColors();
  pickedColor = random(btnActiveValue);

  rgb.textContent = colors[pickedColor];
  console.log(colors[pickedColor])
	setColors();
	text.textContent =
		"Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
	for (let i = 0; i < colorsBlocks.length; i++) {
		colorsBlocks[i].style.backgroundColor = colors[i];
	}
}
console.log(btnActive)
function setEqual(x) {
	for (let i = 0; i < colorsBlocks.length; i++) {
		colorsBlocks[i].style.backgroundColor = x;
	}
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", setN);
}

function setN(e) {
	for (let i = 0; i < btns.length; i++) {
		btns[i].classList.remove("active");
	}
	e.target.classList.add("active");
  btnActiveValue = document.querySelector(".diff__btn.active").textContent;
	resetGame();
}

function pickColors() {
	for (let i = 0; i < btnActiveValue; i++) {
		colors.push(randomColor());
	}
}

function randomColor() {
	return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
	return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
	// your code here
}

function createBlocks(num) {
	colorsContainer.textContent = "";

	// here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
	for (let i = 0; i < num; i++) {
		let block = document.createElement("div");
		block.classList.add("colors__block");
		colorsContainer.appendChild(block);
	}
	colorsBlocks = document.querySelectorAll(".colors__block");
	for (let i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", () => {
      if ((colorsBlocks[i].style.backgroundColor) === rgb.textContent) {
        setEqual(rgb.textContent);
        text.textContent = "Congrats You nailed it";
        setTimeout(() => {
          location.reload()
        }
            ,2000
          ) 
      }
      else {
        colorsBlocks[i].style.backgroundColor = '#fff'
        text.textContent='Sorry Wrong answer try again'
      }
      
    });

	}
}
