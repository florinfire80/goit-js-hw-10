import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');

  // Funcție pentru a ascunde loader-ul
  function hideLoader() {
    loader.style.display = 'none';
  }

  // Funcție pentru a arăta loader-ul
  function showLoader() {
    loader.style.display = 'block';
  }

  // Funcție pentru a afișa eroarea și a ascunde celelalte elemente
  function showError() {
    error.style.display = 'block';
    breedSelect.style.display = 'none';
    catInfo.style.display = 'none';
  }

  // Funcție pentru a ascunde eroarea și a afișa celelalte elemente
  function hideError() {
    error.style.display = 'none';
    breedSelect.style.display = 'block';
    catInfo.style.display = 'block';
  }

  // Ascundeți div.cat-info și afișați p.loader inițial
  catInfo.style.display = 'none';
  hideLoader(); // Ascundeți loader-ul inițial
  showError(); // Afișați eroarea inițial

  // Populați selectorul cu opțiuni bazate pe rasele obținute din API
  fetchBreeds()
    .then(breeds => {
      // Afișați select.breed-select și ascundeți p.loader după ce rasele au fost încărcate
      breedSelect.style.display = 'block';
      hideLoader(); // Ascundeți loader-ul după încărcarea rasei
      hideError(); // Ascundeți eroarea după încărcarea rasei

      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
    })
    .catch(error => {
      // Afișați mesajul de eroare și ascundeți celelalte elemente în caz de eșec
      hideLoader(); // Ascundeți loader-ul în caz de eroare
      showError(); // Afișați eroarea în caz de eroare
      console.error(error);
    });

  // Ascultă evenimentul change pe selector
  breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;

    // Verificați dacă a fost selectată o rasă validă
    if (selectedBreedId) {
      // Ascundeți div.cat-info și afișați p.loader înainte de a face cererea pentru informații despre pisică
      catInfo.style.display = 'none';
      showLoader(); // Arată loader-ul înainte de cererea pentru informații despre pisică
      hideError(); // Ascundeți eroarea înainte de cererea pentru informații despre pisică

      // Apelați funcția fetchCatByBreed() pentru a obține informații despre pisică
      fetchCatByBreed(selectedBreedId)
        .then(catData => {
          // Afișați informațiile despre pisică în interfața utilizatorului
          catInfo.innerHTML = `
              <p>Name: ${catData.breeds[0].name}</p>
              <p>Temperament: ${catData.breeds[0].temperament}</p>
              <p>Description: ${catData.breeds[0].description}</p>
              <img src="${catData.url}" alt="${catData.breeds[0].name}" />
            `;

          // Afișați div.cat-info și ascundeți p.loader după ce informațiile despre pisică au fost încărcate
          catInfo.style.display = 'block';
          hideLoader(); // Ascundeți loader-ul după încărcarea informațiilor despre pisică
        })
        .catch(error => {
          // Afișați mesajul de eroare și ascundeți celelalte elemente în caz de eșec
          console.error(error);
          showError(); // Afișați eroarea în caz de eroare
        });
    }
  });
});

// Backup ===================================================

// import axios from 'axios';
// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const breedSelect = document.querySelector('.breed-select');
//   const loader = document.querySelector('.loader');
//   const error = document.querySelector('.error');
//   const catInfo = document.querySelector('.cat-info');

//   // Funcție pentru a ascunde loader-ul
//   function hideLoader() {
//     loader.style.display = 'none';
//   }

//   // Funcție pentru a arăta loader-ul
//   function showLoader() {
//     loader.style.display = 'block';
//   }

//   // Funcție pentru a afișa eroarea și a ascunde celelalte elemente
//   function showError() {
//     error.style.display = 'block';
//     breedSelect.style.display = 'none';
//     catInfo.style.display = 'none';
//   }

//   // Funcție pentru a ascunde eroarea și a afișa celelalte elemente
//   function hideError() {
//     error.style.display = 'none';
//     breedSelect.style.display = 'block';
//     catInfo.style.display = 'block';
//   }

//   // Ascundeți div.cat-info și afișați p.loader inițial
//   catInfo.style.display = 'none';
//   hideLoader(); // Ascundeți loader-ul inițial
//   showError(); // Afișați eroarea inițial

//   // Populați selectorul cu opțiuni bazate pe rasele obținute din API
//   fetchBreeds()
//     .then(breeds => {
//       // Afișați select.breed-select și ascundeți p.loader după ce rasele au fost încărcate
//       breedSelect.style.display = 'block';
//       hideLoader(); // Ascundeți loader-ul după încărcarea rasei
//       hideError(); // Ascundeți eroarea după încărcarea rasei

//       breeds.forEach(breed => {
//         const option = document.createElement('option');
//         option.value = breed.id;
//         option.textContent = breed.name;
//         breedSelect.appendChild(option);
//       });
//     })
//     .catch(error => {
//       // Afișați mesajul de eroare și ascundeți celelalte elemente în caz de eșec
//       hideLoader(); // Ascundeți loader-ul în caz de eroare
//       showError(); // Afișați eroarea în caz de eroare
//       console.error(error);
//     });

//   // Ascultă evenimentul change pe selector
//   breedSelect.addEventListener('change', () => {
//     const selectedBreedId = breedSelect.value;

//     // Verificați dacă a fost selectată o rasă validă
//     if (selectedBreedId) {
//       // Ascundeți div.cat-info și afișați p.loader înainte de a face cererea pentru informații despre pisică
//       catInfo.style.display = 'none';
//       showLoader(); // Arată loader-ul înainte de cererea pentru informații despre pisică
//       hideError(); // Ascundeți eroarea înainte de cererea pentru informații despre pisică

//       // Apelați funcția fetchCatByBreed() pentru a obține informații despre pisică
//       fetchCatByBreed(selectedBreedId)
//         .then(catData => {
//           // Afișați informațiile despre pisică în interfața utilizatorului
//           catInfo.innerHTML = `
//               <p>Name: ${catData.breeds[0].name}</p>
//               <p>Temperament: ${catData.breeds[0].temperament}</p>
//               <p>Description: ${catData.breeds[0].description}</p>
//               <img src="${catData.url}" alt="${catData.breeds[0].name}" />
//             `;

//           // Afișați div.cat-info și ascundeți p.loader după ce informațiile despre pisică au fost încărcate
//           catInfo.style.display = 'block';
//           hideLoader(); // Ascundeți loader-ul după încărcarea informațiilor despre pisică
//         })
//         .catch(error => {
//           // Afișați mesajul de eroare și ascundeți celelalte elemente în caz de eșec
//           console.error(error);
//           showError(); // Afișați eroarea în caz de eroare
//         });
//     }
//   });
// });

// ==========================================================
