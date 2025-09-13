const faqs = document.querySelectorAll('.faq-head');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('show-faq')
    })
})




const review = new Swiper('.swiper-review', {
    loop: true,
    slidesPerView: "auto",
  
    navigation: {
      nextEl: '.next-review',
      prevEl: '.prev-review',
    },
  });

  

const articles = new Swiper('.swiper-articles', {
    loop: true,
  
    navigation: {
      nextEl: '.next-articles',
      prevEl: '.prev-articles',
    },
  
    breakpoints: {
      0: {
        spaceBetween: 20,
        slidesPerView: "auto",
      },
      1250: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
  }
  });



const selects = document.querySelectorAll('.select-head');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect')
    });
});

document.addEventListener('click', (e)=> {
    selects.forEach(select => {
        select.parentElement.contains(e.target) || select.parentElement.classList.remove('showSelect')
    });
});

// header
const menu_btn = document.querySelector('.menu-btn'),
      header = document.querySelector('header'),
      body = document.querySelector('body');

menu_btn.addEventListener('click', () => {
    header.classList.toggle('showMenu');
    body.classList.toggle('bodyStopScroll');
})

const nav_items = document.querySelectorAll('.menu .nav-list-btn');

nav_items.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('showList')
    });
});
