const textContainer = document.querySelector(".text-container");
const lines = [
    "Driving Excellence in Cloud Computing and DevOps.",
    "Continuous Learner and Innovative Thinker",
    "Problem-Solver and Collaborative Team Player",
    "Automating Infrastructure, CI/CD, and Cloud Solutions.",
    "Agile Methodologies",
];
let currentIndex = 0;

function showNextLine() {
    textContainer.innerHTML = `<div class="line">
                                <span>${lines[currentIndex]}</span>
                              </div>`;
    currentIndex = (currentIndex + 1) % lines.length;
}

function cutOffText() {
    textContainer.innerHTML = `<div class="line cut-off">
                                <span>${lines[currentIndex]}</span>
                              </div>`;
    setTimeout(showNextLine, 1000);
}

setInterval(cutOffText, 2000);



const typingText = document.getElementById('typing-text');
const text = "Viswanadha Shashank";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

type();

/*
const typingText = document.getElementById('typing-text');
const text = "Viswanadha Shashank";
const v16kText = "v16k";
let index = 0;
let isV16k = false;

function type() {
  if (!isV16k && index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50);
  } else if (!isV16k) {
    isV16k = true;
    cutOffAndChangeText(v16kText);
  } else {
    eraseText();
  }
}

function eraseText() {
  if (typingText.innerHTML.length > 0) {
    typingText.innerHTML = typingText.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    isV16k = false;
    index = 0;
    setTimeout(type, 2000); // Start typing "Viswanadha Shashank" again
  }
}

function cutOffAndChangeText(newText) {
  setTimeout(() => {
    typingText.innerHTML = newText;
    setTimeout(type, 2000); // Start erasing "v16k"
  }, 1000); // Display "v16k" for 1 second
}

type();
*/