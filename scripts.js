$(document).ready(function() {

  // Vars
  var modBtn  = $('#modBtn'),
      modal   = $('#modal'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });


  var modBtn2  = $('#modBtn2'),
      modal2   = $('#modal2');


  // open modal when click on open modal button
  modBtn2.on('click', function() {
    modal2.css('display', 'block');
    $('.modal-content2').removeClass('modal-animated-out').addClass('modal-animated-in');
      });

  // close modal when click on close button or somewhere out the modal content

  $('.close2').on('click', function() {
    $('.modal-content2').removeClass('modal-animated-in').addClass('modal-animated-out');
    modal2.css('display', 'none');
  });

  $('.modal2wrapper').click(function(event) {
    if(!$(event.target).closest('#modal-content2').length) {
        if($('.modal2wrapper').is(":visible")) {
            $('.modal2wrapper').hide();
        }
    }
});

// Dreamworks modal button

var modBtn3  = $('#modBtn3'),
    modal3   = $('#modal3');

modBtn3.on('click', function() {
  modal3.css('display', 'block');
  $('.modal-content3').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close3').on('click', function() {
  $('.modal-content3').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal3.css('display', 'none');
});

$('.modal3wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content3').length) {
      if($('.modal3wrapper').is(":visible")) {
          $('.modal3wrapper').hide();
      }
  }
});

// Fullscreen modal button

var modBtn4  = $('#modBtn4'),
    modal4   = $('#modal4');

modBtn4.on('click', function() {
  modal4.css('display', 'block');
  $('.modal-content4').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close4').on('click', function() {
  $('.modal-content4').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal4.css('display', 'none');
});

$('.modal4wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content4').length) {
      if($('.modal4wrapper').is(":visible")) {
          $('.modal4wrapper').hide();
      }
  }
});

// Wendy's modal button

var modBtn5  = $('#modBtn5'),
    modal5   = $('#modal5');

modBtn5.on('click', function() {
  modal5.css('display', 'block');
  $('.modal-content5').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close5').on('click', function() {
  $('.modal-content5').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal5.css('display', 'none');
});

$('.modal5wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content5').length) {
      if($('.modal5wrapper').is(":visible")) {
          $('.modal5wrapper').hide();
      }
  }
});

// Denali modal button 6

var modBtn6  = $('#modBtn6'),
    modal6   = $('#modal6');

modBtn6.on('click', function() {
  modal6.css('display', 'block');
  $('.modal-content6').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close6').on('click', function() {
  $('.modal-content6').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal6.css('display', 'none');
});

$('.modal6wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content6').length) {
      if($('.modal6wrapper').is(":visible")) {
          $('.modal6wrapper').hide();
      }
  }
});

// Tradesy modal button 7

var modBtn7  = $('#modBtn7'),
    modal7   = $('#modal7');

modBtn7.on('click', function() {
  modal7.css('display', 'block');
  $('.modal-content7').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close7').on('click', function() {
  $('.modal-content7').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal7.css('display', 'none');
});

$('.modal7wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content7').length) {
      if($('.modal7wrapper').is(":visible")) {
          $('.modal7wrapper').hide();
      }
  }
});

// Ultragenyx modal button 8

var modBtn8  = $('#modBtn8'),
    modal8   = $('#modal8');

modBtn8.on('click', function() {
  modal8.css('display', 'block');
  $('.modal-content8').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close8').on('click', function() {
  $('.modal-content8').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal8.css('display', 'none');
});

$('.modal8wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content4').length) {
      if($('.modal8wrapper').is(":visible")) {
          $('.modal8wrapper').hide();
      }
  }
});

// Fleischmann's modal button 9

var modBtn9  = $('#modBtn9'),
    modal9   = $('#modal9');

modBtn9.on('click', function() {
  modal9.css('display', 'block');
  $('.modal-content9').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close9').on('click', function() {
  $('.modal-content9').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal9.css('display', 'none');
});

$('.modal9wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content9').length) {
      if($('.modal9wrapper').is(":visible")) {
          $('.modal9wrapper').hide();
      }
  }
});

// Office Depot modal button 10

var modBtn10  = $('#modBtn10'),
    modal10   = $('#modal10');

modBtn10.on('click', function() {
  modal10.css('display', 'block');
  $('.modal-content10').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close10').on('click', function() {
  $('.modal-content10').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal10.css('display', 'none');
});

$('.modal10wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content10').length) {
      if($('.modal10wrapper').is(":visible")) {
          $('.modal10wrapper').hide();
      }
  }
});

// Disney modal button 11

var modBtn11  = $('#modBtn11'),
    modal11   = $('#modal11');

modBtn11.on('click', function() {
  modal11.css('display', 'block');
  $('.modal-content11').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close11').on('click', function() {
  $('.modal-content11').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal11.css('display', 'none');
});

