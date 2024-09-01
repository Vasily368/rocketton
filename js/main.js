
////////////слайдер//////////////

new Swiper ('.slider-container' , {
   

    spaceBetween: 25,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    breakpoints: {
       
        400: {
        
            slidesPerView: 2
        },
        500: {
            
            slidesPerView: 3
        },
        800: {
            
            slidesPerView: 5
        },
        1111: {
            slidesPerView: 10
        }
        
    },
    
   
    
});


/////////// модальное окно///////////////////

 let modal = document.getElementById('myModal');

 let btn = document.querySelectorAll('#openModal');

 let span = document.getElementsByClassName('close')[0];

 let modalBtn = document.getElementById('modal-btn');

 
 btn.forEach( function(item){
    item.onclick = function() {

        modal.style.display = "block";
    }
 })
 
 span.onclick = function() {
     modal.style.display = "none";
 }

modalBtn.onclick = function() {
        modal.style.display = "none";
    }


 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


//////////////////анимация///////////////////


const tl = gsap.timeline();

tl.fromTo('.header__btn',{
           
            opacity: 0,
            y: -100,
        },{
            y: 0,
            duration: 0.6,
            opacity: 1,
        }) .fromTo('.header__subtitle',{
           
            opacity: 0,
            y: -100,
        },{
            y: 0,
            duration: 0.6,
            opacity: 1,
        }) .fromTo('.header__title',{
           
            opacity: 0,
            y: -100,
        },{
            y: 0,
            duration: 0.6,
            opacity: 1,
        }).fromTo('.image-moon',{
            
            opacity: 0,
            y: 100,
        },{
            y: 0,
            duration: 0.6,
            opacity: 1,
        }).fromTo ('.logo',{
            y: 100,
            opacity: 0,
    
        },{
            y: 0,
            duration: 0.6,
            opacity: 1,
        }).fromTo('.social__header',{
           
            opacity: 0,
            y: 100,
        },{
            y: 0,
            duration: 0.6,
            opacity: 1,
        }).fromTo('.slider-container',{
           
            opacity: 0,
            y: 100,
        },{
            y: 0,
            duration: 0.6,
            opacity: 1,
        })



        gsap.from('.info__item-right',{
            scrollTrigger: {
                trigger: '.info__inner',
                
                start: 'bottom bottom',
            },
            x: 100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.info__item-left',{
            scrollTrigger: {
                trigger: '.info__inner',
               
                start: 'bottom bottom'
            },
            x: -100,
            duration: 0.6,
            opacity: 0,
        })

        gsap.from('.toPlay-box__item-right',{
            scrollTrigger: {
                trigger: '.toPlay__inner',
                
                start: 'top center'
            },
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.toPlay__title',{
            scrollTrigger: {
                trigger: '.toPlay__inner',
                
                start: 'top center'
            },
            y: -100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.toPlay__text',{
            scrollTrigger: {
                trigger: '.toPlay__inner',
                
                start: 'top center'
            },
            x: -100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.toPlay__btn',{
            scrollTrigger: {
                trigger: '.toPlay__inner',
               
                start: 'top center'
            },
            y: 100,
            duration: 0.6,
            opacity: 0,
        })


        gsap.from('.features-box__item-left',{
            scrollTrigger: {
                trigger: '.features__inner',
               
                start: 'top center'
            },
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.features__title',{
            scrollTrigger: {
                trigger: '.features__inner',
               
                start: 'top center'
            },
            y: -100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.features__text',{
            scrollTrigger: {
                trigger: '.features__inner',
                
                start: 'top center'
            },
            x: 100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.features__btn',{
            scrollTrigger: {
                trigger: '.features__inner',
                
                start: 'top center',
            },
            y: 100,
            duration: 0.6,
            opacity: 0,
        })

        gsap.from('.timeline ul li',{
            scrollTrigger: {
                trigger: '.roadmap__inner',
                
                start: 'top center',
            },
            duration: 0.6,
            opacity: 0,
        })

        gsap.from('.item-left',{
            scrollTrigger: {
                trigger: '.roadmap__inner',
                
                start: 'top center',
            },
            x: -100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.item-right',{
            scrollTrigger: {
                trigger: '.roadmap__inner',
                
                start: 'top center',
            },
            x: 100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.timeline__bottom-text',{
            scrollTrigger: {
                trigger: '.roadmap__inner',
               
                start: 'bottom bottom',
            },
            y: 100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.footer__copy',{
            scrollTrigger: {
                trigger: '.roadmap__inner',
                
                start: 'bottom bottom',
            },
            x: -100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.social__footer',{
            scrollTrigger: {
                trigger: '.roadmap__inner',
                
                start: 'bottom bottom',
            },
            x: 100,
            duration: 0.6,
            opacity: 0,
        })
        gsap.from('.footer__link',{
            scrollTrigger: {
                trigger: '.roadmap__inner',
                start: 'bottom bottom',
            },
            y: 100,
            duration: 0.6,
            opacity: 0,
        })


        
///////////////////вращение луны////////////////


       

        gsap.to('.image-moon',{
            rotation: 360,
            duration: 15,
            repeat: -1,
            ease: "none",
        })
