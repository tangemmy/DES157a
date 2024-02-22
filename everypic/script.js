(function(){
    "use script";
    console.log("reading js");
    //creating areas into objects
    const bg = document.querySelector("img");
    const lily = document.querySelector("#lily");
    const coat = document.querySelector("#coat");
    const grad = document.querySelector("#grad");
    const lip = document.querySelector("#lip");
    const uniqlo = document.querySelector("#uniqlo");
    const sailor = document.querySelector("#sailor");
    const sleeve = document.querySelector("#sleeve");

    //hover effect
    lily.addEventListener("mouseover",function(){
        bg.src="images/lilyglow.png";
    });
    lily.addEventListener("mouseout", function(){
         bg.src="images/everypiccrop.png";
         });
    coat.addEventListener("mouseover",function(){
        bg.src="images/coatglow.png";
    });
    coat.addEventListener("mouseout", function(){
         bg.src="images/everypiccrop.png";
         });
    grad.addEventListener("mouseover",function(){
        bg.src="images/gradglow.png";
    });
    grad.addEventListener("mouseout", function(){
         bg.src="images/everypiccrop.png";
         });
    lip.addEventListener("mouseover",function(){
        bg.src="images/lipglow.png";
    });
    lip.addEventListener("mouseout", function(){
         bg.src="images/everypiccrop.png";
         });
    uniqlo.addEventListener("mouseover",function(){
            bg.src="images/uniglow.png";
        });
    uniqlo.addEventListener("mouseout", function(){
             bg.src="images/everypiccrop.png";
             });
    sailor.addEventListener("mouseover",function(){
        bg.src="images/sailorglow.png";
    });
    sailor.addEventListener("mouseout", function(){
         bg.src="images/everypiccrop.png";
         });
    sleeve.addEventListener("mouseover",function(){
        bg.src="images/sailorglow.png";
    });
    sleeve.addEventListener("mouseout", function(){
         bg.src="images/everypiccrop.png";
         });
})();