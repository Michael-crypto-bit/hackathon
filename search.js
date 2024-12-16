var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";
var names = getColumn(url, 2);
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
        feedback.push(names[i]);
        
    }
    // else{
    //     console.log("not found")
    // }
}
console.info(feedback);
document.getElementById("input").value = "";
}