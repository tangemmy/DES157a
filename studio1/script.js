(function(){
    "use strict";
    console.log("reading js");

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
        
        document.querySelector(".showing").className="hidden";
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
            mytext ="<h2>Meet your Fur-ever Friend!</h2> <img src='images/friend.png'alt='your pawfect feline' height='300' width='300'>"+
            `This is ${name} and she’s here to steal your heart and claim a spot on your ${noun}. A charming feline with a fluffy coat and mesmerizing ${color1} eyes, she's not just a kitty; she's a purr-sonality powerhouse! At ${number} years young, she's the epitome of pure cuddly cuteness, and she isn't your typical ${color2} and white bellied kitty either – she's got some spunk to her!

            Special talents? Look no further! She's the reigning champion at chasing laser pointers, a pro at "helping" with your taxes (keyboard not included), and boasts a culinary degree in biscuit makin’ that would surely put your local bakery out of business! And let's not forget her undying love for ${verb}, which adds an extra sprinkle of joy to your everyday life.
            
            Now, we have to admit, she does have some rather unusual quirks we must warn you about. She's quite the ${body} biter. But fear not! It doesn’t hurt – those nibbles are filled with playful intent. We don’t really know why she is so into ${bodyPlural}, but it's just another thing that makes her all the more special!
            
            So, if you're ready for a bundle of love and joy, ${name} is ready for you!. Come meet her at the Purrfect Paws Adoption Center (123 Main Street) and fall in love! #AdoptDontShop`;

            document.querySelector("#name").value="";
            document.querySelector("#noun").value="";
            document.querySelector("#color1").value="";
            document.querySelector("#number").value="";
            document.querySelector("#color2").value="";
            document.querySelector("#verb").value="";
            document.querySelector("#body").value="";
            document.querySelector("#bodyPlural").value="";

        }
        art.innerHTML=mytext;
        art.style.fontSize = "22px";
    })
    
})();                                             
