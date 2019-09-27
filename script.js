const colorPickerContainer = document.getElementsByClassName("container");
const colorPalleteContainer = document.getElementsByClassName("pallete");
const page = document.getElementById("whole-page");

page.addEventListener("click", buttonHandler, false);
page.addEventListener("change", colorHandler, false);

function buttonHandler(event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.innerText === "Add New Color") {
      addNewColorPicker();
    } else if (event.target.innerText === "x") {
      deleteColorPicker(event.target.id);
    } else if (event.target.innerText === "Start Over") {
      startOver();
    }
  }
}

function colorHandler(event) {
  
  if (event.target.className === "second-input") {

    fillInColor(event.target.value, event.target.id);
  }
}

function addNewColorPicker() {
  colorNumber = colorCounter();
  randomId = Math.random(); // this is next level right here
  let colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.id = randomId; // to use when listening to color changes in picker to display in pallete

  let h2 = document.createElement("h2");
  h2.innerText = colorNumber;
  h2.className = "h2";

  let firstInput = document.createElement("input");
  firstInput.type = "color";
  firstInput.className = "color";

  let secondInput = document.createElement("input");
  secondInput.className = 'second-input';
  secondInput.id = randomId;

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerText = "x";
  deleteButton.id = randomId;

  colorBox.appendChild(h2);
  colorBox.appendChild(firstInput);
  colorBox.appendChild(secondInput);
  colorBox.appendChild(deleteButton);

  // page is an iterable for some reason, a node i think, so we gotta iterate over it
  colorPickerContainer[0].appendChild(colorBox);
  addDisplayColumn(randomId, colorNumber); // every color picker needs their color displayed
}

function colorCounter() {
  let numberOfColorBoxes = document.getElementsByClassName("color-box").length;
  return numberOfColorBoxes + 1; // js arrays start at 0 ^_^ and no on cares for color {0}
}

function addDisplayColumn(randomId, colorNumber) {
  let displayColumn = document.createElement("div");
  displayColumn.className = "color-column";
  displayColumn.tagName = randomId;

  displayColumn.id = randomId; // same as colorBox.id to tie them together

  let h2 = document.createElement("h2");
  h2.innerText = colorNumber;
  h2.className = "h2";

  displayColumn.appendChild(h2);
  colorPalleteContainer[0].appendChild(displayColumn);
}

function deleteColorPicker(idNumber) {
  let colorPickerToBeDeleted = document.getElementById(idNumber);
  colorPickerToBeDeleted.remove();
  let displayColumnToBeDeleted = document.getElementById(idNumber);
  displayColumnToBeDeleted.remove();
}

function startOver() {
  // second chances for everyone and maybe thirds and ...
  location.reload();
}

function fillInColor(colorValue, idNumber) {
  // wip
  console.log(document.getElementsByTagName(idNumber))
  console.log(idNumber);
}

// columnDisplay.style.backgroundColor = colorValue;
