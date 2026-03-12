document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.slide-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    const btnPlay = document.querySelector('.btn-play');
    const btnStop = document.querySelector('.btn-pause');
    
    btnStop.addEventListener('click', () => {
        swiper.autoplay.stop();

        btnStop.classList.add('on');
        btnPlay.classList.remove('on');
    });
    
    btnPlay.addEventListener('click', () => {
        swiper.autoplay.start();

        btnPlay.classList.add('on');
        btnStop.classList.remove('on');
    });
}); 
  
  