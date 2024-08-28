const display = document.getElementById("display");

display.value = "0";

function number(i) {
  if (display.value === "0") {
    display.value = i;
  } else {
    display.value += i;
  }
}
function calc() {
  try {
    let expression = display.value.replace("%", "/100").replace("e", "Math.E");
    display.value = eval(expression);
  } catch (err) {
    alert("Noto`g`ri formatdan foydalanildi");
    display.value = "0";
  }
}

function clearAll() {
  display.value = "0";
}

function clearOne() {
  display.value = display.value.slice(0, -1) || "0";
}

function percent() {
  display.value += "%";
}

function spc() {
  key = event.key;

  if (key >= 0 && key <= 9) {
    if (display.value === "0") {
      display.value = key;
    } else {
      display.value += key;
    }
  } else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "e"
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
