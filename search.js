var names = getColumn(url, 2);
var raw_release_year = getColumn(url, 5);
var rating = getColumn(url, 6);
var release_year = [];
var i = 0;
//
while( i<raw_release_year.length){
    release_year.push(parseInt(raw_release_year[i]));
    i++;
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
        feedback.push("<br>" + names[i] + " " + release_year[i] + " " + rating[i]);
        
    }
    // else{
    //     console.log("not found")
    // }++
}
console.info(feedback);
document.getElementById("input").value = "";
document.getElementById("output").innerHTML = feedback;
}