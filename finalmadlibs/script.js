(function(){
    "use strict";
    console.log("reading js");
    
    const home = document.querySelector("#home");
    const desk = document.querySelector("#formdiv")
    //clickable areas outside
    const door = document.querySelector("#door");
    const pot = document.querySelector("#pot");
    const tree = document.querySelector("#tree");

    //hover effect for home items
    door.addEventListener("mouseover",function(){
        home.src="images/doorglow.png";
    });
    pot.addEventListener("mouseover",function(){
        home.src="images/potglow.png";
    });
    tree.addEventListener("mouseover",function(){
        home.src="images/treeglow.png";
    });
    //remove hover effects on mouse out
    door.addEventListener("mouseout", function(){
        home.src = "images/home.PNG";
    });
    pot.addEventListener("mouseout", function(){
        home.src = "images/home.PNG";
    });
    tree.addEventListener("mouseout", function(){
        home.src = "images/home.PNG";
    });

    //Clicking items
    door.addEventListener("click",function(event){
        event.preventDefault();
        desk.className="showing";
        home.className="hidden";
    });
})();