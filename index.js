const display = document.getElementById("display");

function number(i) {
  display.value += i;
}

function calc() {
  try {
    let expression = display.value.replace("%", "/100");
    display.value = eval(expression);
  } catch (err) {
    alert("Noto`g`ri formatdan foydalanildi");
    // display.value = "";
  }
}

function clearAll() {
  display.value = "";
}

function clearOne() {
  display.value = display.value.slice(0, -1);
}

function percent() {
  display.value += "%";
}

function spc() {
  key = event.key;

  if (key >= 0 && key <= 9) {
    number(key);
  } else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "e" ||
    key === "E"
  ) {
    number(key);
  } else if (key === "Enter") {
    calc();
  } else if (key === "Backspace") {
    clearOne();
  } else if (key === "Escape") {
    clearAll();
  } else if (key === "%") {
    percent();
  }
}
document.addEventListener("keydown", spc);
