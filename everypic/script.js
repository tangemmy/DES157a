(function(){
    "use script";
    console.log("reading js");
    //clickable areas
    const bg = document.querySelector("img");
    const lily = document.querySelector("#lily");
    const coat = document.querySelector("#coat");
    const grad = document.querySelector("#grad");
    const lip = document.querySelector("#lip");
    const uniqlo = document.querySelector("#uniqlo");
    const sailor = document.querySelector("#sailor");
    const sleeve = document.querySelector("#sleeve");
    //overlay divs
    const lilydiv = document.querySelector("#lilydiv");
    const coatdiv = document.querySelector("#coatdiv");
    const graddiv = document.querySelector("#graddiv");
    const lipdiv = document.querySelector("#lipdiv");
    const uniqlodiv = document.querySelector("#uniqlodiv");
    const sailordiv = document.querySelector("#sailodiv");
    
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
//clicking to show overlay

lily.addEventListener("click",function(){
    lilydiv.className="showing";
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];
    const myslide = document.querySelector("#slide");
    let currentImage=0;
    document.querySelector('#next').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev').addEventListener("click",previousPhoto);

    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide.src=`images/lily/${pictures[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide.src=`images/lily/${pictures[currentImage]}`;
    }
});


  //slideshow
  
        
})();