const inserted = document.getElementById("myInput");
inserted.addEventListener("input", function (event) {
  let converted = event.target.value;
  let dollarValue = document.getElementById("dollarId");
  dollarValue.innerHTML = converted * 365;
  let poundsValue = document.getElementById("poundsId");
  poundsValue.innerHTML = converted * 420;
  let inrValue = document.getElementById("inrId");
  inrValue.innerHTML = converted * 74.14;
});
