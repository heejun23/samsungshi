$(document).ready(function(){
  // 헤더 이미지 함수선언
  let h_logo = $('header h1 img');
  let h_lang = $('header .h_lnb .lang img');
  let h_bars = $('.toggle img');
  // 헤더에 마우스 올렸을 때 색을 하얗게 바꾼다.
  $('header').mouseenter(function(){
    $('header').addClass('on');
    $('.h_wrap').addClass('shadow') // --------------수정
    h_logo.attr('src','./images/logo_blue.svg');   /* ------- 수정 */
    h_lang.attr('src','./images/global_black.svg');   /* ------- 수정 */
    h_bars.attr('src','./images/bar_black.svg');   /* ------- 수정 */
  })
  // 헤더에 마우스 떠날때 색을 투명하게 바꾼다.
  $('header').mouseleave(function(){
    // 스크롤이 100 이하일떄만
    let yPos = $(document).scrollTop();
    if(yPos<100 && $('.gnb_wrap').css('right')!='0px'){
      $('header').removeClass('on');
      $('.h_wrap').removeClass('shadow') // --------------수정
      h_logo.attr('src','./images/logo_white.svg');   /* ------- 수정 */
      h_lang.attr('src','./images/global_white.svg');   /* ------- 수정 */
      h_bars.attr('src','./images/bar_white.svg');   /* ------- 수정 */
    }
  })
  // 스크롤을 100 이상 내리면 헤더의 색을 하얗게 바꾼다.
  $(document).scroll(function(){
    let yPos = $(document).scrollTop();
    // alert(yPos);
    if(yPos>=100 || $('header:hover').length!=0){ // --------------수정
      $('header').addClass('on');
      $('.h_wrap').addClass('shadow')
      h_logo.attr('src','./images/logo_blue.svg');   /* ------- 수정 */
      h_lang.attr('src','./images/global_black.svg');   /* ------- 수정 */
      h_bars.attr('src','./images/bar_black.svg');
    }else{
      $('header').removeClass('on');
      $('.h_wrap').removeClass('shadow')
      h_logo.attr('src','./images/logo_white.svg');   /* ------- 수정 */
      h_lang.attr('src','./images/global_white.svg');   /* ------- 수정 */
      h_bars.attr('src','./images/bar_white.svg');   /* ------- 수정 */
    }
  });

  // 1025px 이상일 때 .gnb에 마우스 올릴 시 서브메뉴 나옴
  $('.gnb').mouseenter(function(){
    let w_width = window.innerWidth;
    // console.log(w_width);
    if(w_width>1024){
      // .h_wrap의 높이를 조절
      // alert('test');
      $('.h_wrap').addClass('on');
    }
  });
  // .gnb에서 마우스 뺄 시 서브메뉴 사라짐
  $('.gnb').mouseleave(function(){
    $('.h_wrap').removeClass('on');
  })

  // 토글버튼 클릭시 메뉴 슬라이드 인되며 배경 생김
  $('header .toggle').click(function(){
    $('.gnb_wrap').animate({'right':'0px'},300);
    $('.gnb_background').fadeIn();
  });
  // 닫기버튼 클릭시 메뉴 슬라이드 아웃되며 배경 사라짐
  $('header .close_btn img').click(function(){
    $('.gnb_wrap').animate({'right':'-325px'},300);
    $('.gnb_background').fadeOut();
  })
  // gnb 버튼 누르면 리스트 펼쳐지며 다른 리스트 접힘
  $('.gnb > ul > li').click(function(e){
    let w_width = window.innerWidth;
    
    //태블릿,모바일일 때만 적용되는 서식
    if(w_width<1025){
      $('.gnb > ul > li > a').attr('href','#none'); // --------------수정
      $(this).find('ul').slideDown().parent().siblings().find('ul').slideUp();
      $(this).children('a').attr('class','on').parent().siblings().children('a').attr('class', '');
      $(this).find('.fas').css('transform','rotate(180deg) translateX(-27px)').parent().parent().siblings().find('.fas').css('transform','rotate(0deg)');
    }
  });

  // 추가 스크립트(모바일/타블렛에서 pc로 이동시 헤더 오류 생기지 않음)
  $(window).resize(function(){
    let w_width = window.innerWidth;
    if(w_width>1024){
      // alert('1025');
      $('.gnb > ul > li > a').eq(0).attr('href','company.html');
      $('.gnb > ul > li > a').eq(1).attr('href','product.html');
      $('.gnb > ul > li > a').eq(2).attr('href','#none');
      $('.gnb > ul > li > a').eq(3).attr('href','#none');
      $('.gnb > ul > li > a').eq(4).attr('href','http://kimjisu.dothome.co.kr/bbs/bbs/board.php?bo_table=Recruitment');
      $('.gnb > ul > li > a').eq(5).attr('href','#none');

      $('.gnb > ul > li > ul').slideDown();
      $('.gnb_wrap').animate({'right':'-325px'},300);
      $('.gnb_background').fadeOut();
      
      let yPos = $(document).scrollTop();
      if(yPos<100 && $('.gnb_wrap').css('right')!='0px'){
        $('header').removeClass('on');
        $('.h_wrap').removeClass('shadow') // --------------수정
        h_logo.attr('src','./images/logo_white.svg');  
        h_lang.attr('src','./images/global_white.svg');  
        h_bars.attr('src','./images/bar_white.svg');  
      }
    }else{
      $('.gnb > ul > li > ul').slideUp();
      $('.gnb > ul > li > a').attr('class','');
      $('.gnb > ul > li .fas').css('transform','rotate(0deg)');
    }
  })

  // 푸터 탑버튼 스크롤 내려야 보이기
  let t_btn = $('.to_top');
  $(document).scroll(function(){
    let scrT = $(this).scrollTop()
    // let w_width = window.innerWidth;
    // 모바일 아닐때만
    // if(w_width>767){
      if($(this).scrollTop() > 300){
        t_btn.fadeIn();
      }else{
        t_btn.fadeOut();
      }
    console.log(scrT)
  });
  // 모바일로 사이즈 줄이면 탑버튼 없애기
  // $(window).resize(function(){
  //   let w_width = window.innerWidth;
  //   if(w_width<768){
  //     t_btn.fadeOut();
  //   }
  // })
  // 탑버튼 누르면 맨 위로 스무스하게 올라가기
  t_btn.find('a').click(function(e){
    e.preventDefault();
    // window.scrollTo({top: 0, behavior: 'smooth'});
    $('html, body').animate({ scrollTop : 0}, 400);
  });


  // 패밀리 사이트 연결
  $('#family_site').change(function(){
    let value = $('#family_site').value;
    window.open(value,'_blank');
  });
});