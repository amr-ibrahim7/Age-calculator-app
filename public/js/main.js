const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
let inputs = Array.from(document.querySelectorAll("input"));

const dayOutput = document.getElementById("daysView");
const monthOutput = document.getElementById("monthsView");
const yearOutput = document.getElementById("yearView");
let dayValue, monthValue, yearValue;
let inputHolders = document.querySelectorAll("#inputFields > div");
const inputsHolder = document.getElementById("inputFields");
const btn = document.getElementById("mainButton");

const dayHolder = document.getElementById("dayHolder");
const monthHolder = document.getElementById("monthHolder");
const yearHolder = document.getElementById("yearHolder");

let currentYear = new Date().getFullYear();
let currentDate = new Date();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

let valid = "false";

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  startOperation();
});

window.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    startOperation();
  }
});

function startOperation() {
  checkForError(document.querySelectorAll("input"));
  if (valid === "true") {
    showData();
  } else {
    showDefaultData();
  }
}

function checkForError(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputHolders[i].classList.add("empty");
    }
  }
  if (dayInput.value > 30 || dayInput.value < 1) {
    dayHolder.classList.add("error");
  }
  if (monthInput.value > 12) {
    monthHolder.classList.add("error");
  }
  if (yearInput.value > currentYear || yearInput.value < 1) {
    yearHolder.classList.add("error");
  }
  checkWholeForm();
}

function checkWholeForm() {
  let count = 0;
  inputHolders.forEach((e) =>
    e.classList.contains("error")
      ? (count += 1)
      : e.classList.contains("empty")
      ? (count += 1)
      : (count += 0)
  );
  if (count >= 3) {
    inputsHolder.classList.add("whole");
    valid = "false";
    showDefaultData();
  } else if (count > 0) {
    valid = "false";
    showDefaultData();
  } else if (count === 0) {
    valid = "true";
  }
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", () => {
    inputHolders[i].classList.remove("empty", "error");
    inputsHolder.classList.remove("whole");
  });
}

function collectData(day, month, year) {
  yearValue = currentYear - year;
  monthValue = currentMonth - month;
  dayValue = currentDay - day;

  if (monthValue < 0 || (monthValue === 0 && dayValue < 0)) {
    yearValue--;
  }

  if (monthValue < 0) {
    monthValue += 12;
  }

  if (dayValue < 0) {
    const prevMonthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
    monthValue--;
    dayValue += prevMonthDays;
  }

  return {
    years: yearValue,
    months: monthValue,
    days: dayValue,
  };
}

function showData() {
  collectData(dayInput.value, monthInput.value, yearInput.value);
  dayOutput.innerHTML = 0;
  monthOutput.innerHTML = 0;
  yearOutput.innerHTML = 0;
  let daysUp = setInterval(() => {
    dayOutput.innerHTML++;
    if (dayOutput.innerHTML >= dayValue) {
      clearInterval(daysUp);
    }
  }, 30);
  let monthUp = setInterval(() => {
    monthOutput.innerHTML++;
    if (monthOutput.innerHTML >= monthValue) {
      clearInterval(monthUp);
    }
  }, 30);
  let yearUp = setInterval(() => {
    yearOutput.innerHTML++;
    if (yearOutput.innerHTML >= yearValue) {
      clearInterval(yearUp);
    }
  }, 30);
}
function showDefaultData() {
  dayOutput.innerHTML = "- -";
  monthOutput.innerHTML = "- -";
  yearOutput.innerHTML = "- -";
}
