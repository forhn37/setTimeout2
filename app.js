// setTimeout(function() {
//   console.log("첫번째 소사");
//   setTimeout(function() {
//     console.log("두번째 뭉기");
//     setTimeout(function() {
//       console.log("세번째 밍구");
//     }, 1000) 
//   }, 2000) ;
// }, 3000) 
//* 원래는 위에서부터 아래 순서로 실행되어야 한다./
//* setTimeout은 스크립트를 무시한다. 개중요/
//* 지정된 시간에 호출된다. 

//* setTimeout은 콜백형식이 아니면 순서대로 진행을 할 수 없음/
//* 내가 엔진이라면 setTimeout을 보고 초보고 실행문 순서대로/

function sosa() {
  setTimeout(function() {
    sosa();
    console.log('약오르지?')
  }, 1000)
};

sosa();
//* 재귀함수 /