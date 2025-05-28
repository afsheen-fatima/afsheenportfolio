// script.js

// Typing animation
const typingText = document.getElementById("typing-text");
const phrases = [
  "ECE Student",
  "Tech Explorer",
  "Dreamer ✨",
  "Future Innovator"
];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const current = phrases[i];
  if (!isDeleting) {
    typingText.textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingText.textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();

// Dark mode toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
};
backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Load particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: ["#ff49a8", "#9b5de5"] },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 1.5 },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});// Toggle chatbot popup
const toggleBtn = document.getElementById("chatbot-toggle");
const popup = document.getElementById("chatbot-popup");
const closeBtn = document.getElementById("chatbot-close");

toggleBtn.onclick = () => popup.style.display = "flex";
closeBtn.onclick = () => popup.style.display = "none";

// Send message
const sendBtn = document.getElementById("chatbot-send");
const inputField = document.getElementById("chatbot-input");
const chatBody = document.getElementById("chatbot-body");

sendBtn.onclick = () => {
  const userMsg = inputField.value.trim();
  if (userMsg) {
    appendMessage("user", userMsg);
    inputField.value = "";
    setTimeout(() => {
      const reply = getBotReply(userMsg);
      appendMessage("bot", reply);
    }, 500);
  }
};

function appendMessage(sender, msg) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender + "-message");
  msgDiv.innerText = msg;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(input) {
  const msg = input.toLowerCase();
  if (msg.includes("resume")) return "You can download Afsheen's resume using the blue button!";
  if (msg.includes("projects")) return "Check out the Projects section above 💡";
  if (msg.includes("contact")) return "Use the Contact section to reach out to Afsheen directly!";
  return "Thanks for your message! 😊";
}

function getBotReply(input) {
  const msg = input.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) return "Hey there! 👋 How can I assist you today?";
  if (msg.includes("resume")) return "You can click the blue 'Download Resume' button to get my resume.";
  if (msg.includes("projects")) return "Sure! Scroll to the Projects section to explore what I've built.";
  if (msg.includes("skills")) return "I’ve listed my key skills like Arduino, Python, C, AI Tools, and more!";
  if (msg.includes("contact") || msg.includes("email")) return "You can use the Contact form or reach me via Instagram, WhatsApp, or LinkedIn 💬";
  if (msg.includes("certificate")) return "You can find my certificates under the Certificates section 📜";
  if (msg.includes("help") || msg.includes("how")) return "I’m here to guide you around the portfolio. Ask me about resume, skills, projects, contact, etc.";
  if (msg.includes("bye")) return "Goodbye! Have a great day 🌟";

  return "Hmm... I didn’t get that, but you can ask me about resume, skills, projects, contact etc.";
}
const ding = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_bdcf1fca26.mp3"); // free sound

function appendMessage(sender, msg) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender + "-message");
  msgDiv.innerText = msg;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;

  if (sender === "bot") ding.play();
}
