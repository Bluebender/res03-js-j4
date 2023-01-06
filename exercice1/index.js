window.addEventListener("DOMContentLoaded", function(){
    
function exercice1()
{
    let button = document.getElementById("btn-change-color");
    let box1 = document.getElementById("box1");
    button.addEventListener("click", function(event){
        box1.style.backgroundColor = "blue";
    });
}

exercice1()

function exercice2()
{
    let button = document.getElementById("btn-move");
    let box2 = document.getElementById("box2");
    button.addEventListener("click", function(event){
        box2.classList.add("move");
    });
}

exercice2()

function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let button = document.getElementById("btn-add-ingredients");
    let ul = document.querySelector("ul");

    



    button.addEventListener("click", function(event){
        for (ingredient of ingredients){
            let li = document.createElement("li");
            let txt = document.createTextNode(ingredient);
            li.appendChild(txt);
            ul.appendChild(li);
        }
    });
}

exercice3()

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
}

function exercice5()
{

}

function exercice6()
{

}

});