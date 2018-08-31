
var myArray = new Array();
function getMovieData()  {


  var input = document.querySelector(".pokemon-input");
  var pokemonName = document.querySelector(".pokemon-name");
  var pokemonGenre = document.querySelector(".pokemon-genre");
  var movieCountry = document.querySelector(".movie-country");

  var pokemonImage = document.querySelector(".pokemon-image");
  var name = input.value;
  myArray.unshift(name);
  myArray = myArray.slice(0,5);
  // var lastfive = new Array[];
  // lastfive=lastfive.push(name);
  var search = document.querySelector(".movie-search");
  movieUrl = `http://www.omdbapi.com/?t=${name}&apikey=2955d8c1`;

  axios.get(movieUrl).then((response) => {
    if(response.data.Response === 'False'){
      throw new Error('Unable to find the movie');
    }
     pokemonName.innerHTML = "Name:"+response.data.Title;
     pokemonGenre.innerHTML = "Genre:"+response.data.Genre;
     search.innerHTML = "Last five search:  "+myArray;
     movieCountry.innerHTML = "Country:"+response.data.Country;
     pokemonImage.src =response.data.Poster;


  }).catch((e) => {
    pokemonName.innerHTML = "(An error has occurred.)";

    pokemonImage.src = "";
  });


}

var button = document.querySelector(".pokemon-button");
button.addEventListener("click", getMovieData);
