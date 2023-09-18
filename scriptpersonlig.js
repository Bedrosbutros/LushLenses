// animation 

const popup = () => {
    const popups = document.querySelectorAll(".popup");
    
    for (let i = 0; i < popups.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = popups[i].getBoundingClientRect().top;
        const elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
            popups[i].classList.add("active");
        }
        else {
            popups[i].classList.remove("active");
        }
    }
  }
  
  window.addEventListener("scroll", popup);
  