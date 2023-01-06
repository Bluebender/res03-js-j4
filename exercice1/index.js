function exercice1()
{
    let button = document.getElementById("btn-change-color");
    let box1 = document.getElementById("box1");
    button.addEventListener("click", function(event){
        box1.style.backgroundColor = "blue";
    });
}


function exercice2()
{
    let button = document.getElementById("btn-move");
    let box2 = document.getElementById("box2");
    button.addEventListener("click", function(event){
        box2.classList.add("move");
    });
}


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
    

    let tbody = document.querySelector("tbody");
    let button = document.getElementById("btn-add-hero");
    
    let i = 0
    
    button.addEventListener("click", function(event){
        
       
        
        if (i < heroes.length){
            
            let tr = document.createElement("tr");
            tbody.appendChild(tr);
            
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            tr.appendChild(td1);
            tr.appendChild(td2);
            
            let name = document.createTextNode(heroes[i].name);
            let secret = document.createTextNode(heroes[i].secret);
            td1.appendChild(name);
            td2.appendChild(secret)
            
            i = i + 1;
            console.log(i)
        }
        
    });

}


function exercice5()
{

    let case1 = document.getElementById("blue");
    let case2 = document.getElementById("red");
    let case3 = document.getElementById("green");
    
    let button = document.getElementById("btn-turn");

    button.addEventListener("click", function(event){
        case1.id = "red";
        case2.id = "green";
        case3.id = "blue";
    });
}


function exercice6()
{
    let ball = document.getElementById("ball");
    let button = document.getElementById("btn-roll");
    
    button.addEventListener("click", function(event){
       ball.classList.add("roll")
       console.log("coucou")
       
        
    });
    
}

window.addEventListener("DOMContentLoaded", function(){

    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();

});