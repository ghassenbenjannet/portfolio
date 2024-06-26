const urlParams = new URLSearchParams(window.location.search);
let lang = urlParams.get('lang') || 'en';

function loadContentFromUrl() {
   loadContent(lang);
   loadVideo(lang);
}

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
           jsonFile = 'assets/json/en.json'; 
           break;
   }

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
   document.getElementById('name').setAttribute('placeholder', data.contact.form.name);
   document.getElementById('email').setAttribute('placeholder', data.contact.form.email);


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
   const youtubeEmbed = document.getElementById('youtube-embed');
   switch (language) {
      case 'fr':
         youtubeEmbed.src = 'https://www.youtube.com/embed/jV_ngc_tj2M?si=2-ynrG58gfqMcZod';
         youtubeEmbed.style.display = 'block';
         break;
      case 'ar':
         youtubeEmbed.src = 'https://www.youtube.com/embed/uJiV8DadRQw?si=lXbbCNTc2VGeagKH';
         youtubeEmbed.style.display = 'block';
         break;
      default:
         youtubeEmbed.src = 'https://www.youtube.com/embed/-EtirKBzvAQ?si=qhAx9C906lHnjL0p';
         youtubeEmbed.style.display = 'block';
         break;
   }

}
