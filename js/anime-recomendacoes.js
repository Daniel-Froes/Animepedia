new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#dots',
    rewind:true,
    draggable:true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
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
          slidesToShow: 5,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });