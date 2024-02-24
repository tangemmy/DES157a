(function(){
    "use script";
    console.log("reading js");
    
    const bg = document.querySelector("img");
    //clickable areas
    const lily = document.querySelector("#lily");
    const coat = document.querySelector("#coat");
    const grad = document.querySelector("#grad");
    const lip = document.querySelector("#lip");
    const uniqlo = document.querySelector("#uniqlo");
    const sailor = document.querySelector("#sailor");
    const sleeve = document.querySelector("#sleeve");
    const home = document.querySelector("h1");
    //overlay divs
    const lilydiv = document.querySelector("#lilydiv");
    const coatdiv = document.querySelector("#coatdiv");
    const graddiv = document.querySelector("#graddiv");
    const lipdiv = document.querySelector("#lipdiv");
    const uniqlodiv = document.querySelector("#uniqlodiv");
    const sailordiv = document.querySelector("#sailordiv");
    
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
//clear all
function clear(){
    const allDivs = [lilydiv,coatdiv,graddiv,lipdiv,uniqlodiv,sailordiv];
    for (let i=0; i<allDivs.length;i++){
        allDivs[i].className="hidden";
    }
}
home.addEventListener("click",function(event){
    event.preventDefault();
    clear();
})
//overlays
//function to hide others
function showOverlay(newDiv) {
    // Hide all overlay divs
    const overlayDivs = document.querySelectorAll('.showing');
    overlayDivs.forEach(div => {
        div.className="hidden";

    });

    // Show the new overlay div
    newDiv.classList.add('showing');
}

lily.addEventListener("click",function(event){
    event.preventDefault();
    showOverlay(lilydiv);
    lilydiv.className="showing";
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];
    const myslide = document.querySelector("#slide1");
    let currentImage=0;
    document.querySelector('#next1').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev1').addEventListener("click",previousPhoto);

    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide1.src=`images/lily/${pictures[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide1.src=`images/lily/${pictures[currentImage]}`;
    }
});
coat.addEventListener("click",function(event){
    event.preventDefault();
    showOverlay(coatdiv);
    coatdiv.className="showing";
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];
    const myslide = document.querySelector("#slide2");
    let currentImage=0;
    document.querySelector('#next2').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev2').addEventListener("click",previousPhoto);

    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide2.src=`images/coat/${pictures[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide2.src=`images/coat/${pictures[currentImage]}`;
    }
});
grad.addEventListener("click", function(event){
    event.preventDefault();
    showOverlay(graddiv);
    graddiv.className="showing";
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
    const myslide = document.querySelector("#slide3");
    let currentImage=0;
    document.querySelector('#next3').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev3').addEventListener("click",previousPhoto);

    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide3.src=`images/grad/${pictures[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide3.src=`images/grad/${pictures[currentImage]}`;
    }
});
lip.addEventListener("click", function(event){
    event.preventDefault();
    showOverlay(lipdiv);
    lipdiv.className="showing";
    const lipinfo = document.querySelector("#lipinfo");
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
    const myslide = document.querySelector("#slide4");
    let currentImage=0;
    document.querySelector('#next4').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev4').addEventListener("click",previousPhoto);

    // function info(){
    //     if(slide4.src==="images/lip/1.jpg"){
    //         lipinfo.innerHTML="<strong>#1 Peripera Ink Mood Glowy Tint #2 Coral Influencer:</strong> <br> My Go-To, never fails me. I'm a true spring and this just goes really well with my skin tone. ";
    //     } else if(slide4.src==="images/lip/2.jpg"){
    //         lipinfo.innerHTML="<strong>#2 Romand Glasting Lip Balm #6 Kaya Fig:</strong> <br> Color is Immaculate. I complemented my friend asking what lip she was wearing and it was this one because I told her about how much I liked it LOL";
    //     }else if(slide4.src==="images/lip/3.jpg"){
    //         lipinfo.innerHTML="<strong>#3 Peripera Ink Mood Glowy Tint #12 Warm Gorithm:</strong> <br> New releases from Romand always come out in Asia first before they reach the US and I was able to snag this while I was in the Korea Town in Osaka. She is pink and has a bow I love her.";
    //     }else if(slide4.src==="images/lip/4.jpg"){
    //         lipinfo.innerHTML="<strong>#4 Romand Dewyful Lip Tint #17 Mellow Sugar:</strong> <br>LIMITED EDITION SANRIO COLLAB. Its so cute its everything I'm keeping the container even when its emptied I even kept the box.";
    //     }else{
    //         lipinfo.innerHTML="<strong>#5 Etude House Glow Fixing Tint #3 Dewy Fig:</strong> <br>I'm not sure why I keep coming back to her but I do. So that gotta mean something.";
    //     }
    // };
    function info() {
        if (slide4.src.endsWith("1.jpg")) {
            lipinfo.innerHTML = "<strong>Peripera Ink Mood Glowy Tint #2 Coral Influencer:</strong> <br> My Go-To, never fails me. I'm a true spring and this just goes really well with my skin tone. ";
        } else if (slide4.src.endsWith("2.jpg")) {
            lipinfo.innerHTML = "<strong>Romand Glasting Lip Balm #6 Kaya Fig:</strong> <br> Color is Immaculate. I complemented my friend asking what lip she was wearing and it was this one because I told her about how much I liked it LOL";
        } else if (slide4.src.endsWith("3.jpg")) {
            lipinfo.innerHTML = "<strong>Peripera Ink Mood Glowy Tint #12 Warm Gorithm:</strong> <br> New releases from Romand always come out in Asia first before they reach the US and I was able to snag this while I was in the Korea Town in Osaka. She is pink and has a bow I love her.";
        } else if (slide4.src.endsWith("4.jpg")) {
            lipinfo.innerHTML = "<strong>Romand Dewyful Lip Tint #17 Mellow Sugar:</strong> <br>LIMITED EDITION SANRIO COLLAB. Its so cute its everything I'm keeping the container even when its emptied I even kept the box.";
        } else {
            lipinfo.innerHTML = "<strong>Etude House Glow Fixing Tint #3 Dewy Fig:</strong> <br>I'm not sure why I keep coming back to her but I do. So that gotta mean something.";
        }
    };
    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide4.src=`images/lip/${pictures[currentImage]}`;
      info();
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide4.src=`images/lip/${pictures[currentImage]}`;
        info();
    }
    info();
});
uniqlo.addEventListener("click", function(event){
    event.preventDefault();
    showOverlay(uniqlodiv);
    uniqlodiv.className="showing";
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
    const myslide = document.querySelector("#slide5");
    let currentImage=0;
    document.querySelector('#next5').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev5').addEventListener("click",previousPhoto);

    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide5.src=`images/uniqlo/${pictures[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide5.src=`images/uniqlo/${pictures[currentImage]}`;
    }
});
sailor.addEventListener("click", function(event){
    event.preventDefault();
    showOverlay(sailordiv);
    sailordiv.className="showing";
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg'];
    const myslide = document.querySelector("#slide6");
    let currentImage=0;
    document.querySelector('#next6').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev6').addEventListener("click",previousPhoto);

    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide6.src=`images/sailor/${pictures[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide6.src=`images/sailor/${pictures[currentImage]}`;
    }
});
 sleeve.addEventListener("click", function(event){
    event.preventDefault();
    showOverlay(sailordiv);
    sailordiv.className="showing";
    const pictures = ['1.jpg','2.jpg','3.jpg','4.jpg'];
    const myslide = document.querySelector("#slide6");
    let currentImage=0;
    document.querySelector('#next6').addEventListener("click",nextPhoto);
   
    document.querySelector('#prev6').addEventListener("click",previousPhoto);

    function nextPhoto(){
        currentImage++;
       
        if(currentImage>pictures.length-1){
            currentImage=0;
        } 
        
        slide6.src=`images/sailor/${pictures[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;
        if(currentImage<0){
            currentImage=pictures.length-1;
        }
        slide6.src=`images/sailor/${pictures[currentImage]}`;
    }
});
  
        
})();