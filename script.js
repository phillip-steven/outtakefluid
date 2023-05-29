// Start of define date
const date = new Date();
document.getElementById(
  "todayDate"
).innerHTML = `${date.getDate()} /${date.getMonth()} / ${date.getFullYear()}`;
// End of define date

function calculateOuttake(constWeight, todayWeight, magicNumber) {
  return parseInt(todayWeight * 1000 - constWeight * 1000 + magicNumber);
}

function submitOuttake() {
  const cWeight = Number(document.getElementById("constantWeight").value);
  const tWeight = Number(document.getElementById("todayWeight").value);
  const mNumber = Number(document.getElementById("magicNumber").value);
  return (document.getElementById("outTake").innerText = ` ${calculateOuttake(
    cWeight,
    tWeight,
    mNumber
  )}`);
}
