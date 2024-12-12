var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Politics/US%20Presidents.csv";
var type = getColumn(url, 1);
var names = getColumn(url, 2);
var country = getColumn(url, 3);
var date_added = getColumn(url, 4);
var release_year = getColumn(url, 5);
var rating = getColumn(url, 6);
var genre = getColumn(url, 7);

var Movies = [];
for(var i = 0; i < type.length; i++){
    if(type[i].includes("Movie")){
        Movies.push(names[i]);
    }
}
console.log(Movies)