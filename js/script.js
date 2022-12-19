$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.menu-header').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
let slide = $('.slider__slide'),
    slider = $('.cooperation__cards'),
    countSlide = slide.length,
    shag = 200,
    position = 0,
    max = (shag * countSlide) - $('.slider').width();

slider.width(200*countSlide);
$('.next').click(function(){
    console.log('click')
  if (position == -max){
    position = 0;
    slider.css("left",position+'px');

  }else{
    position = position-shag;
    slider.css("left",position+"px");
    
  }
});
$('.prev').click(function(){
  if (position == 0){
    position = -max;
    slider.css('left',position+'px');
  }else{
    position = position+shag;
    slider.css('left',position+"px");
  }
});



//Newitems

let slide1 = $('.slider-newitems__slide'),
    slider1 = $('.newitems__row'),
    countSlide1 = slide.length,
    shag1 = 250,
    position1 = 0,
    max1 = (shag * countSlide) - $('.newitems__slider').width();

slider1.width(250*countSlide);

$('.newitems-next').click(function(){
    console.log('click')
  if (position1 == -max1){
    position1 = 0;
    slider1.css("left",position1+'px');

  }else{
    position1 = position1-shag1;
    slider1.css("left",position1+"px");
    
  }
});
$('.newitems-prev').click(function(){
  if (position1 == 0){
    position1 = -max1;
    slider1.css('left',position1+'px');
  }else{
    position1 = position1+shag1;
    slider1.css('left',position1+"px");
  }
});


//Сайдбар
$('.sidebar-name__arrow_1').click(function(){
    $('.form-sidebar_1').toggleClass('active');
});
$('.sidebar-name__arrow_2').click(function(){
  $('.form-sidebar_2').toggleClass('active');
});
$('.sidebar-name__arrow_3').click(function(){
  $('.form-sidebar_3').toggleClass('active');
});
$('.sidebar-name__arrow_4').click(function(){
  $('.form-sidebar_4').toggleClass('active');
});
//Каталог показать еще
$('._4').click(function(){
  let heightContent = $('.content__row').height(),
    windowWidth = $(window).width(),
    countContentItem = $('.row-content__item').length,
    itemHeight = $('.row-content__item').height(),
    shagContent = 600,
    maxHeight = countContentItem * itemHeight,
    heightContentNew=0;
  
 
  
  if(windowWidth>1200){
    maxHeight = countContentItem/4 * itemHeight;
    console.log('Max 4 колонки:' + maxHeight);
    console.log('NewContentHeight 4 колонки'+ heightContentNew)
    if(maxHeight>heightContent){
      heightContentNew = heightContent + shagContent/2;
      $('.content__row').css('height',heightContentNew+'px');
      }else{
        
      }
    
  }else if(windowWidth<1200 && windowWidth>973){
    maxHeight = countContentItem/3 * itemHeight;
    console.log('NewContentHeight 3 колонки'+ heightContentNew)
    console.log('Max 3 колонки:' + maxHeight);
    if(maxHeight>heightContent){
      heightContentNew = heightContent + shagContent;
      $('.content__row').css('height',heightContentNew+'px');
      }else{
        
      }
  }else if(windowWidth<973 && windowWidth>726){
      maxHeight = countContentItem/2 * itemHeight;
      console.log('Max 2колонки:' + maxHeight);
      console.log('NewContentHeight 2 колонки'+ heightContentNew)
      if(maxHeight>heightContent){
        heightContentNew = heightContent + shagContent;
        $('.content__row').css('height',heightContentNew+'px');
        }else{
          
   }
    
  }else if(windowWidth<726){
    console.log('Max 1 колнка:' + maxHeight);
    console.log('NewContentHeight 1 колонка'+ heightContentNew)
   if(maxHeight>heightContent){
    heightContentNew = heightContent + shagContent;
    $('.content__row').css('height',heightContentNew+'px');
    }else{

    }
  }
  console.log('MaxNext:' + maxHeight);
  console.log('ContentHeight:'+ heightContent)
  console.log('NewContentHeight'+ heightContentNew)
   
     
});
//productPageSlider
$('.next_1').click(function(){
  console.log('click')
	let currentSlide = $('.image.current'),
		 currentSlideIndex = currentSlide.index(),
		 nextSlide = currentSlide.next(),
		 nextSlideIndex = currentSlideIndex + 1;

	currentSlide.hide().removeClass('current');
	if(nextSlideIndex === ($('.image').length)){
		$('.image:first').show().addClass('current');
	}else{
		nextSlide.show().addClass('current');
	}
});
$('.prev_1').click(function(){
  console.log('click')
	let currentSlide = $('.image.current'),
		 currentSlideIndex = currentSlide.index(),
		 prevSlide = currentSlide.prev(),
		 prevSlideIndex = currentSlideIndex - 1;

	currentSlide.hide().removeClass('current');

	if(prevSlideIndex === ($('.image:first').index()-1)){
		$('.image:last').show().addClass('current');
	}else{
		prevSlide.show().addClass('current');
	}
});
$('.title__about').click(function(){
  $('.title__about').addClass('active-title');
  $('.title__characteristics,.title__recomend').removeClass('active-title');
  $('.content-about-part2__about').addClass('content-about-part2__active');
  $('.content-about-part2__characteristics,.content-about-part2__recomend').removeClass('content-about-part2__active');

});
$('.title__characteristics').click(function(){
  $('.title__characteristics').addClass('active-title');
  $('.title__about,.title__recomend').removeClass('active-title');
  $('.content-about-part2__characteristics').addClass('content-about-part2__active');
  $('.content-about-part2__about,.content-about-part2__recomend').removeClass('content-about-part2__active');
});
$('.title__recomend').click(function(){
  $('.title__recomend').addClass('active-title');
  $('.title__about,.title__characteristics').removeClass('active-title');
  $('.content-about-part2__recomend').addClass('content-about-part2__active');
  $('.content-about-part2__characteristics,.content-about-part2__about').removeClass('content-about-part2__active');
});
$("a[href^='#']").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
      scrollTop: $(href).offset().top
  },
  {
    duration: 500,   // по умолчанию «400»
    easing: "linear" // по умолчанию «swing»
});

  return false;
});