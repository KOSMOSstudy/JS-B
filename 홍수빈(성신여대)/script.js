document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });

/* .img__btn(선택자)(로그인, 회원가입 버튼) 한개 선택 , 클릭 하면 2번 대로 처리*/
/* 2번 :  .cont에 s--signup 있으면 제거하고 없으면 새로 추가*/

/* document는 html을 가져오는 함수*/