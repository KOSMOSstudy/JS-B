document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });


// document.querySelector가 html의 '.img__btn'을 반환한다.
// .addEventListener로 click이라는 이벤트를 발생했을 때, 두 번째 인자로 전달한 이벤트 리스너가 호출이 되면서 위 함수가 실행이 된다.
//함수 내부 내용으로는 html의 '.cont' 코드 반환, 그리고 '.classList.toggle' 로 CSS의 transform 기능 사용


//<추가 개념>

//document: HTML의 정보를 가져오는 함수

//document.querySelector(selectors): 제공한 선택자 혹은 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환한다.
// 일치하는 요소가 없을 때는 null을 반환한다.
// querySelector는 CSS 속성을 가지고 온다.
// 1. class 속성을 가져오는 경우 : ".이름" 2. id를 가져오는 경우: "#이름"으로 쓴다.
// 최상단 1개의 속성만 가지고 오기 때문에 모두 다 가지고 오고 싶다면 querySelectorAll을 사용하면 된다.

// addEventListener : 이벤트를 등록할 때 가장 권장되는 방식이다.
// 형식 : 검색된객체.addEventListener('이벤트명', 콜백 함수);
// 이 방식을 이용하면 검색된 태그 객체에 대하여 다중의 이벤트 핸들러를 등록할 수 있다. 
// 또한, 하나의 이벤트 대상에 복수의 동일 이벤트 타입 리스너를 등록할 수 있다는 것이 장점이다.

//classList.toggle :클래스 값이 있는지 없는지 체크 후, 있으면 remove 없으면 add.