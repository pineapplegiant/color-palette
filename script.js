const colorPalleteContainer = document.getElementsByClassName("pallete");
const page = document.getElementById("whole-page");

page.addEventListener("click", buttonHandler, false);
page.addEventListener("change", colorHandler, false);

function buttonHandler(event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.innerText === "+") {
      addDisplayColumn();
    } else if (event.target.innerText === "x") {
      deleteColorPicker(event.target.id);
    } else if (event.target.innerText === "C") {
      startOver();
    }
  }
}

function colorHandler(event) {
  if (event.target.className === "color-input") {
    console.log(event.target.id);
    
    fillInColor(event.target.value, event.target.id);
  }
}

function addDisplayColumn() {
  let randomId = Math.random();
  let displayColumn = document.createElement("div");
  displayColumn.id = randomId;
  displayColumn.className = "color-column";

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerText = "x";
  deleteButton.id = randomId;

  let input = document.createElement('input')
  input.type = 'text'
  input.className = 'color-input'
  input.id = randomId

  displayColumn.appendChild(input);
  displayColumn.appendChild(deleteButton);
  colorPalleteContainer[0].appendChild(displayColumn);
}

function deleteColorPicker(idNumber) {
  let displayColumnToBeDeleted = document.getElementById(idNumber);
  displayColumnToBeDeleted.remove();
}

function startOver() {
  // second chances for everyone and maybe thirds and ...
  location.reload();
}

function fillInColor(colorValue, idNumber) {
  // wip
  console.log(idNumber);
  let box =document.querySelector(`[id='${idNumber}']`)
  console.log(box);
  box.style.backgroundColor = colorValue
  


}

