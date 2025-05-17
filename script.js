const display = document.getElementById('display');
const historyList = document.getElementById('history');
const themeToggle = document.getElementById('themeToggle');

function append(value) {
  display.value += value;
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;

    // Save to history
    const li = document.createElement('li');
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = '';
}

function clearHistory() {
  historyList.innerHTML = '';
}

// Theme toggle
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeToggle.checked);
});
