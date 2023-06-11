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

// Scrolling to About

const scrollToAbout = async () => {
  document.getElementById("landingText").classList.add("slide-out-bottom");
  document.getElementById("landingImage").classList.add("slide-out-bottom");
  await setTimeout(() => {
    document.getElementById("one").style.display = "none";
    document.getElementById("tow").style.display = "flex";
  }, 500);
  // setTimeout(() => {
  //   document.getElementById("landingText").classList.remove("slide-out-bottom");
  //   document
  //     .getElementById("landingImage")
  //     .classList.remove("slide-out-bottom");
  // }, 2000);

  document.getElementById("aboutLeft").classList.add("bounce-in-left");
  document.getElementById("aboutRight").classList.add("bounce-in-right");
  document.getElementById("toolkitImages").style.display = "none";

  setTimeout(() => {
    document.getElementById("toolkitImages").style.display = "flex";
  }, 1000);
};

// For Peragraph

// About Typing
const aboutTyping = (id) => {
  let element = document.getElementById(id);
  element.style.display = "block";
  let content = element.innerHTML;
  element.innerHTML = "";

  document.getElementById("wannaKnow").style.display = "none";

  let i = 0;
  let typingInterval = setInterval(function () {
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
      document.getElementById("wannaKnow2").style.display = "flex"; // Set display none after typing animation
    }
  }, 20);
};

// Scroll to Project Page
const scrollProjects = () => {
  document.getElementById("aboutLeft").classList.add("slide-out-left");
  document.getElementById("aboutRight").classList.add("slide-out-right");

  setTimeout(() => {
    document.getElementById("tow").style.display = "none";
    document.getElementById("three").style.display = "flex";
  }, 1000);
};

// Function to disable mouse scroll wheel
// function disableScrollWheel(event) {
//   event = event || window.event;

//   if (event.preventDefault) {
//     event.preventDefault();
//   } else {
//     event.returnValue = false; // For older browsers
//   }
// }

// Attach the event listener to the document
if (window.addEventListener) {
  // For modern browsers
  window.addEventListener("wheel", disableScrollWheel, { passive: false });
} else {
  // For older versions of IE
  window.attachEvent("onwheel", disableScrollWheel);
}