$('.modal11wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content11').length) {
      if($('.modal11wrapper').is(":visible")) {
          $('.modal11wrapper').hide();
      }
  }
});

// Jukin modal button 12

var modBtn12  = $('#modBtn12'),
    modal12   = $('#modal12');

modBtn12.on('click', function() {
  modal12.css('display', 'block');
  $('.modal-content12').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close12').on('click', function() {
  $('.modal-content12').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal12.css('display', 'none');
});

$('.modal12wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content12').length) {
      if($('.modal12wrapper').is(":visible")) {
          $('.modal12wrapper').hide();
      }
  }
});

// Wesco modal button 13

var modBtn13  = $('#modBtn13'),
    modal13   = $('#modal13');

modBtn13.on('click', function() {
  modal13.css('display', 'block');
  $('.modal-content13').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close13').on('click', function() {
  $('.modal-content13').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal13.css('display', 'none');
});

$('.modal13wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content13').length) {
      if($('.modal13wrapper').is(":visible")) {
          $('.modal13wrapper').hide();
      }
  }
});

// Geb-Probe modal button 14

var modBtn14  = $('#modBtn14'),
    modal14   = $('#modal14');

modBtn14.on('click', function() {
  modal14.css('display', 'block');
  $('.modal-content14').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close14').on('click', function() {
  $('.modal-content14').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal14.css('display', 'none');
});

$('.modal14wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content14').length) {
      if($('.modal14wrapper').is(":visible")) {
          $('.modal14wrapper').hide();
      }
  }
});

// eHarmony modal button 15

var modBtn15  = $('#modBtn15'),
    modal15   = $('#modal15');

modBtn15.on('click', function() {
  modal15.css('display', 'block');
  $('.modal-content15').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close15').on('click', function() {
  $('.modal-content15').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal15.css('display', 'none');
});

$('.modal15wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content15').length) {
      if($('.modal15wrapper').is(":visible")) {
          $('.modal15wrapper').hide();
      }
  }
});

// Quiksilver modal button 16

var modBtn16  = $('#modBtn16'),
    modal16   = $('#modal16');

modBtn16.on('click', function() {
  modal16.css('display', 'block');
  $('.modal-content16').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close16').on('click', function() {
  $('.modal-content16').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal16.css('display', 'none');
});

$('.modal16wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content16').length) {
      if($('.modal16wrapper').is(":visible")) {
          $('.modal16wrapper').hide();
      }
  }
});

// INET modal button 17

var modBtn17  = $('#modBtn17'),
    modal17   = $('#modal17');

modBtn17.on('click', function() {
  modal17.css('display', 'block');
  $('.modal-content17').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close17').on('click', function() {
  $('.modal-content17').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal17.css('display', 'none');
});

$('.modal15wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content17').length) {
      if($('.modal17wrapper').is(":visible")) {
          $('.modal17wrapper').hide();
      }
  }
});

// T-Mobile modal button 18

var modBtn18  = $('#modBtn18'),
    modal18   = $('#modal18');

modBtn18.on('click', function() {
  modal18.css('display', 'block');
  $('.modal-content18').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close18').on('click', function() {
  $('.modal-content18').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal18.css('display', 'none');
});

$('.modal18wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content18').length) {
      if($('.modal18wrapper').is(":visible")) {
          $('.modal18wrapper').hide();
      }
  }
});

// JusCollege modal button 19

var modBtn19  = $('#modBtn19'),
    modal19   = $('#modal19');

modBtn19.on('click', function() {
  modal19.css('display', 'block');
  $('.modal-content19').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close19').on('click', function() {
  $('.modal-content19').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal19.css('display', 'none');
});

$('.modal19wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content19').length) {
      if($('.modal19wrapper').is(":visible")) {
          $('.modal19wrapper').hide();
      }
  }
});

// EpicSignal modal button 20

var modBtn20  = $('#modBtn20'),
    modal20   = $('#modal20');

modBtn20.on('click', function() {
  modal20.css('display', 'block');
  $('.modal-content20').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close20').on('click', function() {
  $('.modal-content20').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal20.css('display', 'none');
});

$('.modal20wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content20').length) {
      if($('.modal20wrapper').is(":visible")) {
          $('.modal20wrapper').hide();
      }
  }
});

// Commune modal button 21

var modBtn21  = $('#modBtn21'),
    modal21   = $('#modal21');

modBtn21.on('click', function() {
  modal21.css('display', 'block');
  $('.modal-content21').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close21').on('click', function() {
  $('.modal-content21').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal21.css('display', 'none');
});

$('.modal21wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content21').length) {
      if($('.modal21wrapper').is(":visible")) {
          $('.modal21wrapper').hide();
      }
  }
});

