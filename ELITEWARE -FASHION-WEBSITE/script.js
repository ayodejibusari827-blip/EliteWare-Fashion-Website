// MOBILE NAVIGATION 
const menuToggle=
document.getElementById("menuToggle");
const navLinks =
  document.getElementById("navLinks");
  
  menuToggle.addEventListener("click",function() {
    navLinks.classList.toggle("active");
    const isOpen =
    navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded" , isOpen);
  });

  // CLOSE MENU AFTER CLICKING A LINK
  document.querySelectorAll(".nav-links a")
.forEach(function (link) {
  link.addEventListener("active"
    function () {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded"
     , "false" );
    });
});

// CONTACT FORM VALIDATION
const contactForm =
document.getElementById("contactForm");
contactForm.addEventListener("submit",
  function (event) {
    event.preventDefault();
    const name =
    document.getElementById("name").vault.trim();
    const email =
    document.getElementById("email").value.trim();
    const subject =
    document.getElementById("subject").value.trim();
    const message =
    document.getElementById("message").value.trim();
    const formStatus =
    document.getElementById("formStatus");

    if (!name ||  !email || !subject || !message) {
      formStatus.textContent =
      "Please complete all fields.";
      formStatus.style.color = "red";
      return;
    }
    if
    (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))  {
      formStatus.textContent =
      "Please enter a valid email address.";
      formStatus.style.color ="red";
      return;
    }
    formStatus.textContent =
    "Your form has been validated successfully";
    formStatus.style.color = "green";
    contactForm.reset();
  });
