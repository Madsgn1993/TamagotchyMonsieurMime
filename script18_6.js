var btn_manger = document.getElementById('btn_manger');
var p_manger = document.getElementById('p_miamiam');
var raisin = document.getElementById('raisin');
var btn_dormir = document.getElementById("btn_dormir");
var p_dormir = document.getElementById('p_dormir');
var pokeball = document.getElementById('poke_sleep')
var btn_douche = document.getElementById("btn_douche");
var p_douche = document.getElementById('p_douche');
var baignoir = document.getElementById('douche');
var note_musique = document.getElementById('note');

btn_manger.addEventListener('click', function() {
//GETCOMPUTERSTYLE va rechercher le style de (p_manger)
   if(getComputedStyle(p_manger).display != "none"){


        p_manger.style.display ="none";
        raisin.style.display ="none";


   }
   
   else if (getComputedStyle(p_dormir).display == "block" || getComputedStyle(p_douche).display == "block"){

        p_manger.style.display="none";
        

   }else{


        p_manger.style.display="block";
        raisin.style.display ="block";

   }
    
    
})



//--------------------------------------------------------------------------







btn_dormir.addEventListener('click', function() {
    //GETCOMPUTERSTYLE va rechercher le style de (p_dormir)
       if(getComputedStyle(p_dormir).display != "none" && getComputedStyle(pokeball).display != "none"){
    
    
            p_dormir.style.display ="none";
            pokeball.style.display ="none";
    
       } else if (getComputedStyle(p_manger).display == "block" || getComputedStyle(p_douche).display == "block"){

        p_dormir.style.display="none";
        pokeball.style.display ="none";}
        

   
       else{
    
            p_dormir.style.display="block";
            pokeball.style.display="block";

    
       }
        
        
    })


//---------------------------------------------------------------------





btn_douche.addEventListener('click', function() {
    //GETCOMPUTERSTYLE va rechercher le style de (p_dormir)
       if(getComputedStyle(p_douche).display != "none"){
    
    
            p_douche.style.display ="none";
            baignoir.style.display="none";
            note_musique.style.display="none";


    
       } else if (getComputedStyle(p_manger).display == "block" || getComputedStyle(p_dormir).display == "block"){

        p_douche.style.display="none";
        baignoir.style.display="none";
        note_musique.style.display="none";

        }
       
       else{
    
            p_douche.style.display="block";
            baignoir.style.display="block";
            note_musique.style.display="block";


       }
        
        
    })