// Susa modal button 22

var modBtn22  = $('#modBtn22'),
    modal22   = $('#modal22');

modBtn22.on('click', function() {
  modal22.css('display', 'block');
  $('.modal-content22').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close22').on('click', function() {
  $('.modal-content22').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal22.css('display', 'none');
});

$('.modal22wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content22').length) {
      if($('.modal22wrapper').is(":visible")) {
          $('.modal22wrapper').hide();
      }
  }
});

// Aimco modal button 23

var modBtn23  = $('#modBtn23'),
    modal23   = $('#modal23');

modBtn23.on('click', function() {
  modal23.css('display', 'block');
  $('.modal-content23').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close23').on('click', function() {
  $('.modal-content23').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal23.css('display', 'none');
});

$('.modal23wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content23').length) {
      if($('.modal23wrapper').is(":visible")) {
          $('.modal23wrapper').hide();
      }
  }
});

// Emetry modal button 24

var modBtn24  = $('#modBtn24'),
    modal24   = $('#modal24');

modBtn24.on('click', function() {
  modal24.css('display', 'block');
  $('.modal-content24').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close24').on('click', function() {
  $('.modal-content24').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal24.css('display', 'none');
});

$('.modal24wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content24').length) {
      if($('.modal24wrapper').is(":visible")) {
          $('.modal24wrapper').hide();
      }
  }
});

// Fortress modal button 25

var modBtn25  = $('#modBtn25'),
    modal25   = $('#modal25');

modBtn25.on('click', function() {
  modal25.css('display', 'block');
  $('.modal-content25').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close25').on('click', function() {
  $('.modal-content25').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal25.css('display', 'none');
});

$('.modal25wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content25').length) {
      if($('.modal25wrapper').is(":visible")) {
          $('.modal25wrapper').hide();
      }
  }
});

// Soothe modal button 26

var modBtn26  = $('#modBtn26'),
    modal26   = $('#modal26');

modBtn26.on('click', function() {
  modal26.css('display', 'block');
  $('.modal-content26').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close26').on('click', function() {
  $('.modal-content26').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal26.css('display', 'none');
});

$('.modal26wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content26').length) {
      if($('.modal26wrapper').is(":visible")) {
          $('.modal26wrapper').hide();
      }
  }
});

// echo modal button 27

var modBtn27  = $('#modBtn27'),
    modal27   = $('#modal27');

modBtn27.on('click', function() {
  modal27.css('display', 'block');
  $('.modal-content27').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close27').on('click', function() {
  $('.modal-content27').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal27.css('display', 'none');
});

$('.modal27wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content27').length) {
      if($('.modal27wrapper').is(":visible")) {
          $('.modal27wrapper').hide();
      }
  }
});

// Within modal button 28

var modBtn28  = $('#modBtn28'),
    modal28   = $('#modal28');

modBtn28.on('click', function() {
  modal28.css('display', 'block');
  $('.modal-content28').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close28').on('click', function() {
  $('.modal-content28').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal28.css('display', 'none');
});

$('.modal28wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content28').length) {
      if($('.modal28wrapper').is(":visible")) {
          $('.modal28wrapper').hide();
      }
  }
});

// Cookies modal button 29

var modBtn29  = $('#modBtn29'),
    modal29   = $('#modal29');

modBtn29.on('click', function() {
  modal29.css('display', 'block');
  $('.modal-content29').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close29').on('click', function() {
  $('.modal-content29').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal29.css('display', 'none');
});

$('.modal29wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content29').length) {
      if($('.modal29wrapper').is(":visible")) {
          $('.modal29wrapper').hide();
      }
  }
});

// Wasserman modal button 30

var modBtn30  = $('#modBtn30'),
    modal30   = $('#modal30');

modBtn30.on('click', function() {
  modal30.css('display', 'block');
  $('.modal-content30').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close30').on('click', function() {
  $('.modal-content30').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal30.css('display', 'none');
});

$('.modal30wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content30').length) {
      if($('.modal30wrapper').is(":visible")) {
          $('.modal30wrapper').hide();
      }
  }
});

// Fonzworth modal button 31

var modBtn31  = $('#modBtn31'),
    modal31   = $('#modal31');

modBtn31.on('click', function() {
  modal31.css('display', 'block');
  $('.modal-content31').removeClass('modal-animated-out').addClass('modal-animated-in');
    });

$('.close31').on('click', function() {
  $('.modal-content31').removeClass('modal-animated-in').addClass('modal-animated-out');
  modal31.css('display', 'none');
});

$('.modal31wrapper').click(function(event) {
  if(!$(event.target).closest('#modal-content31').length) {
      if($('.modal31wrapper').is(":visible")) {
          $('.modal31wrapper').hide();
      }
  }
});



});
