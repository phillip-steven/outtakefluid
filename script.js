// Start of define date
const date = new Date();
document.getElementById(
  "todayDate"
).value = `${date.getDate()} /${date.getMonth()} / ${date.getFullYear()}`;
// End of define date

// Start calculate outtake function
function calculateOuttake(constWeight, todayWeight, magicNumber) {
  return parseInt(todayWeight * 1000 - constWeight * 1000 + magicNumber);
}
// End calculate outtake function
// Set outtake to 0
document.getElementById("outTake").innerText = `0`;

// Start function update outtake
function updateOuttake() {
  let cWeight = Number(document.getElementById("constantWeight").value);
  let tWeight = Number(document.getElementById("todayWeight").value);
  let mNumber = Number(document.getElementById("magicNumber").value);
  return (document.getElementById("outTake").value = ` ${calculateOuttake(
    cWeight,
    tWeight,
    mNumber
  )}`);
}
// End function update outtake

// Set update display to reset input value
function updateDisplay() {
  let cWeight = (document.getElementById("constantWeight").value = "");
  let tWeight = (document.getElementById("todayWeight").value = "");
  let mNumber = (document.getElementById("magicNumber").value = "");
}

function formValidation() {
  let cWeight = (document.getElementById("constantWeight").value = "");
  let tWeight = (document.getElementById("todayWeight").value = "");
  let mNumber = (document.getElementById("magicNumber").value = "");
  if (
    isNaN(cWeight) ||
    cWeight < 20 ||
    (cWeight > 150 && isNaN(tWeight)) ||
    tWeight < 20 ||
    (tWeight > 150 && isNaN(mNumber)) ||
    mNumber < 20 ||
    mNumber > 150
  ) {
    document.getElementById("outTake").innerText = `Input tidak valid`;
    return false;
  } else {
    updateOuttake();
  }
}
console.log(formValidation);
// Submit outtake
function submitOuttake() {
  // formValidation();
  updateOuttake();
  // updateDisplay();
}
