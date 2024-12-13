var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";
var type = getColumn(url, 1);
var names = getColumn(url, 2);
var country = getColumn(url, 3);
var date_added = getColumn(url, 4);
var release_year = getColumn(url, 5);
var rating = getColumn(url, 6);
var genre = getColumn(url, 7);
var input = document.getElementById("input").innerHTML;
function clearScreen(){
    console.log("running clear function")
    console.log(input)
    document.getElementById("input").value = "";
    console.log("ending clear function")
    }
var genre1;
genre1 = document.getElementById("genre").value;
console.log(genre1);


function getMovies(){
var Movies = [];
var TvShows = [];
for(var i = 0; i<type.length; i++){
    if(type[i].includes("Movie")){
        Movies.push(names[i]);
        
    }
    else if(type[i].includes("TV Show")){
        TvShows.push(names[i]);
        
    }
}
console.log(Movies);
console.log("");
console.log(TvShows);
}




























var matchingMovie = [];
function createList(genre1){
    genre1 = document.getElementById("genre").value
    for(var i = 0; i<type.length; i++){
        if(rating[i] == "R"){
            matchingMovie.push(names[i])
        }

    }
}
console.log(matchingMovie) 