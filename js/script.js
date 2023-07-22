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

function hideFullMenu() {
  const fullMenuElements = document.getElementsByClassName("full-menu");

  // Convert the HTMLCollection to an array so we can use forEach
  const fullMenuArray = Array.from(fullMenuElements);

  // Set display none for each element
  fullMenuArray.forEach(element => {
    element.style.display = "none";
  });
}

// Scrolling to About

const scrollToAbout = () => {
  document.getElementById("landingText").classList.add("slide-out-bottom");
  document.getElementById("landingImage").classList.add("slide-out-bottom");
  document.getElementById("videoBtn").style.display = "none";
  hideFullMenu()
  setTimeout(() => {
    document.getElementById("one").style.display = "none";
    document.getElementById("tow").style.display = "flex";
  }, 500);
  // setTimeout(() => {
  //   document.getElementById("landingText").classList.remove("slide-out-bottom");
  //   document
  //     .getElementById("landingImage")
  //     .classList.remove("slide-out-bottom");
  // }, 2000);

  // document.getElementById("aboutLeft").classList.add("bounce-in-left");
  // document.getElementById("aboutRight").classList.add("bounce-in-right");
  document.getElementById("aboutLeft").classList.add("slide-in-left");
  document.getElementById("aboutRight").classList.add("slide-in-right");

  document.getElementById("toolkitImages").style.display = "none";

  setTimeout(() => {
    document.getElementById("toolkitImages").style.display = "flex";
  }, 1000);
};

// Scroll to Project Page
const scrollProjects = () => {
  document.getElementById("aboutLeft").classList.remove("slide-in-left");
  document.getElementById("aboutRight").classList.remove("slide-in-right");
  document.getElementById("aboutLeft").classList.add("slide-out-left");
  document.getElementById("aboutRight").classList.add("slide-out-right");

  document.getElementById("three").style.display = "flex";
  document.getElementById("tow").style.background = "transparent";
  setTimeout(() => {
    document.getElementById("tow").style.display = "none";
  }, 1000);
};

// Scrolling to contact

const scrollContact = () => {
  document.getElementById("four").style.display = "flex";
  document.getElementById("contactForm").classList.add("slide-in-right");
  document.getElementById("contactImage").classList.add("slide-in-left");

  setTimeout(() => {
    document.getElementById("three").style.display = "none";
  }, 3000);
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

  const typeCharacter = () => {
    if (i < content.length) {
      element.innerHTML += content.charAt(i);
      i++;

      // Check for <br> tags and add a line break
      if (content.charAt(i) === "<" && content.substring(i, i + 4) === "<br>") {
        element.innerHTML += "<br> <br>";
        i += 4;
      }

      setTimeout(typeCharacter, 1);
    } else {
      document.getElementById("wannaKnow2").style.display = "flex";
    }
  };

  typeCharacter();
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
// if (window.addEventListener) {
//   // For modern browsers
//   window.addEventListener("wheel", disableScrollWheel, { passive: false });
// } else {
//   // For older versions of IE
//   window.attachEvent("onwheel", disableScrollWheel);
// }

// For Contact Page

function sendLetter() {
  document.getElementById("sent").classList.add("sent");
  document.getElementById("sendLetter").style.display = "none";

  setTimeout(() => {
    document.getElementById("result-message").style.display = "block";
    document.getElementById("result-message").classList.add("fade-in-bottom");
    startWhatsAppChat();
    document.getElementById("sendLetter").style.display = "inline";
  }, 2000);

  setTimeout(() => {
    startWhatsAppChat();
    document.getElementById("sendLetter").style.display = "inline";
  }, 4000);
}

// Intro video display none

window.addEventListener("DOMContentLoaded", function () {
  var article = document.getElementById("introVideo");
  var iframe = article.querySelector("iframe");

  article.addEventListener("click", function (event) {
    if (event.target !== iframe) {
      article.style.display = "none";

      document.getElementById("one").removeAttribute("style");
      document.getElementById("tow").removeAttribute("style");
      document.getElementById("three").removeAttribute("style");
      document.getElementById("four").removeAttribute("style");

      stopYouTubeVideo();
    }
  });

  function stopYouTubeVideo() {
    iframe.src = iframe.src;
  }
});

// Intro video display

const showIntro = () => {
  document.getElementById("introVideo").style.display = "flex";

  document.getElementById("one").style.height = "100vh";
  document.getElementById("tow").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
};

// Open Whatsapp

function startWhatsAppChat() {
  var phoneNumber = "+94764588828";
  var name = document.getElementById("contactName").value;
  var message = document.getElementById("contactMessage").value;

  // Format the WhatsApp message
  var whatsappMessage = "Hello, let's chat!";
  if (name.trim() !== "" || message.trim() !== "") {
    whatsappMessage = "Hi";
    if (name.trim() !== "") {
      whatsappMessage += ", my name is " + name.trim();
    }
    if (message.trim() !== "") {
      whatsappMessage += "\n\n" + message.trim();
    }
  }

  // Encode the WhatsApp message
  var encodedMessage = encodeURIComponent(whatsappMessage);

  // Create the WhatsApp chat link
  var link = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

  // Open the link in a new tab or redirect the current page
  // window.open(link, "_blank");
  window.location.href = link;
}

// Send Email

document
  .getElementById("sendEmailButton")
  .addEventListener("click", function () {
    // Retrieve values from input fields or any other necessary data
    var recipient = "info.dinujaya@gmail.com";
    var subject = "Hello, Dinujaya";
    var body = "Let's talk";

    // Construct the email URL for Gmail
    var emailUrl =
      "https://mail.google.com/mail/?view=cm&to=" +
      recipient +
      "&su=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Open Gmail in a new tab
    window.open(emailUrl, "_blank");
  });
