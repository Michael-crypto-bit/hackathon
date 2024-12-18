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
        

   
function sortMovie(chosenRating, release){
    console.log(release)
    // console.log(release_year[0])
    var finalMovies = [];
    for(var i = 0; i<names.length; i++){
        if(rating[i]==chosenRating && release_year[i] == release){
           finalMovies.push(names[i] + ": " + release_year[i]);
           
        }
    }

    console.log(finalMovies)
    document.getElementById("output").innerHTML = finalMovies;

}

var feedback = [];
function searchMovies(){
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    feedback.pop(0)
    var inputs = document.getElementById("input").value;
    console.info(inputs);
    for(var i = 0; i<names.length; i++){
        if(names[i].toLowerCase().includes(inputs.toLowerCase())){
            feedback.push(names[i] + "; " + raw_release_year[i]) + <br></br>;
        // feedback.push(raw_release_year[i])        
        }
    // else{
    //     console.log("not found")
    // }
    }
    console.info(feedback);
    document.getElementById("output").innerHTML = feedback;
}
