import {
  auth, //the same getAuth(app) but this in variable
  database, //the same getDatabase(app) but this in variable
  reference, //the same ref but this in variable
  addData, //the same set but this in variable
  retrieveData, //the same onValue but this in variable
  query,
} from "../../Firebase-config/firebase-config.js";
import { getUserData } from "../../Controllers/UserControllers/retrieveUser.js";
function getFirstMovies() {
  const moviesRef = reference(database, "Movies/");
  retrieveData(moviesRef, (snapshot) => {
    if (snapshot.exists()) {
      const moviesData = snapshot.val();
      for (let i = 0; i <= 4; i++) {
        createMovieCard(moviesData[i]);
      }
    } else {
      console.log("No data available");
    }
  });
}

getFirstMovies();
function createMovieCard(movie) {
  console.log(movie);
  let container = document.getElementById("group1");
  const card = document.createElement("div");

  card.classList.add("card");
  card.innerHTML = `
        <p class="title">${movie.name}</p>
        <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover;
        background-position: center;>
            <div class="reaction">
                <i class="fas fa-play play"></i>
            </div>
        </div>
        <div class="info">
            <div class="clock">
                <i class="fa-solid fa-clock clock"></i>
                <p class="time">${movie.duration}</p>
            </div>
            <div class="genre">${movie.genre}</div>
        </div>
        
    `;
  container.appendChild(card);
  
  card.addEventListener("click", () => {
    sessionStorage.setItem("movie", JSON.stringify(movie));
    window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`;
  });
  
  return card;
}

// document.addEventListener('DOMContentLoaded', getThreeMovies);
function getSecondMovies() {
  const moviesRefSecond = reference(database, "Movies/");
  retrieveData(moviesRefSecond, (snapshot) => {
    if (snapshot.exists()) {
      const moviesDataSecond = snapshot.val();
      for (let i = 6; i <= 10; i++) {
        createMovieCardSecond(moviesDataSecond[i]);
      }
    } else {
      console.log("No data available");
    }
  });
}

getSecondMovies();
function createMovieCardSecond(movie) {
  console.log(movie);
  let containerSecond = document.getElementById("group2");
  const cardSecond = document.createElement("div");
  cardSecond.classList.add("card");
  cardSecond.innerHTML = `
        <p class="title">${movie.name}</p>
        <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover;
        background-position: center;>
            <div class="reaction">
                <i class="fas fa-play play"></i>
                
            </div>
        </div>
        <div class="info">
            <div class="clock">
                <i class="fa-solid fa-clock clock"></i>
                <p class="time">${movie.duration}</p>
            </div>
            <div class="genre">${movie.genre}</div>
        </div>
    `;
  containerSecond.appendChild(cardSecond);
 
  cardSecond.addEventListener("click", () => {
    sessionStorage.setItem("movie", JSON.stringify(movie));
    window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`;
  });
  return cardSecond;
}
function getThirdMovies() {
  const moviesRefThird = reference(database, "Movies/");
  retrieveData(moviesRefThird, (snapshot) => {
    if (snapshot.exists()) {
      const moviesDataThird = snapshot.val();
      for (let i = 9; i <= 13; i++) {
        createMovieCardThird(moviesDataThird[i]);
      }
    } else {
      console.log("No data available");
    }
  });
}

getThirdMovies();
function createMovieCardThird(movie) {
  console.log(movie);
  let containerThird = document.getElementById("group3");
  const cardThird = document.createElement("div");
  cardThird.classList.add("card");
  cardThird.innerHTML = `
      <p class="title">${movie.name}</p>
      <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover;
      background-position: center;>
          <div class="reaction">
              <i class="fas fa-play play"></i>
          </div>
      </div>
      <div class="info">
          <div class="clock">
              <i class="fa-solid fa-clock clock"></i>
              <p class="time">${movie.duration}</p>
          </div>
          <div class="genre">${movie.genre}</div>
      </div>
  `;
  containerThird.appendChild(cardThird);
  
  cardThird.addEventListener("click", () => {
    sessionStorage.setItem("movie", JSON.stringify(movie));
    window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`;
  });
  return cardThird;
}
function getForthMovies() {
  const moviesRefForth = reference(database, "Movies/");
  retrieveData(moviesRefForth, (snapshot) => {
    if (snapshot.exists()) {
      const moviesDataForth = snapshot.val();
      for (let i = 13; i <= 17; i++) {
        createMovieCardForth(moviesDataForth[i]);
      }
    } else {
      console.log("No data available");
    }
  });
}

getForthMovies();
function createMovieCardForth(movie) {
  console.log(movie);
  let containerForth = document.getElementById("group4");
  const cardForth = document.createElement("div");
  cardForth.classList.add("card");
  cardForth.innerHTML = `
      <p class="title">${movie.name}</p>
      <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover;
      background-position: center;>
          <div class="reaction">
              <i class="fas fa-play play"></i>
          </div>
      </div>
      <div class="info">
          <div class="clock">
              <i class="fa-solid fa-clock clock"></i>
              <p class="time">${movie.duration}</p>
          </div>
          <div class="genre">${movie.genre}</div>
      </div>
  `;
  containerForth.appendChild(cardForth);
 
  cardForth.addEventListener("click", () => {
    sessionStorage.setItem("movie", JSON.stringify(movie));
    window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`;
  });
  return cardForth;
}
function getFifthMovies() {
  const moviesRefFifth = reference(database, "Movies/");
  retrieveData(moviesRefFifth, (snapshot) => {
    if (snapshot.exists()) {
      const moviesDataFifth = snapshot.val();
      for (let i = 12; i <= 16; i++) {
        createMovieCardFifth(moviesDataFifth[i]);
      }
    } else {
      console.log("No data available");
    }
  });
}

getFifthMovies();
function createMovieCardFifth(movie) {
  console.log(movie);
  let containerFifth = document.getElementById("group5");
  const cardFifth = document.createElement("div");
  cardFifth.classList.add("card");
  cardFifth.innerHTML = `
      <p class="title">${movie.name}</p>
      <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover;
      background-position: center;>
          <div class="reaction">
              <i class="fas fa-play play"></i>
          </div>
      </div>
      <div class="info">
          <div class="clock">
              <i class="fa-solid fa-clock clock"></i>
              <p class="time">${movie.duration}</p>
          </div>
          <div class="genre">${movie.genre}</div>
      </div>
  `;
  containerFifth.appendChild(cardFifth);
  cardFifth.addEventListener("click", () => {
    sessionStorage.setItem("movie", JSON.stringify(movie));
    window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`;
  });

  return cardFifth;
}

async function displayWelcomeMessage() {
  let userID = JSON.parse(sessionStorage.getItem("currentUser"));
  let userData = await getUserData(userID);

  let name = document.getElementById("user-Name");
  console.log();
  name.innerHTML = userData.firstName + " " + userData.lastName + " ";
}

displayWelcomeMessage();
