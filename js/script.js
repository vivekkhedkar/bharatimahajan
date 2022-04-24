document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navMenuLink = document.querySelector('.nav-menu-link');
    // const navMenuWork = document.querySelector('.nav-menu-work');
    const navMenuWorkDropdown = document.querySelector('.nav-menu-work-dropdown');
    
    const navMenuDiv2 = document.querySelector('.nav-menu-div2');
    const workbar = document.querySelector('.work-bar');
    const signature_logo = document.querySelector('.signature-logo');
    const b_logo = document.querySelector('.b-logo');
    const containerHeader = document.querySelector('.container-header');

    const thirtysixDaysDiv1Img = document.querySelector('.thirtysix-days-div1-img');
    const thirtysixDaysDiv2Img = document.querySelector('.thirtysix-days-div2-img');

    

    

    // This makes nav-menu-work-div to disappear when clicked outside of the menu
    document.addEventListener('click', e =>{
        
        navMenuWorkDropdown.classList.remove('active');
        navMenuDiv2.classList.remove('active');
        workbar.classList.remove('active');
        
        
    })

    hamburger.addEventListener("click",()=>{
        console.log('hamburger clicked');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
    })

    navMenuLink.addEventListener("click",()=>{
        console.log('navMenuLink clicked');
        
        navMenuWorkDropdown.classList.toggle('active');
        navMenuDiv2.classList.toggle('active');
        workbar.classList.toggle('active');

    })

    navMenuLink.addEventListener("mouseover", ()=>{
        console.log('navMenuLink mouseover');
        navMenuWorkDropdown.classList.toggle('active');
        navMenuDiv2.classList.toggle('active');
        workbar.classList.toggle('active'); 
    })


    navMenuLink.addEventListener("click", ()=>{
        console.log('navMenuLink clicked');
    })

    // navMenuWork.addEventListener("mouseover",()=>{
    //     console.log('navMenuWork mouseover');
    // })


    window.onscroll = function (){scrollFunction()};

    function scrollFunction(){
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
            console.log("scrolled 500 pixel");
            signature_logo.classList.add('active');
            // containerHeader.classList.add('active');
            // b_logo.classList.add('active');
        }
        else {
            signature_logo.classList.remove('active');
            // containerHeader.classList.remove('active');
            // b_logo.classList.remove('active');
        }    
    }

    thirtysixDaysDiv1Img.addEventListener("click",()=>{
        console.log('thirtysixDaysImg clicked!');
        // window.location('thirtysix-days-2018.html');
        location.href='thirtysix-days-2018.html';
    })

    thirtysixDaysDiv2Img.addEventListener("click",()=>{
        console.log('thirtysixDaysImg clicked!');
        // window.location('thirtysix-days-2018.html');
        location.href='thirtysix-days-2020.html';
    })

    // swiper initialize script
    
      



});


