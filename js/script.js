// Typing Animation

let typed = new Typed(".technologies", {
  strings: [
    "HTML",
    "CSS",
    "SCSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "SQL",
    "Node JS",
    "Git",
    "Github",
    "Github Desktop",
    "React",
    "Python",
    "Selenium",
    "C#",
    "Electron",
    "Bootstrap",
    "Chakra UI",
    "Material UI",
    "Firebase",
    "MongoDB",
    "Postman API testing",
    "VSCode",
    "Wordpress",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Scroll animation

const scrollAnimation = (
  animationIn,
  animationOut,
  elementClass,
  delay = null
) => {
  const obServer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        delay && (entry.target.style.animationDelay = `${delay}ms`);
        entry.target.classList.remove(animationOut);
        entry.target.classList.add(animationIn);
      } else {
        entry.target.classList.remove(animationIn);
        entry.target.classList.add(animationOut);
      }
    });
  });

  document
    .querySelectorAll(`.${elementClass}`)
    .forEach((el) => obServer.observe(el));
};

scrollAnimation("fade-in-bottom", "fade-out-bottom", "animatedElement");

// About Typing
var element = document.getElementById("pera");
var content = element.innerHTML;
element.innerHTML = "";

var i = 0;
var typingInterval = setInterval(function () {
  if (i < content.length) {
    element.innerHTML += content.charAt(i);
    i++;

    // Check for <br> tags and add a line break
    if (content.charAt(i) === "<" && content.substring(i, i + 4) === "<br>") {
      element.innerHTML += "<br> <br>";
      i += 4;
    }
  } else {
    clearInterval(typingInterval);
  }
}, 50);

// Smooth Scrolling

function smoothScroll(event) {
  // event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}
