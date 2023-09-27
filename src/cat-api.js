import axios from 'axios';

// Funcția pentru a obține matricea de rase
export function fetchBreeds() {
  // Adăugați cheia API ca antet pentru cerere
  axios.defaults.headers.common['x-api-key'] =
    'live_GLv73LQsPRjBhk86ilQF8KiuZLv4o7bf1vUAUEvcHWJt02xXGD9u6EB98hswXYsJ';

  // Returnați o promisiune care rezolvă cu matricea de rase
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

// Funcția pentru a obține informații despre o pisică specifică în funcție de identificatorul rasei
export function fetchCatByBreed(breedId) {
  // Adăugați cheia API ca antet pentru cerere
  axios.defaults.headers.common['x-api-key'] =
    'live_GLv73LQsPRjBhk86ilQF8KiuZLv4o7bf1vUAUEvcHWJt02xXGD9u6EB98hswXYsJ';

  // Returnați o promisiune care rezolvă cu informațiile despre pisică
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      const catData = response.data[0]; // Se presupune că primim un singur rezultat
      return catData;
    })
    .catch(error => {
      throw error;
    });
}

// Backup ==================================================

// import axios from 'axios';

// // Funcția pentru a obține matricea de rase
// export function fetchBreeds() {
//   // Adăugați cheia API ca antet pentru cerere
//   axios.defaults.headers.common['x-api-key'] =
//     'live_GLv73LQsPRjBhk86ilQF8KiuZLv4o7bf1vUAUEvcHWJt02xXGD9u6EB98hswXYsJ';

//   // Returnați o promisiune care rezolvă cu matricea de rase
//   return axios
//     .get('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       throw error;
//     });
// }

// // Funcția pentru a obține informații despre o pisică specifică în funcție de identificatorul rasei
// export function fetchCatByBreed(breedId) {
//   // Adăugați cheia API ca antet pentru cerere
//   axios.defaults.headers.common['x-api-key'] =
//     'live_GLv73LQsPRjBhk86ilQF8KiuZLv4o7bf1vUAUEvcHWJt02xXGD9u6EB98hswXYsJ';

//   // Returnați o promisiune care rezolvă cu informațiile despre pisică
//   return axios
//     .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then(response => {
//       const catData = response.data[0]; // Se presupune că primim un singur rezultat
//       return catData;
//     })
//     .catch(error => {
//       throw error;
//     });
// }

// ==================================================================
