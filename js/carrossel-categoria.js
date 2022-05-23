const gliders = document.querySelectorAll("[id^=glider]");

gliders.forEach((glide) => {
  const glider = document.querySelector(`#${glide.id} .glider`);
  const gliderPrev = document.querySelector(`#${glide.id} .glider-prev`);
  const gliderNext = document.querySelector(`#${glide.id} .glider-next`);
  const gliderDots = document.querySelector(`#${glide.id} .dots`);

  new Glider(glider, {
    slidesToShow: 5.5,
    slidesToScroll: 1.5,
    draggable: true,
    dots: gliderDots,
    rewind:true,
    arrows: {
      prev: gliderPrev,
      next: gliderNext
    }
  });
});
