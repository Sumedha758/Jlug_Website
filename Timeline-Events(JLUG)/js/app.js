

    //Animations     
      $('#experience').find('.timeline-item:not(:first)').each(function(i){            
          var element = $(this),
          itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
          element.css('opacity', 0).one('inview', function(isInView) {
              if (isInView){
                  setTimeout(function(){
                      element.addClass('animated bounceInUp').css('opacity', 1);
                  } , itemsDelay * (i * 2));
              }
          });
      });