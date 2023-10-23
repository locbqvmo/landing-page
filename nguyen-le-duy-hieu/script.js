const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const btnToggleHeader = $('.header_toggle_button')
const headerMobile = $('#header_mobile')
const headerPC = $('#header_pc')
const headerContainerMobile=$('.header_mobile_wrapper')
const btnCloseMobile=$('.header_mobile_close')
const activeLinks=$$('.header_wrapper_middle ul a')
const activeSections=$$('section')
const inputSections=$$('.login_wrapper_main')

// toggle nav
btnToggleHeader.addEventListener('click',()=>{
    headerMobile.style.display='flex'
})
headerMobile.addEventListener('click',()=>{
    headerMobile.style.display='none'
})
headerContainerMobile.addEventListener('click',(e)=>{
    e.stopPropagation();
})
btnCloseMobile.addEventListener('click',()=>{
    headerMobile.style.display='none'
})

// header
window.addEventListener('scroll',()=>{
    const currentScrollY=window.scrollY||window.pageYOffset;

    if(document.body.scrollTop>300||document.documentElement.scrollTop>300){
        headerPC.classList.add('fixed-nav')
    }else{
        headerPC.classList.remove('fixed-nav')
    }
    prevScrollY=currentScrollY
})

// scroll spy
window.addEventListener('scroll',()=>{
    activeSections.forEach(sec=>{
        let top=window.scrollY;
        let id= sec.getAttribute('id');
        
        if(top>=sec.offsetTop-20&&top+20<=sec.offsetTop+sec.offsetHeight){
            activeLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('.header_wrapper_middle ul a[href*='+id+']').classList.add('active');
            })
        }
    })
})