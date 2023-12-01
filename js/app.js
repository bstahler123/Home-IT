
$(document).ready(function() {


    const myNav = document.getElementById('mainNav');
    const remoteAssist = document.getElementById('remote-assist');
    
    window.onscroll = function () { 

       
        if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700 ) {
        
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
            remoteAssist.classList.remove("btn-primary");
            remoteAssist.classList.add("btn-dark");


        } 
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
            remoteAssist.classList.add("btn-primary");
            remoteAssist.classList.remove("btn-dark");


        }
    };
    

 

});



