var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";
var type = getColumn(url, 1);
var names = getColumn(url, 2);
var country = getColumn(url, 3);
var date_added = getColumn(url, 4);
var raw_release_year = getColumn(url, 5);

var release_year = [];
var i = 0;
//
while( i<raw_release_year.length){
    release_year.push(parseInt(raw_release_year[i]));
    i++;
}
var rating = getColumn(url, 6);
var genre = getColumn(url, 7);
// var input = document.getElementById("input").innerHTML;
        

//This function takes the the usere's input and looks through the data set, and if it gets a 
// a matching pair, it will send thos names back with the release year and rating.
function sortMovie(chosenRating, release){
    console.log(release)
    // console.log(release_year[0])
    var finalMovies = [];
    for(var i = 0; i<names.length; i++){
        if(rating[i]==chosenRating && release_year[i] == release){
           finalMovies.push(names[i] + ": " + release_year[i] + ": "+ rating[i]);
           
        }
    }

    console.log(finalMovies)
    if(finalMovies.length == 0){
        document.getElementById("output").innerHTML = " we have no record of a movie or tv show with those parameters, please check that all the paramters are correct, then try again. If this problem persists please reload"
    } else{
    document.getElementById("output").innerHTML = finalMovies;
    }
}