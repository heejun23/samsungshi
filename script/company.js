// 회사정보 카운팅 스크립트
$(document).ready(function(){

  // 2. 회사소개 영역
  const count1  = document.getElementById('c_count1');
  const count7 = document.getElementById('c_count7');
  const count8 = document.getElementById('c_count8');
  const count2 = document.getElementById('c_count2');
  const count3 = document.getElementById('c_count3');
  const count4 = document.getElementById('c_count4');
  const count5 = document.getElementById('c_count5');

  let od1 = new Odometer({
    el: count1,
    format:'d'
  });
  let od7 = new Odometer({
    el: count7,
    format:'d'
  });
  let od8 = new Odometer({
    el: count8,
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

  gsap.to("#c_count1",{
    scrollTrigger:{
      trigger:'#c_count1',
      start:"0% 100%",
      end:"0% 100%",
      toggleActions: "restart none reverse none",
    },
    innerHTML : 1974,
  })
  gsap.to("#c_count7",{
    scrollTrigger:{
      trigger:'#c_count7',
      start:"0% 100%",
      end:"0% 100%",
      toggleActions: "restart none reverse none",
    },
    innerHTML : 8,
  })
  gsap.to("#c_count8",{
    scrollTrigger:{
      trigger:'#c_count8',
      start:"0% 100%",
      end:"0% 100%",
      toggleActions: "restart none reverse none",
    },
    innerHTML : 5,
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
});

// 전체 탭콘텐츠
$(document).ready(function(){
  // 1. 변수 선언
  let tab_mnu = $('#company_tab_con > ul > li > a');

  // 2. 메뉴를 클릭시 해당 콘텐츠가 나오게 한다.
  tab_mnu.click(function(e){
    e.preventDefault();   // 1번 방법 (새로고침방지-a태그 사용시 꼭 쓰기!)

    let tab_id = $(this).attr('id');
    let inner_div = $('.' + tab_id);

    // 클릭한 탭이 이미 활성화된 탭인지 확인
    if (!$(this).hasClass('company_tab_act')) {
      $('.company_tab_inner').hide();   // 보이는 div 콘텐츠를 숨긴다.
      inner_div.show();    // act로 활성화된 div 보여지기

      // company_tab_act 서식 더하기
      $(this).addClass('company_tab_act').parent().siblings().find('a').removeClass('company_tab_act');
    }
  });
});

// 경영이념/원칙 내비
$(document).ready(function(){
  // 1. 변수 선언
  let tab_management = $('.management_top_tab > ul > li > a');

  // 2. 메뉴를 클릭시 해당 콘텐츠가 나오게 한다.
  tab_management.click(function(e){
    e.preventDefault();   // 1번 방법 (새로고침방지-a태그 사용시 꼭 쓰기!)

    $('.company_tab_2').css('display', 'block');

    let tab_m_name = $(this).attr('class');
    let show_m_div = $('#' + tab_m_name);

    // 클릭한 탭이 이미 활성화된 탭인지 확인
    if (!$(this).hasClass('tab2_act')) {
      $('.management_tab_inner').hide();   // 보이는 div 콘텐츠를 숨긴다.
      show_m_div.show();    // tab3_act로 활성화된 div 보여지기

      // act 서식 더하기
      $(this).addClass('tab2_act').parent().siblings().find('a').removeClass('tab2_act');
    }
  });
});

// 연혁 내비
$(document).ready(function(){
  // 1. 변수 선언
  let tab_history = $('.history_tab > ul > li > a');
    $(window).on("scroll", function(e) {
    let scrollTop = $(this).scrollTop(); // 현재 스크롤 위치 가져오기
    let h1 = $('#h_2010').outerHeight(true); // 탭1 내용 높이
    let h2 = $('#h_2000').outerHeight(true); // 탭2 내용 높이
    let h3 = $('#h_1990').outerHeight(true); // 탭3 내용 높이
    let h4 = $('#h_1983').outerHeight(true); // 탭4 내용 높이
    let h5 = $('#h_1974').outerHeight(true); // 탭5 내용 높이
    // console.log(h1, h2, h3, h4, h5);
  });

  $(window).on("scroll", function(e) {

    // 2. 메뉴를 클릭시 해당 콘텐츠가 나오게 한다.
    $(tab_history).click(function(e){
      e.preventDefault();   // 1번 방법 (새로고침방지-a태그 사용시 꼭 쓰기!)

      $('.company_tab_3').css('display', 'block');

      let tab_name = $(this).attr('class');
      let show_div = $('#' + tab_name);
      let offset = -150; // 추가로 올릴 위치

      // 클릭한 탭이 이미 활성화된 탭인지 확인
      if (!$(this).hasClass('tab3_act')) {
        $('.history_inner').hide();   // 보이는 div 콘텐츠를 숨긴다.
        show_div.show();    // tab3_act로 활성화된 div 보여지기

        // act 서식 더하기
        $(this).addClass('tab3_act').parent().siblings().find('a').removeClass('tab3_act');
        $(this).find('span').addClass('year_act');
        $('.year_act').not($(this).find('span')).removeClass('year_act');
      }
      $('html,body').animate({scrollTop: $(show_div).offset().top + offset}, 500);

      // 각 탭에 해당하는 스크롤 높이를 비교하여 act 클래스 추가
      if (!$('h_2010').hasClass('tab3_act')) {   // 헤더 높이
        $('.history_tab_con_inner').css('height', show_div + 'px');
      } else if (!$('h_2000').hasClass('tab3_act')) {   // 헤더 높이
        $('.history_tab_con_inner').css('height', show_div + 'px');
      } else if (!$('h_1990').hasClass('tab3_act')) {   // 헤더 높이
        $('.history_tab_con_inner').css('height', show_div + 'px');
      } else if (!$('h_1983').hasClass('tab3_act')) {   // 헤더 높이
        $('.history_tab_con_inner').css('height', show_div + 'px');
      } else if (!$('h_1974').hasClass('tab3_act')) {   // 헤더 높이
        $('.history_tab_con_inner').css('height', show_div + 'px');
      }
    });
  });
});

