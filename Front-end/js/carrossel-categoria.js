const gliders = document.querySelectorAll("[id^=glider]");

gliders.forEach((glide) => {
  const glider = document.querySelector(`#${glide.id} .glider`);
  const gliderPrev = document.querySelector(`#${glide.id} .glider-prev`);
  const gliderNext = document.querySelector(`#${glide.id} .glider-next`);
  const gliderDots = document.querySelector(`#${glide.id} .dots`);

  new Glider(glider, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: gliderDots,
    rewind:true,
    arrows: {
      prev: gliderPrev,
      next: gliderNext
    },
    responsive: [
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 6.5,
            slidesToScroll: 1.5,
            itemWidth: 150,
            duration: 0.8
          }
        }
      ]
  });
});
