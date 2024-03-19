(function() {
    "use strict";
    console.log("reading js");
    //navigation and effects
    // Select elements
    const home = document.querySelector("#home");
    const deskpg = document.querySelector("#formdiv");
    const desk = document.querySelector("#desk");
    const art = document.querySelector("#art");
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
    const toy = document.querySelector("#toy");
    const laser = document.querySelector("#laser");
    const notepad = document.querySelector("note");
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
    toy.addEventListener("mouseover", function() {
        desk.src = "images/toyglow.png";
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
        deskpg.className = "showing";
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
        deskpg.className="hidden";
        home.className="showing";
        back.className="hidden";
        art.clasName="hidden";
    });

    //actual madlibs part
    const myForm = document.querySelector("form");
    
    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.getElementById("name").value;
        const noun= document.getElementById("noun").value;
        const color1= document.getElementById("color1").value;
        const number= document.getElementById("number").value;
        const color2= document.getElementById("color2").value;
        const verb= document.getElementById("verb").value;
        const body= document.getElementById("body").value;
        const bodyPlural= document.getElementById("bodyPlural").value;
        const cats = ["pink","green","orange","blue","black"];
        document.getElementById("cat").className="showing";
        let friend= "";
        let mytext;

        if(name==''){
            mytext="please pick a name";
            document.querySelector('#name').focus();
        }
        else if(noun==''){
            mytext="please pick a noun";
            document.querySelector('#noun').focus();
        }
        else if(color1==''){
            mytext="please pick a color";
            document.querySelector('#color1').focus();
        }
        else if(number==''){
            mytext="please pick any number";
            document.querySelector('#number').focus();
        }
        else if(color2==''){
            mytext="please pick another color";
            document.querySelector('#color2').focus();
        }
        else if(verb==''){
            mytext='please pick a verb ending in "ing"';
            document.querySelector('#verb').focus();
        }
        else if(body==''){
            mytext="please pick a body part";
            document.querySelector('#body').focus();
        }
        else if(bodyPlural==''){
            mytext="please input the plural of the body part above";
            document.querySelector('#bodyPlural').focus();
        }
        else{
            for(let i=0; i<cats.length;i++){
                if(color2==cats[i]){
                    friend=cats[i];
                }
            }
            mytext =`<h1>${name}</h1>`+ `<img src='images/${friend}.PNG'alt='your pawfect feline' height='250' width='250'>`+"<h2>Meet your Fur-ever Friend!</h2><br>"+
            `This is <span class="userInput">${name}</span> and she’s here to steal your heart and claim a spot on your <span class="userInput">${noun}</span>.  A charming feline with a fluffy coat and mesmerizing <span class="userInput">${color1}</span> eyes, she's not just a kitty; she's a purr-sonality powerhouse! At <span class="userInput">${number}</span> years young, she's the epitome of pure cuddly cuteness, and she isn't your typical <span class="userInput">${color2}</span> and white bellied kitty either – she's got some spunk to her! <br><br>

            Special talents? Look no further! She's the reigning champion at chasing laser pointers, a pro at "helping" with your taxes (keyboard not included), and boasts a culinary degree in biscuit makin’ that would surely put your local bakery out of business! And let's not forget her undying love for <span class="userInput">${verb}</span>, which adds an extra sprinkle of joy to your everyday life.<br><br>
            
            Now, we have to admit, she does have some rather unusual quirks we must warn you about. She's quite the <span class="userInput">${body}</span> biter. But fear not! It doesn’t hurt – those nibbles are filled with playful intent. We don’t really know why she is so into <span class="userInput">${bodyPlural}</span>, but it's just another thing that makes her all the more special!<br><br>
            
            So, if you're ready for a bundle of love and joy, <span class="userInput">${name}</span> is ready for you! Come meet her at the Purrfect Paws Adoption Center (123 Main Street) and fall in love! #AdoptDontShop`;

            document.querySelector("#name").value="";
            document.querySelector("#noun").value="";
            document.querySelector("#color1").value="";
            document.querySelector("#number").value="";
            document.querySelector("#color2").value="";
            document.querySelector("#verb").value="";
            document.querySelector("#body").value="";
            document.querySelector("#bodyPlural").value="";

        }
        
        art.innerHTML+=mytext;
        art.style.fontSize = "15px";
        art.style.lineHeight = "1.4em";
        art.style.padding="25px";
        art.style.marginTop="30px";
        art.style.position="absolute";
        art.style.top="-10px";
        art.style.left="450px";
        art.style.backgroundColor="white";
        art.style.width="570px";
        art.style.fontFamily="gill sans";

    })

})();
