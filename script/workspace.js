$(document).ready(function(){
  // 타이틀 시작 애니메이션
  // gsap.to('.w_title img', 2, {
  //   scale: 1.3
  // });
  
  w_tl = gsap.timeline();
  
  w_tl.from('.w_title h2',0.3,{
    y:100,
    opacity:0
  });
  w_tl.from('.w_title p',0.3,{
    y:100,
    opacity:0
  });
  w_tl.from('.workplace h3',0.3,{
    y:100,
    opacity:0
  });
  w_tl.from('.workplace .w_img',0.3,{
    y:100,
    opacity:0
  });
  
  
  $('.workplace').parent().css('padding-bottom','0');
  $('.workplace').parent().next().css('margin-top','0');
})
