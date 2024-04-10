// SCRIPT DE LA CAJA BUSCADORA

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
}

//Esconder Menu y Caja buscadora al Deslizar

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active'); 
}

//HEADER

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //cambiar icono
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'bx bx-plus'){
            icon.className = "bx bx-minus"
        }else{
            icon.className = 'bx bx-plus'
        }
    })
})


