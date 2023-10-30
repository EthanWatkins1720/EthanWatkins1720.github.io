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
    const URL = "https://portiaportia.github.io/json/";

    let movieSection = document.createElement("section");
    movieSection.classList.add("movie");
    movieSection.style.backgroundColor = "#707F8C";
    movieSection.style.display = "flex";

    let row = document.createElement("div");

    let img = document.createElement("img");
    img.classList.add("movie-image");
    img.src = URL + movie.img;
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.margin = "10px";
    movieSection.append(img);

    let div = document.createElement("div");
    div.style.margin = "10px";

    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    div.append(h3);

    let p = document.createElement("p");
    div.append(p);
    p.innerHTML = `<b>Director: </b> ${movie.director}`;
    p.innerHTML += `<br><b>Actors: </b> ${movie.actors}`;
    p.innerHTML += `<br><b>Year: </b> ${movie.year}`;
    p.innerHTML += `<br><b>Genres: </b> ${movie.genres}`;
    p.innerHTML += `<br><br>${movie.description}`;
    movieSection.append(div);

    movieSection.append(div);

    return movieSection;
}

window.onload = () => {
    showMovies();
}