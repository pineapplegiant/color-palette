const colorPickerContainer = document.getElementsByClassName("container");
const colorPalleteContainer = document.getElementsByClassName("pallete");

function listenForAddColorPicker() {
  document
    .querySelector(".add-new-color")
    .addEventListener("click", function(event) {
      addNewColorPicker();
    });
}

function listenForDeleteColorPicker() {
  document
    .querySelector(".delete-button")
    .addEventListener("click", function(event) {
      deleteColorPicker();
    });
}

function addNewColorPicker() {
  colorNumber = howManyColors();
  let colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.id = colorNumber; // to use when listening to color changes in picker to display in pallete

  let h2 = document.createElement("h2");

  h2.innerText = `Color {${colorNumber}}`;

  let firstInput = document.createElement("input");
  firstInput.type = "color";
  firstInput.className = "color";
  firstInput.name = "y";

  let secondInput = document.createElement("input");
  secondInput.type = "tel";
  secondInput.id = "";
  secondInput.name = "";

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerText = "delete";

  colorBox.appendChild(h2);
  colorBox.appendChild(firstInput);
  colorBox.appendChild(secondInput);
  colorBox.appendChild(deleteButton);

  // page is an iterable for some reason, a node i think, so we gotta iterate over it
  colorPickerContainer[0].appendChild(colorBox);
  addDisplayColumn(colorNumber); // every color picker needs their color displayed
}

function howManyColors() {
  let numberOfColorBoxes = document.getElementsByClassName("color-box").length;
  return numberOfColorBoxes + 1; // js arrays start at 0 ^_^ and no on cares for color box {0}
}
function addDisplayColumn(colorNumber) {
  let displayColumn = document.createElement("div");
  displayColumn.className = "color-column";
  displayColumn.id = colorNumber; // same as colorBox.id to tie them together
  colorPalleteContainer[0].appendChild(displayColumn);
}

function deleteColorPicker() {}

listenForAddColorPicker();
listenForDeleteColorPicker();
