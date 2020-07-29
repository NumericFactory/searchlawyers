/*************************************************************
 LES TEMPLATES HTML 
 les 3 fonctions qui suivent retournent un template HTML
 
 0 printHome()
 1 printUsersTemplate() affiche la liste des utilisateurs
 2 printRatingsTemplate() affiche la liste des avis clients
 3 printSpecialtiesTemplate() affiche la liste des spécialités
 4 printSearchLawyersListTemplate()
**************************************************************/

/*
 1 La Liste des utilisateur (ul>li)
*/
function printUsersTemplate(users) {
   console.log(users);
   return `<ul class="list-group">
      ${users.map(user => `<li class="list-group-item">${user.firstName} ${user.lastName.toUpperCase()}</br>${user.emailAddress}</li>`).join('')}
      </ul>`;
}

/*
 2 La Liste des avis (ul>li)
*/
function printRatingsTemplate(ratings) {
   console.log(ratings);
   return `
<div class="row d-flex">
${ratings.map(rating => `
<div class="col-12 col-md-6">
   <div style="height:100%; width:100%" class="card">
      <div class="card-body d-flex flex-column justify-content-between">
         <h5 class="card-title d-flex justify-content-between">
         <span>${rating.companyLead.cabName ? rating.companyLead.cabName : ''}</span> 
         <span>${rating.rating}/5</span>
         </h5>
         <p class="card-text">${rating.comment ? rating.comment : ''}</p>
         <p><small>${rating.sourceUser ? rating.sourceUser.firstName : ''}</small></p>
      </div>
   </div>
</div>
`).join('')}
</div>
   `;
}

/*
 3 La Liste des specialités (ul>li)
*/
function printSpecialtiesTemplate(specialties) {
   console.log(specialties);
   return `<ul class="list-group">
      ${specialties.map(specialty => `<li class="list-group-item">${specialty.displayFrFr}</li>`).join('')}
      </ul>`;
}

/*
 4 La Liste des avocats (ul>li)
*/
function printSearchLawyersListTemplate(companies) {
   console.log(companies);
   return `
      ${companies.map(company => `

      <li data-infos='${JSON.stringify(company)}' class="list-group-item result list-group-item-action flex-column align-items-start">
         <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"> ${company.firstName ? company.firstName : ''} ${company.lastName ? company.lastName : ''}</h5>
            <small style="color:blue" class="text-muted">voir</small>
         </div>
         <p style="line-height:15px" class="mb-1">
            <small class="text-muted">
            ${company.workAddressLine1 ? company.workAddressLine1 + '</br>' : ''}
            ${company.workAddressZipcode ? company.workAddressZipcode + ' ' : ''}
            ${company.workAddressCity ? company.workAddressCity + ' / ' : ''}
            ${company.workAddressCountry ? company.workAddressCountry : ''}
            </small>
         </p>
      </li>`)
         .join('')}
     `;
}

/*
 0 home Page
*/
function printHome() {
   return `<h1>exemples d'utilisation de l'API FeedbackLawyers</h1>
   <a target="_blank" href="http://dev.feedbacklawyers.com/api/help/">Documentation de l'API</a>
   <hr>
   <p>/specialties <br>
      Renvoie la liste de spécialités
   </p>

   <p>/users<br>
      Renvoie la liste des users</p>
   <p>/ratings?status[]=approved (pending,approved)<br>
      Renvoie la liste des avis clients
   </p>
   <p>/companies/1045<br>
      Renvoie le détail d'une compagnie</p>

   <hr>

   <h2>apicalls.js</h2>
   <p>Création des functions chargées de faire des requests Ajax</p>
   <ul>
      <li>getUsers()</li>
      <li>getSpecialties()</li>
      <li>getRatings()</li>
   </ul>
   <p>Ces fonctions renvoient des promises.<br>
      On les utilise dans le code principal pour faire les requests
      Ajax, réupérer les réponses et afficher les data dans l'interface (div#router)
   </p>
    
   <hr>

   <h2>templates.js</h2>
   <p>Les functions chargées de retourner les template HTML des views home, users, ratings, specialties</p>
   
      
   `
}
