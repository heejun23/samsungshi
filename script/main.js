$(document).ready(function(){

  // 1. 메인 비디오 영역 일시정지 버튼
  const video = document.getElementById('video');
  const video_btn = $('.main_video i');

  video_btn.click(function(){
    // alert(video);
    if(video_btn.hasClass('fa-pause')){
      video.pause();
      video_btn.attr("class",'fas fa-play');
    }else{
      video.play();
      video_btn.attr("class",'fas fa-pause');
    }
  })

  // 2. 회사소개 영역
      const count1 = document.getElementById('c_count1');
      const count2 = document.getElementById('c_count2');
      const count3 = document.getElementById('c_count3');
      const count4 = document.getElementById('c_count4');
      const count5 = document.getElementById('c_count5');
      const count6 = document.getElementById('c_count6');
  
      let od1 = new Odometer({
        el: count1,
        format:'d'
      });
      let od2 = new Odometer({
        el: count2,
        format:'(,ddd)'
      });
      let od3 = new Odometer({
        el: count3,
        format:'(,ddd)'
      });
      let od4 = new Odometer({
        el: count4,
        format:'(,ddd)'
      });
      let od5 = new Odometer({
        el: count5,
        format:'(,ddd)'
      });
      let od6 = new Odometer({
        el: count6,
        format:'(,ddd)'
      });
  
      gsap.to("#c_count1",{
          scrollTrigger:{
            trigger:'#c_count1',
            start:"0% 100%",
            end:"0% 100%",
            toggleActions: "restart none reverse none",
          },
          innerHTML : 1974,
        })
      gsap.to("#c_count2",{
          scrollTrigger:{
            trigger:'#c_count2',
            start:"0% 100%",
            end:"0% 100%",
            toggleActions: "restart none reverse none",
          },
          innerHTML : 9640,
        })
      gsap.to("#c_count3",{
          scrollTrigger:{
            trigger:'#c_count3',
            start:"0% 100%",
            end:"0% 100%",
            toggleActions: "restart none reverse none",
          },
          innerHTML : 8801,
        })
      gsap.to("#c_count4",{
          scrollTrigger:{
            trigger:'#c_count4',
            start:"0% 100%",
            end:"0% 100%",
            toggleActions: "restart none reverse none",
          },
          innerHTML : 158920,
        })
      gsap.to("#c_count5",{
          scrollTrigger:{
            trigger:'#c_count5',
            start:"0% 100%",
            end:"0% 100%",
            toggleActions: "restart none reverse none",
          },
          innerHTML : 79072,
        })
      gsap.to("#c_count6",{
          scrollTrigger:{
            trigger:'#c_count6',
            start:"0% 100%",
            end:"0% 100%",
            toggleActions: "restart none reverse none",
          },
          innerHTML : 393000,
        })
  
        // 3. 사업소개 서식
        let b_button = $('.b_cont');
        b_button.mouseenter(function(){
          $(this).parent().addClass('on').siblings().removeClass('on');
        });
  
        // 4. 기술소개 서식
        // 1. 변수생성
        const v_slides = $('.vertical_img > div');
        // console.log(v_slides);
        // 2. 각 슬라이드에 마우스 오버시 함수
        // 자세히 보기 가리기(display:block을 적용하기 위해서 여기서 함)
        $('.vertical_img .view_more').slideUp();
        v_slides.mouseenter(function(){
          let w_size = window.innerWidth;
          // console.log(w_size);
          if(w_size>1024){   /* 수정 */
            // 마우스 올린 슬라이드는 가로를 늘리고 나머지 슬라이드는 가로를 줄인다.
            $(this).stop().animate({width:'50%'}).siblings().stop().animate({width:'12.5%'});
            // 마우스 올린 슬라이드의 글씨 크기를 키운다
            // 실제작때는 더 자세하게
            $(this).find('.v_title p').stop().animate({fontSize:'24px',opacity:'1'});
            $(this).find('.v_title h3').stop().animate({fontSize:'40px',opacity:'1'});
            $(this).find('.view_more').stop().slideDown();
          }else if(w_size>=768){   /* 수정 */
            // 마우스 올린 슬라이드는 가로를 늘리고 나머지 슬라이드는 가로를 줄인다.
            $(this).stop().animate({height:'60%'}).siblings().stop().animate({height:'10%',lineHeight:'180%'});
            // 마우스 올린 슬라이드의 글씨 크기를 키운다
            // 실제작때는 더 자세하게
            $(this).find('.v_title p').stop().animate({fontSize:'24px',opacity:'1'});
            $(this).find('.v_title h3').stop().animate({fontSize:'36px',opacity:'1'});
            $(this).find('.view_more').stop().slideDown();
          }else{   /* 수정 */
            // 마우스 올린 슬라이드는 가로를 늘리고 나머지 슬라이드는 가로를 줄인다.
            $(this).stop().animate({height:'60%'}).siblings().stop().animate({height:'10%'});
            // 마우스 올린 슬라이드의 글씨 크기를 키운다
            // 실제작때는 더 자세하게
            $(this).find('.v_title p').stop().animate({fontSize:'15px',opacity:'1',});
            $(this).find('.v_title h3').stop().animate({fontSize:'24px',opacity:'1'});
            $(this).find('.view_more').stop().slideDown();
          }
        });
        // 3. 마우스 떠날때 원상복귀
        v_slides.mouseleave(function(){
          let w_size = window.innerWidth;
          if(w_size>1024){   /* 수정 */
            v_slides.stop().animate({width:'20%'});
            $(this).find('.v_title p').stop().animate({fontSize:'15px',opacity:'0.5'});
            $(this).find('.v_title h3').stop().animate({fontSize:'24px',opacity:'0.5'});
            $(this).find('.view_more').stop().slideUp();
          }else if(w_size>=768){   /* 수정 */
            v_slides.stop().animate({height:'20%'});
            $(this).find('.v_title p').stop().animate({fontSize:'15px',opacity:'0.5'});
            $(this).find('.v_title h3').stop().animate({fontSize:'24px',opacity:'0.5'});
            $(this).find('.view_more').stop().slideUp();
          }else{   /* 수정 */
            v_slides.stop().animate({height:'20%'});
            $(this).find('.v_title p').stop().animate({fontSize:'13px',opacity:'0.5'});
            $(this).find('.v_title h3').stop().animate({fontSize:'16px',opacity:'0.5'});
            $(this).find('.view_more').stop().slideUp();
          }
        });
        // 4. 화면 줄일 때 1024px이하이면 가로 100%로 변경
        $(window).resize(function(){
          if(window.innerWidth<=1024){
            v_slides.width('100%');
          }else{
            v_slides.height('100%');
          }
        });
        // 5. 마우스 클릭시 같은 효과
        v_slides.click(function(){
          let w_size = window.innerWidth;
          // console.log(w_size);
          if(w_size>1024){
            // 마우스 올린 슬라이드는 가로를 늘리고 나머지 슬라이드는 가로를 줄인다.
            $(this).stop().animate({width:'60%'}).siblings().stop().animate({width:'10%'});
            // 마우스 올린 슬라이드의 글씨 크기를 키운다
            // 실제작때는 더 자세하게
            $(this).find('.v_title p').stop().animate({fontSize:'24px'});
            $(this).find('.v_title h3').stop().animate({fontSize:'40px'});
            $(this).find('.view_more').stop().slideDown();
          }else if(w_size>=768){
            // 마우스 올린 슬라이드는 가로를 늘리고 나머지 슬라이드는 가로를 줄인다.
            $(this).stop().animate({height:'60%'}).siblings().stop().animate({height:'10%'});
            // 마우스 올린 슬라이드의 글씨 크기를 키운다
            // 실제작때는 더 자세하게
            $(this).find('.v_title p').stop().animate({fontSize:'24px'});
            $(this).find('.v_title h3').stop().animate({fontSize:'36px'});
            $(this).find('.view_more').stop().slideDown();
          }else{
            // 마우스 올린 슬라이드는 가로를 늘리고 나머지 슬라이드는 가로를 줄인다.
            $(this).stop().animate({height:'60%'}).siblings().stop().animate({height:'10%'});
            // 마우스 올린 슬라이드의 글씨 크기를 키운다
            // 실제작때는 더 자세하게
            $(this).find('.v_title p').stop().animate({fontSize:'14px'});
            $(this).find('.v_title h3').stop().animate({fontSize:'20px'});
            $(this).find('.view_more').stop().slideDown();
          }
        });
  
    // 5. 사업장소개 서식
    
        // 지도 점 들어가면 말풍선 나오게하기
        let map_btn = $('.wm_wrap .point');
        map_btn.mouseenter(function(){
          let w_size = $(window).width();
          if(w_size>767){
            $(this).parent().find('.location').stop().fadeIn().parent().siblings().find('.location').stop().fadeOut();
            // console.log(w_size);
          }else{
            map_btn.parent().find('.location').stop().fadeOut();
            // console.log(w_size);
          }
        });
        // 지도 점 누르면 말풍선 나오게하기
        map_btn.click(function(){
          let w_size = $(window).width();
          if(w_size>767){
            $(this).parent().find('.location').stop().fadeIn().parent().siblings().find('.location').stop().fadeOut();
          }else{
            map_btn.parent().find('.location').stop().fadeOut();
          }
        });
        // 윈도우 사이즈 줄이면 말풍선 사라지게 하기 크고 줄일때 사이즈 변하기
        $(window).resize(function(){
          let w_size = $(window).width();
          if(w_size<=767){
            map_btn.parent().find('.location').stop().fadeOut();
            $('.wm_wrap .point').css({width:'1rem', height: '1rem'}).find('.point_inner').css({width:'0.6rem', height: '0.6rem', animation: 'none'});
          }else{
            $('.wm_wrap .point').css({width:'50px', height: '50px'}).find('.point_inner').css({width:'30px', height: '30px', animation: 'none'});
          }
        })
  
        // 모바일일 때 탭을 누르면 해당 지역의 원이 커지게 하기
        let map_tab = $('.wm_tab_label label');
        map_tab.click(function(){
          let country = $(this).attr('for');
          // console.log(country);
          let points = $('.wm_wrap .point');
          $(points).css({width:'1rem', height: '1rem'}).find('.point_inner').css({width:'0.6rem', height: '0.6rem', animation: 'none'});
          // console.log(points);
          for(let num in points){
            // console.log(points[num]);
            if($(points[num]).hasClass(country)){
              $(points[num]).css({width:'3rem', height: '3rem'}).find('.point_inner').css({width:'2rem', height: '2rem', animation: 'blink 1s infinite'});
            }
          }
        });
  
    // 6. 채용정보 마우스 커서 이벤트
    // 마우스 움직일시 .cursor박스가 그 위치로 움직인다(전체 화면에 적용)
        // 커서 변수 생성
        const cursor = $('.cursor');
        // console.log(cursor);
        const animateCursor = (e) => {
          // 커서의 css left top을 현재 페이지의 마우스 위치로 바꾼다
          cursor.css('left',`${e.pageX}px`);
          cursor.css('top',`${e.pageY}px`);
        }
          // 마우스가 움직일 때마다 위 함수를 실행한다.
        window.addEventListener('mousemove', animateCursor);
  
        //hire 섹션에 마우스를 오버하면 active클래스를 추가하여 너비 높이를 줘서 보이게 한다
        $('.hire .hire_wrap').mouseenter(function(){
          $('.cursor').addClass('active');
        });
        $('.hire .hire_wrap').mouseleave(function(){
          $('.cursor').removeClass('active');
        });
        // hire 섹션에 있는 a태그에 올라가면 click클래스를 추가하여 안의 글씨를 click으로 바꾼다
        $('.hire a').mouseenter(function(){
          $('.cursor').addClass('click');
        });
        $('.hire a').mouseleave(function(){
          $('.cursor').removeClass('click');
        });
  
        gsap.to('.hire .hire_wrap img',5, {
          scrollTrigger:{
            trigger: '.hire .hire_wrap',
            start: '0% 100%',
            end: '0% 100%',
            toggleActions: 'restart none reverse none',
            // markers:true
          },
          // transformOrigin: 'center center',
          // transform: 'scale(1.5)'
          scale: 1.1
        });
    
    // 맨 밑 마진패딩 없애기
    // console.log($('.main_video').parent());
    $('.main_video').parent().css('padding-bottom','0');
    $('.main_video').parent().next().css('margin-top','0');
  })
  
  

// 모달창
$(document).ready(function(){
  let modal = `
  <div class="modal">
    <div class="m_inner">
      <a href="https://recruit-shi.com/" title="채용공고배너"><img src="./images/modal.jpg" alt="이벤트배너"></a>
      <input type="button" id="ch" value="오늘 하루 열지 않음">
      <input type="button" id="c_btn" value="닫기">
    </div>
  </div>
  `
  $('.hire').append(modal);
  let ch = $('#ch');
  if($.cookie('popup')=='none'){   // 쿠키정보가 있다면
    $('.modal').hide();   // 모달창을 숨겨라
  }
  $('#c_btn').click(function(){
    $('.modal').hide();
  });
  $('#ch').click(function(){
    $.cookie('popup','none',{expires:1, path:'/'})
    $('.modal').hide();
  });
  // function close_popup(){
  //   if(ch.is(':checked')){
  //     $.cookie('popup','none',{expires:1, path:'/'})
  //     $('.modal').hide();
  //   } else{
  //     $('.modal').hide();
  //   }
  // }
});