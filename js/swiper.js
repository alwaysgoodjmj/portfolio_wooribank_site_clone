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
      allowTouchMove: false,
    });

    const btnPlay = document.querySelector('.btn-play');
    const btnStop = document.querySelector('.btn-pause');
    
    btnStop.addEventListener('click', () => {
      swiper.autoplay.stop();
      btnStop.style.display = 'none';
      btnPlay.style.display = 'block';
    });

    btnPlay.addEventListener('click', () => {
      swiper.autoplay.start();
      btnPlay.style.display = 'none';
      btnStop.style.display = 'block';
    });
}); 
  
  