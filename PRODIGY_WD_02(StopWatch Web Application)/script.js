// Navbar Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Stopwatch Elements
const display = document.getElementById("stopwatch-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const lapBtn = document.getElementById("lap-btn");
const lapsContainer = document.getElementById("laps");

let timer = null;
let isRunning = false;
let time = 0;

// Function to update stopwatch display
function displayTime() {
  const ms = time % 1000;
  const s = Math.floor((time / 1000) % 60);
  const m = Math.floor((time / 1000 / 60) % 60);
  display.innerText = `${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}:${ms.toString().padStart(3, "0")}`;
}

// Start Timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startBtn.disabled = true; // Disable Start Button
    pauseBtn.disabled = false; // Enable Pause Button
    resetBtn.disabled = false; // Enable Reset Button
    lapBtn.disabled = false;   // Enable Lap Button

    timer = setInterval(() => {
      time += 10;
      displayTime();
    }, 10);
  }
}

// Pause Timer
function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false; // Enable Start Button
    pauseBtn.disabled = true;  // Disable Pause Button
  }
}

// Reset Timer
function resetTimer() {
  clearInterval(timer);
  time = 0;
  isRunning = false;
  displayTime();

  // Reset Buttons
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
  lapBtn.disabled = true;

  lapsContainer.innerHTML = ""; // Clear Lap List
}

// Add Lap Time
function addLap() {
  const lapItem = document.createElement("li");
  lapItem.innerText = `Lap: ${display.innerText}`;
  lapsContainer.appendChild(lapItem);
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);

// Initialize the display and buttons
displayTime();
pauseBtn.disabled = true;
resetBtn.disabled = true;
lapBtn.disabled = true;
