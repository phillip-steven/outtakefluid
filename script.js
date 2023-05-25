// Start of define date
const a = new Date();
document.getElementById(
  "todayDate"
).innerHTML = `${a.getDate()} /${a.getMonth()} / ${a.getFullYear()}`;
// End of define date

function calculateOuttake(constWeight, magicNumber, todayWeight) {
  return parseInt(todayWeight * 1000 - constWeight * 1000 + magicNumber);
}

function submitOuttake() {
  const cWeight = document.getElementById("constantWeight").value;
  const tWeight = document.getElementById("todayWeight").value;
  return (document.getElementById(
    "outTake"
  ).innerHTML = `Cairan yang harus ditarik: ${calculateOuttake(
    cWeight,
    700,
    tWeight
  )}`);
}
