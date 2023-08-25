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

const textContainer = document.querySelector(".text-container");
const lines = [
    "Enabling seamless cloud integration and DevOps practices for efficient and scalable solutions.",
    "Embracing perpetual learning to stay agile in a dynamic tech landscape.",
    "Propelling projects forward with transformative and cutting-edge ideas.",
    "Analyzing complex challenges and devising effective solutions with precision.",
    "Fostering creativity and success through open communication and collaborative spirit.",
    "Streamlining operations through automated infrastructure management.",
    "Implementing continuous integration, continuous deployment, and cloud-based solutions.",
    "Adapting and thriving in a fast-paced environment using agile methodologies.",
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

setInterval(cutOffText, 4000);



  const buttonLink = document.querySelector('.button-link');
  buttonLink.addEventListener('click', () => {
    window.location.href = 'https://www.v16k.com/'; // Replace with your desired URL
  });

