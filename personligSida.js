const { createApp } = Vue

createApp({
    data() {
        return {
            projectsSofie: [] // En tom array som kommer att hålla projektdata
        }
    },
    // Denna del av koden körs när komponenten skapas
        created() {
            // Gör en HTTP GET-förfrågan med Axios för att hämta data från 'projects.json'
            axios.get('projects.json') 
            .then((response) => {
                // När svar mottages, uppdatera 'projects' datan med den hämtade projektlistan
                this.projectsSofie = response.data.projectsSofie;
            }) 
      }
  }).mount('#sofieApp')

  
createApp({
  data() {
      return {
          projectsJossan: [] // En tom array som kommer att hålla projektdata
      }
  },
  // Denna del av koden körs när komponenten skapas
      created() {
          // Gör en HTTP GET-förfrågan med Axios för att hämta data från 'projects.json'
          axios.get('projects.json') 
          .then((response) => {
              // När svar mottages, uppdatera 'projects' datan med den hämtade projektlistan
              this.projectsJossan = response.data.projectsJossan;
          }) 
    }
}).mount('#jossanApp')


createApp({
    data() {
        return {
            projectsMartin: [] // En tom array som kommer att hålla projektdata
        }
    },
    // Denna del av koden körs när komponenten skapas
        created() {
            // Gör en HTTP GET-förfrågan med Axios för att hämta data från 'projects.json'
            axios.get('projects.json') 
            .then((response) => {
                // När svar mottages, uppdatera 'projects' datan med den hämtade projektlistan
                this.projectsMartin = response.data.projectsMartin;
            }) 
      }
  }).mount('#martinApp')


  createApp({
    data() {
        return {
            projectsBedros: [] // En tom array som kommer att hålla projektdata
        }
    },

    methods: {
        renderText(text) { 
            return text.replace(/\n/g, "<br>"); // Ersätter ny rad karakärer i HTML med line breaks
        }
    },

    // Denna del av koden körs när komponenten skapas
        created() {
            // Gör en HTTP GET-förfrågan med Axios för att hämta data från 'projects.json'
            axios.get('projects.json') 
            .then((response) => {
                // När svar mottages, uppdatera 'projects' datan med den hämtade projektlistan
                this.projectsBedros = response.data.projectsBedros;
            }) 
      },

      
  }).mount('#bedrosApp')

  
// Animation

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

