window.addEventListener("DOMContentLoaded", function(){

    let button = document.getElementById("button");
    let liste = document.getElementById("hidden_liste");
    let ext = document.querySelector("body");
    
    button.addEventListener("click", function(event){
      liste.classList.toggle("hidden")
    });

    window.addEventListener("click", function(event){
        if (event.target !== button){
            liste.classList.add("hidden")
            console.log(event.target)
        }
    });
});
