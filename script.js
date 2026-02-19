// Scroll Reveal
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
});

var typed = new Typed(".typing", {
  strings: [
    "Software Engineering Student",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Competitive Programmer"
  ],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});





// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

// Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); 
    navLinks.classList.toggle("active");  
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
});







/* Email Functionality */

document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("GA3xh4uy8kJQt7DSw");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const btn = document.getElementById("send-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;
    status.innerText = "";

    emailjs.sendForm(
      "service_2rp3p2i",
      "template_wjx11d9",
      form
    ).then(function () {

      status.innerText = "✅ Message sent successfully!";
      status.style.color = "#00f2ff";

      btn.innerText = "Send Message";
      btn.disabled = false;
      form.reset();

    }, function (error) {

      status.innerText = "❌ Failed to send message.";
      status.style.color = "red";

      btn.innerText = "Send Message";
      btn.disabled = false;

      console.log("EmailJS Error:", error);
    });
  });

});
