(function() {
    "use strict";
    console.log("reading js");
    
    // Select elements
    const home = document.querySelector("#home");
    const desk = document.querySelector("#formdiv");
    
    // Initialize audio objects
    const bgm = new Audio("sounds/cloud9.mp3");
    bgm.loop = true;
    const doorbell = new Audio("sounds/opendoor.mp3");
    const bush = new Audio("sounds/catbush.mp3");
    const treecat = new Audio("sounds/treemeow.mp3");
    
    // Select clickable areas
    const door = document.querySelector("#door");
    const pot = document.querySelector("#pot");
    const tree = document.querySelector("#tree");
    const back = document.querySelector("#back");
    // Play background music on mouse move
    window.addEventListener("mousemove", function() {
        bgm.play();
    });
    
    // Hover effects
    door.addEventListener("mouseover", function() {
        home.src = "images/doorglow.png";
    });
    pot.addEventListener("mouseover", function() {
        home.src = "images/potglow.png";
    });
    tree.addEventListener("mouseover", function() {
        home.src = "images/treeglow.png";
    });
    
    // Remove hover effects on mouse out
    door.addEventListener("mouseout", function() {
        home.src = "images/home.PNG";
    });
    pot.addEventListener("mouseout", function() {
        home.src = "images/home.PNG";
    });
    tree.addEventListener("mouseout", function() {
        home.src = "images/home.PNG";
    });
    
    // Clickable areas actions
    door.addEventListener("click", function(event) {
        event.preventDefault();
        desk.className = "showing";
        home.className = "hidden";
        back.className="showing";
        doorbell.play();
    });
    pot.addEventListener("click", function(event) {
        event.preventDefault();
        home.src = "images/potcat.png";
        bush.play();
    });
    tree.addEventListener("click", function(event) {
        event.preventDefault();
        home.src = "images/treetail.png";
        treecat.play();
    });
    back.addEventListener("click",function(event){
        desk.className="hidden";
        home.className="showing";
        back.className="hidden";
    });

})();
