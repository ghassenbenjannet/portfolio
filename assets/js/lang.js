const urlParams = new URLSearchParams(window.location.search);
let lang = urlParams.get('lang') || 'en';

function loadContentFromUrl() {
   // Récupérer le paramètre de langue depuis l'URL
    // Si le paramètre lang n'est pas défini, par défaut 'en'

   // Charger le contenu en fonction de la langue détectée
   loadContent(lang);
   loadVideo(lang);
}

// Fonction pour charger le contenu en fonction de la langue sélectionnée
function loadContent(language) {
   let jsonFile;
   switch (language) {
       case 'fr':
           jsonFile = 'assets/json/fr.json';
           break;
       case 'en':
           jsonFile = 'assets/json/en.json';
           break;
       case 'ar':
           jsonFile = 'assets/json/ar.json';
           break;
       default:
           jsonFile = 'assets/json/en.json'; // Par défaut, charger l'anglais
           break;
   }

   // Charger le fichier JSON
   fetch(jsonFile)
      .then(response => {
         if (!response.ok) {
               throw new Error('Network response was not ok');
         }
         return response.json();
      })
      .then(data => {
         updateContent(data, language);
      })
      .catch(error => {
         console.error('Error fetching data:', error);
      });
}

// Fonction pour mettre à jour les éléments HTML avec les données du JSON
function updateContent(data ,lang) {
   // Mettre à jour le titre de la page
   document.getElementById('page-title').textContent = data.title;

   // Mettre à jour les éléments du menu de navigation
   document.getElementById('nav-home').textContent = data.nav.home;
   document.getElementById('nav-work').textContent = data.nav.work;
   document.getElementById('nav-info').textContent = data.nav.info;
   document.getElementById('nav-services').textContent = data.nav.services;
   document.getElementById('nav-contact').textContent = data.nav.contact;

   // Mettre à jour la section Accueil (Home)
   document.getElementById('home-name').textContent = data.home.name;
   document.getElementById('home-profession').textContent = data.home.profession;

   // Mettre à jour la section Travaux (Work)
   document.getElementById('work-title').textContent = data.work.title;

   // Mettre à jour la section Mes Infos (Info)
   document.getElementById('info-title').textContent = data.info.title;
   document.getElementById('about-title').innerHTML = data.info.about.title;
   document.getElementById('about-description').innerHTML = data.info.about.description;
   document.getElementById('about-button').textContent = data.info.about.button;

   // Mettre à jour la section Expérience (Experience)
   document.getElementById('experience-title').textContent = data.info.experience.title;
   const experienceContent = document.getElementById('experience-content');
   experienceContent.innerHTML = '';
   data.info.experience.companies.forEach(company => {
      const experienceItem = document.createElement('div');
      experienceItem.classList.add('experience__item');
      experienceItem.innerHTML = `
         <h4 class="experience__company">${company.name}</h4>
         <p class="experience__role">${company.role}</p>
         <p class="experience__date">${company.date}</p>
         <p class="experience__description">${company.description}</p>
      `;
      experienceContent.appendChild(experienceItem);
   });

   // Mettre à jour la section Compétences (Skills)
   document.getElementById('skills-title').textContent = data.info.skills.title;

   // Mettre à jour la section Services
   document.getElementById('services-title').textContent = data.services.title;
   const servicesContainer = document.getElementById('services-container');
   servicesContainer.innerHTML = '';
   data.services.list.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.classList.add('services__content');
      serviceItem.innerHTML = `
         <h3 class="services__title">${service.name}</h3>
         <p class="services__description">${service.description}</p>
      `;
      servicesContainer.appendChild(serviceItem);
   });

   // Mettre à jour la section Contactez-moi (Contact)
   document.getElementById('contact-title').textContent = data.contact.title;
   document.getElementById('send-message').textContent = data.contact.form.send;
   document.getElementById('message').setAttribute('placeholder', data.contact.form.message);

   // Mettre à jour les réseaux sociaux
   document.getElementById('footer-copy').innerHTML = data.footer.copy;

   loadVideo(lang);
}

loadContentFromUrl();

document.querySelectorAll('.flag-icon').forEach(flag => {
   flag.addEventListener('click', function(event) {
      event.preventDefault();
      lang = this.getAttribute('href').split('=')[1]; 
      loadContent(lang); 
      history.replaceState({}, '', this.getAttribute('href'));
   });
});


function loadVideo(language) {
  const videoSource = document.getElementById('video-source');
  switch (language) {
      case 'fr':
          videoSource.src = 'assets/videos/fr.mp4';
          break;
      case 'en':
          videoSource.src = 'assets/videos/en.mp4';
          break;
      case 'ar':
          videoSource.src = 'assets/videos/ar.mp4';
          break;
      default:
          videoSource.src = 'assets/videos/en.mp4'; // Par défaut, charger la vidéo en anglais
          break;
  }

  document.getElementById('work-video').load();
}