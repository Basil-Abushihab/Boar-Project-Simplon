import{
    auth, //the same getAuth(app) but this in variable
    database, //the same getDatabase(app) but this in variable
    reference, //the same ref but this in variable
    addData, //the same set but this in variable
    retrieveData, //the same onValue but this in variable 
    query
} from "../../Firebase-config/firebase-config.js";


function getThreeMovies() {
    const moviesRef = reference(database, 'Movies/');
    retrieveData(moviesRef, (snapshot) => {
        if (snapshot.exists()) {
           const  moviesData = snapshot.val();
           
            for(let i=1; i<=3; i++){
                hereSection(moviesData[i]);
        }
        } else {
            console.log("No data available");
        }
    },);
}
getThreeMovies();

// function hereSection(moviesData){
//     console.log(moviesData);
// }

let allMovies = [];

function fetchMovies() {
    const moviesRef = reference(database, 'Movies/');
    retrieveData(moviesRef, (snapshot) => {
        const moviesContainer = document.querySelector('.cards-container');
        moviesContainer.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const movie = childSnapshot.val();
            const movieId = childSnapshot.key;
            allMovies.push({ ...movie, id: movieId });
        });
        displayMovies(allMovies);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p class="title">${movie.name}</p>
        <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover; background-position: center;">
            <div class="reaction">
                <i class="fas fa-play play"></i>
                <i class="fas fa-heart heart"></i>
            </div>
        </div>
        <div class="info">
            <div class="clock">
                <i class="fa-solid fa-clock clock"></i>
                <p class="time">${movie.duration}</p>
            </div>
            <div class="rate">${movie.rating}</div>
        </div>
    `;
    card.addEventListener('click', () => {
        localStorage.setItem('Name-Movie', movie.id);
        window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`;
    });
    return card;
}

function displayMovies(movies) {
    const moviesContainer = document.querySelector('.cards-container');
    moviesContainer.innerHTML = '';
    movies.forEach((movie) => {
        const card = createMovieCard(movie);
        moviesContainer.appendChild(card);
    });
}

const filterMoviesBySearch = (movies, searchQuery) => {
    if (!searchQuery) {
        return movies;
    }
    return movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
};

function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = filterMoviesBySearch(allMovies, searchTerm);
    displayMovies(filteredMovies);
}

document.getElementById('searchInput').addEventListener('input', searchMovies);
document.addEventListener('DOMContentLoaded', fetchMovies);