// Exemple utilisation API 
// https://app.feedbacklawyers.com/api/specialties
// https://app.feedbacklawyers.com/api/users
// https://app.feedbacklawyers.com/api/ratings?status[]=approved (pending,approved)
// https://app.feedbacklawyers.com/api/companies
// https://app.feedbacklawyers.com/api/companies/search?pattern=fred

/*******************************
 AJAX URL API & OPTIONS HEADERS
*******************************/
const BASE_URL = 'https://app.feedbacklawyers.com/api';
let myHeaders = new Headers({
   'Authorization': 'Bearer f4060e1e04a99ff653a416f77a41b244:487394cbbf641cad56e31a4f2f7957c5e72ab4f9015793a62f8bb1717e2278f1e8dd0ea9b171cd365d8ff19ef12c1d26f5b6d6883605fd5075fcc6f732d0f8f3511449ee24e6f3aee2ad813eb6c49a51f025a6f559cb8161ef5ad2e316956c6d0345f19226b68f86582a9feff592a4f4',
   'Content-Type': 'application/json'
});


/***************************
 CALL API / Get Array of users from API 
***************************/
async function getUsers() {
   // 1 faire une request à l'API et récupérer les resultats
   let response = await fetch(BASE_URL + '/users', {
      headers: myHeaders,
      method: 'GET'
   });
   let res = await response.json();
   return res.users;
}


/*********************************
 CALL API / Get Array of specialties from API 
*********************************/
async function getSpecialties() {
   // 1 faire une request à l'API et récupérer les resultats
   let response = await fetch(BASE_URL + '/specialties', {
      headers: myHeaders,
      method: 'GET'
   });
   let res = await response.json();
   return res.specialties;
}

/*********************************
 CALL API / Get Array of ratings from API 
*********************************/
async function getRatings() {
   // 1 faire une request à l'API et récupérer les resultats
   let response = await fetch(BASE_URL + '/ratings', {
      headers: myHeaders,
      method: 'GET'
   })
   let res = await response.json();
   return res.ratings;
}

/*****************************************************************
 CALL API / Get Array of companies from API (firstName, lastName, speciality)
*****************************************************************/
async function getCompaniesOnSearch(term) {
   // 1 faire une request à l'API et récupérer les resultats
   let response = await fetch(BASE_URL + '/companies/search?pattern=' + term, {
      headers: myHeaders,
      method: 'GET'
   })
   let res = await response.json();
   return res.companies;
}



