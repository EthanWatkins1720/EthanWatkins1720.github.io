const getMovies = async() => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
}

const showMovies = async() => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");

    movies.forEach((movie) => 
        moviesSection.append(getMovieItem(movie))
    );
}

const getMovieItem = (movie) => {
    let movieSection = document.createElement("section");
    movieSection.classList.add("movie");

    let row = document.createElement("div");

    let img = document.createElement("img");
    img.src = movie.img;
    movieSection.append(img);

    let h3 = document.createElement("h3");
    h3.innerText = movie.name;
    movieSection.append(h3);

    return movieSection;
}

window.onload = () => {
    showMovies();
}