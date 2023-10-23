export const ComEx01 = () => {
  return <div>컴포넌트 1번</div>;
};

// => 컴포넌트라는 이름!

export const ComEx02 = () => {
  return <div>컴포넌트 2번</div>;
};

// export default ComEx01;
// export default ComEx02;

// =>기본 내보내는 것은 불가능하다
//node.js만의 규칙

// =>기본 내보내기는 반드시 파일당 하나만 가능 함

// **다중 컴포넌트는 어떻게 하는것이 좋을까?
// => export를 함수 앞에 붙여서 내보낼수 있음
// => 단 import 할 땐 {}중괄호를 이용하여 다중 컴포넌트를 불러 올 수 있다~
