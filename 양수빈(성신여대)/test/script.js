// document: 웹페이지
// DOM : document를 자유롭게 다루기 위해 객체화 하고자 구현한 개념

// document.queryDelector(선택자): 파라미터로 전달한 '.img__btn'에 맞는 첫 번째 태그 반환
// addEventListener(): document의 특정 요소(id, class, tag 등)의 event를 등록할 때 사용
// classList.toggle: 클래스의 유무를 체크해서 없으면 add, 있으면 remove

document.querySelector('.img__btn').addEventListener('click', function() {
  document.querySelector('.cont').classList.toggle('s--signup'); // cont: textfield와 버튼이 있는 영역, s--signup: css에서 정의한 애니메이션 액션
});


// mouseover 할 경우, 같은 이벤트 발생하는 코드 
// 이벤트 함수 따로 분리

// document.querySelector('.img__btn').addEventListener('mouseover', click);
// function click() {
//   document.querySelector('.cont').classList.toggle('s--signup');
// };