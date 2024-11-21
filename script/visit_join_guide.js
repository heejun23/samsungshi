$(document).ready(function () {
  //1. 콘텐츠 애니메이션
  //출처 https://ctrlcccv.github.io/code/2023-10-30-scroll-show/#google_vignette

  // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
  const $counters = $(".scroll_on");

  // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
  const exposurePercentage = 30; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 20% 노출되면 숫자가 올라갑니다.

  // 윈도우의 스크롤 이벤트를 모니터링합니다.
  $(window)
    .on("scroll", function () {
      // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
      $counters.each(function () {
        const $el = $(this);

        // 요소의 위치 정보를 가져옵니다.
        const rect = $el[0].getBoundingClientRect();
        const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
        const contentHeight = rect.bottom - rect.top; // 요소의 높이

        // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
        if (
          rect.top <= winHeight - (contentHeight * exposurePercentage) / 100 &&
          rect.bottom >= (contentHeight * exposurePercentage) / 100
        ) {
          $el.addClass("active");
        }
        // // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
        // if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
        //     $el.removeClass('active');
        // }
      });
    })
    .scroll();

  //2. 아이콘 탭 메뉴 클릭시 그림 바꾸기
  let i_tab = $(".icon_tab ul li");
  let i_txt = $(".icon_tab li a");
  let i = 0;

  // $(".icon_tab ul li:first-child").next().removeClass("changed");
  // $(".icon_tab ul li:nth-child(3)").next().addClass("changed");


  i_tab.click(function (e) {
    // e.preventDefault();
    i = $(this).index();
    console.log(i);

    i_tab.removeClass("on_bg");
    i_txt.removeClass("on_text");

    i_tab.eq(i).addClass("on_bg");
    i_txt.eq(i).addClass("on_text");

    //1번
    if ($(".icon_tab ul li:first-child").hasClass("on_bg") == true) {
      $(".icon_tab ul li:first-child > a img").attr(
        "src",
        "./images/icon_application_w.png"
      );
      i_tab.eq(1).addClass("changed");
    } else if ($(".icon_tab ul li:first-child").hasClass("on_bg") == false) {
      $(".icon_tab ul li:first-child > a img").attr(
        "src",
        "./images/icon_application_b.png"
      );
      i_tab.eq(1).removeClass("changed");
      i_tab.eq(1).addClass("icon");
    }

    //2번
    if ($(".icon_tab ul li:nth-child(2)").hasClass("on_bg") == true) {
      $(".icon_tab ul li:nth-child(2) > a img").attr(
        "src",
        "./images/icon_sign_up_w.png"
      );
      i_tab.eq(2).addClass("changed");
    } else if ($(".icon_tab ul li:nth-child(2)").hasClass("on_bg") == false) {
      $(".icon_tab ul li:nth-child(2) > a img").attr(
        "src",
        "./images/icon_sign_up_b.png"
      );
      i_tab.eq(2).removeClass("changed");
      i_tab.eq(2).addClass("icon");
    }

    //3번
    if ($(".icon_tab ul li:nth-child(3)").hasClass("on_bg") == true) {
      $(".icon_tab ul li:nth-child(3) > a img").attr("src", "./images/icon_pdf_w.png");
      i_tab.eq(3).addClass("changed");
    } else if ($(".icon_tab ul li:nth-child(3)").hasClass("on_bg") == false) {
      $(".icon_tab ul li:nth-child(3) > a img").attr("src", "./images/icon_pdf_b.png");
      i_tab.eq(3).removeClass("changed");
      i_tab.eq(3).addClass("icon");
    }

    //4번
    if ($(".icon_tab ul li:nth-child(4)").hasClass("on_bg") == true) {
      $(".icon_tab ul li:nth-child(4) > a img").attr(
        "src",
        "./images/icon_megaphone_w.png"
      );
      i_tab.eq(4).addClass("changed");
    } else if ($(".icon_tab ul li:nth-child(4)").hasClass("on_bg") == false) {
      $(".icon_tab ul li:nth-child(4) > a img").attr(
        "src",
        "./images/icon_megaphone_b.png"
      );
      i_tab.eq(4).removeClass("changed");
      i_tab.eq(4).addClass("icon");
    }

    //5번
    if ($(".icon_tab ul li:nth-child(5)").hasClass("on_bg") == true) {
      $(".icon_tab ul li:nth-child(5) > a img").attr("src", "./images/icon_faq_w.png");
      i_tab.eq(5).addClass("changed");
    } else if ($(".icon_tab ul li:nth-child(5)").hasClass("on_bg") == false) {
      $(".icon_tab ul li:nth-child(5) > a img").attr("src", "./images/icon_faq_b.png");
      i_tab.eq(5).removeClass("changed");
      i_tab.eq(5).addClass("icon");
    }

    //6번
    if ($(".icon_tab ul li:last-child").hasClass("on_bg") == true) {
      $(".icon_tab ul li:last-child > a img").attr(
        "src",
        "./images/icon_long_edu_w.png"
      );
    } else if ($(".icon_tab ul li:last-child").hasClass("on_bg") == false) {
      $(".icon_tab ul li:last-child > a img").attr(
        "src",
        "./images/icon_long_edu_b.png"
      );
    }
  });

  //2-1. 모바일용 아이콘 슬라이드
  // var swiper = new Swiper(".icon_tab", {
  //   slidesPerView: 3,
  //   slidesPerGroup: 3,
  //   centeredSlides: false,
  //   spaceBetween: 0,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     // 반응형 설정, width값으로 조정
  //     768: {
  //       // 768 이상~
  //       slidesPerView: 6,
  //       spaceBetween: 0,
  //     },
  //   },
  // });

  //3. 업체등록 슬라이드
  var swiper = new Swiper(".join", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //설명 슬라이드 제목넣기
  $(".join > .swiper-pagination span").eq(0).html("<p>홈페이지 접속</p>");

  $(".join > .swiper-pagination span").eq(1).html("<p>회원가입<br>메뉴접속</p>");

  $(".join > .swiper-pagination span").eq(2).html("<p>이용약관<br>동의</p>");

  $(".join > .swiper-pagination span").eq(3).html("<p>휴대폰<br>실명인증</p>");

  $(".join > .swiper-pagination span").eq(4).html("<p>회원가입<br>정보입력</p>");
});
