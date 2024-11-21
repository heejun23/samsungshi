<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>삼성중공업</title>
  <!-- 파비콘 -->
  <link rel="shortcut icon" href="./images/favicon.png" type="image/x-icon">

  <!-- 스와이프슬라이드 css -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

  <!-- 초기화 -->
  <link rel="stylesheet" href="./css/reset.css" type="text/css">
  <!-- 베이스 css -->
  <link rel="stylesheet" href="./css/base.css" type="text/css">
  <!-- 공통서식 css -->
  <link rel="stylesheet" href="./css/common.css" type="text/css">
  <!-- 인덱스 메인 css -->
  <link rel="stylesheet" href="./css/main.css" type="text/css">
  <!-- 회사개요 css -->
  <link rel="stylesheet" href="./css/company.css" type="text/css">
  <!-- 조선해양 css -->
  <link rel="stylesheet" href="./css/product.css" type="text/css">
  <!-- 사업장 안내 css -->
  <link rel="stylesheet" href="./css/odometer-theme-default.css" type="text/css">
  <link rel="stylesheet" href="./css/workspace.css" type="text/css">
  <!-- 내방신청 css -->
  <link rel="stylesheet" href="./css/visit.css" type="text/css">
  <link rel="stylesheet" href="./css/visit_join_guide.css" type="text/css">
  <link rel="stylesheet" href="./css/visit_registration.css" type="text/css">
  <link rel="stylesheet" href="./css/visit_login.css" type="text/css">
  <!-- 폰트어썸 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  
  <!-- 제이쿼리cdn -->
  <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
  <!-- 제이쿼리쿠키 -->
  <script src="./script/jquery.cookie.js"></script>
  <!-- 카운트업cdn -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/1.8.5/countUp.min.js"></script>
  <!-- GSAP cdn -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>


  <!-- 공통(헤더,푸더) js -->
  <script src="./script/common.js"></script>
  <!-- 인덱스 메인 js -->
  <script src="./script/main.js"></script>
  <!-- 회사개요 js -->
  <script src="./script/company.js"></script>
  <!-- 조선해양 js -->
  <script src="./script/swiper.js"></script>
  <!-- 사업장 안내 js -->
  <script src="./script/odometer.min.js"></script>
  <script src="./script/workspace.js"></script>
  <!-- 내방신청 js -->
  <script src="./script/visit.js"></script>
  <script src="./script/visit_join_guide.js"></script>
  <script src="./script/visit_registration.js"></script>
</head>
<body>
  <!-- 헤더영역 -->
  <header>
    <div class="h_wrap">
      <h1><a href="index.html"><img src="./images/logo_white.svg" alt="메인로고" width="250"></a></h1>

      <div class="gnb_background"></div>
      <div class="gnb_wrap">
        <div class="close_btn"><img src="./images/close.svg" alt="gnb닫기" width="25"></div>
        <nav class="gnb">
          <ul>
            <li><a href="company.html" title="회사소개">회사소개<i class="fas fa-angle-down"></i></a>
              <ul>
                <li><a href="company.html" title="기업정보">기업정보</a></li>
                <li><a href="#" title="CI">CI</a></li>
                <li><a href="workplace.html" title="거제조선소 소개">거제조선소 소개</a></li>
                <li><a href="workplace.html" title="사업장안내">사업장안내</a></li>
                <li><a href="visit.html" title="내방신청">내방신청</a></li>
              </ul>
            </li>
            <li><a href="product.html" title="제품/기술">제품/기술<i class="fas fa-angle-down"></i></a>
              <ul>
                <li><a href="product.html" title="조선/해양">조선/해양</a></li>
                <li><a href="#" title="기술개발">기술개발</a></li>
                <li><a href="#" title="solution">solution</a></li>
              </ul>
            </li>
            <li><a href="#" title="투자정보">투자정보<i class="fas fa-angle-down"></i></a>
              <ul>
                <li><a href="#" title="재무정보">재무정보</a></li>
                <li><a href="#" title="주가정보">주가정보</a></li>
                <li><a href="#" title="IR자료실">IR자료실</a></li>
                <li><a href="#" title="지배구조">지배구조</a></li>
                <li><a href="#" title="공시">공시</a></li>
                <li><a href="#" title="공고">공고</a></li>
              </ul>
            </li>
            <li><a href="#" title="PR센터">PR센터<i class="fas fa-angle-down"></i></a>
              <ul>
                <li><a href="#" title="뉴스">뉴스</a></li>
                <li><a href="#" title="선박기초상식">선박기초상식</a></li>
              </ul>
            </li>
            <li><a href="http://heejun.dothome.co.kr/bbs/bbs/board.php?bo_table=recruitment_notice" title="인재채용">인재채용<i class="fas fa-angle-down"></i></a>
              <ul>
                <li><a href="http://heejun.dothome.co.kr/bbs/bbs/board.php?bo_table=recruitment_notice" title="채용공고">채용공고</a></li>
                <li><a href="#" title="입사지원가이드">입사지원가이드</a></li>
                <li><a href="#" title="인사제도">인사제도</a></li>
                <li><a href="#" title="채용문의 ">채용문의</a></li>
              </ul>
            </li>
            <li><a href="#" title="ESG">ESG<i class="fa-solid fa-arrow-right"></i></a></li>
          </ul>
        </nav>
        <div class="mobile_lnb">
          <p><a href="visit.html" title="내방신청">내방신청</a></p>
          <p>
            <a href="#" title="블로그 바로가기"><img src="./images/blog_blue.svg" alt="블로그" height="30"></a>
            <a href="#" title="인스타그램 바로가기"><img src="./images/insta_blue.svg" alt="인스타그램" height="30"></a>
            <a href="#" title="유튜브 바로가기"><img src="./images/youtube_blue.svg" alt="유튜브" height="30"></a>
          </p>
        </div>
      </div>

      <nav class="h_lnb">
        <a href="visit.html" title="내방신청">내방신청</a>
        <a href="#" title="언어설정" class="lang"><img src="./images/global_white.svg" alt="언어선택" width="25"></a>
        <div class="toggle"><img src="./images/bar_white.svg" alt="gnb 열기" width="30"></div>
      </nav>
      
    </div>
  </header>
  <!-- 메인영역 -->
  <main>