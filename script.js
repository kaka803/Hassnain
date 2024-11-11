var typed = new Typed("#typing-effect", {
    strings: ["Hassnain"],
    typeSpeed: 100,   // Typing speed in milliseconds
    backSpeed: 50,   // Backspacing speed
    loop: true       // Loop the typing effect
  });



  let navbtn = document.querySelector('.nav-toggle');
  let navlinks = document.querySelector('.nav-links ul')
  navbtn.addEventListener("click" , () => {
    navlinks.classList.toggle("active")
  })

