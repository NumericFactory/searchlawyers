// Exemple utilisation API 
// https://app.feedbacklawyers.com/api/specialties
// https://app.feedbacklawyers.com/api/users
// https://app.feedbacklawyers.com/api/ratings?status[]=approved (pending,approved)
// https://app.feedbacklawyers.com/api/companies

let users;
let ratings;
let specialties;

let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
let searchInput = document.querySelector('#search');
let router = document.querySelector('#router');

/*
 AFFICHER LA VUE users ou ratings ou specialties
*/
async function showPage(template) {
   console.log(template); // homeTemplate - usersTemplate - ratingsTemplate- specialtiesTemplate

   if (template == 'usersTemplate') {
      users = await getUsers();
      let template = printUsersTemplate(users);
      router.innerHTML = template;
   }
   else if (template == 'specialtiesTemplate') {
      specialties = await getSpecialties();
      let template = printSpecialtiesTemplate(specialties);
      router.innerHTML = template;
   }
   else if (template == 'ratingsTemplate') {
      ratings = await getRatings();
      let template = printRatingsTemplate(ratings);
      router.innerHTML = template;
   }
   else if (template = 'homeTemplate') {
      let template = printHome();
      router.innerHTML = template;
   }
} // Fin function showPage()



/*
   onUserSearch()
*/
async function onUserSearch(event) {
   let term = event.target.value;
   if (term.trim().length < 3) {
      document.querySelector('#searchList').innerHTML = '';
   }
   else {
      document.querySelector('#searchList').innerHTML = '<p>Recherche en cours...</p>';
      let companies = await getCompaniesOnSearch(term);
      console.log(companies);

      if (companies.length > 0) {
         let template = printSearchLawyersListTemplate(companies);
         document.querySelector('#searchList').innerHTML = template;

         // event on li.result
         let items = document.querySelectorAll('li.result');
         for (let item of items) {
            item.addEventListener('click', getCompanyData);
         }
      }
      else {
         document.querySelector('#searchList').innerHTML = '<p>Pas de résulat</p>'
      }
   }
}


/**
  getCompanyData()
*/
function getCompanyData() {
   let infos = JSON.parse(this.dataset.infos);
   console.log(infos);
}



/*
 Detect click on navigation links
 and print template in <div id="router">
*/
for (let navLink of navLinks) {
   navLink.addEventListener('click', function () { showPage(navLink.dataset.route) });
}

searchInput.addEventListener('keyup', function () { onUserSearch(event) })

// Afficher la page accueil au démarrage
router.innerHTML = printHome();