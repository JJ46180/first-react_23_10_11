import { useState } from "react";

export const EventEx = () => {
  const [num, setNumber] = useState(0);
  //   let num = 0;
  //   => 이거와 동일하다
  //   use가 붙으면 Hooks다
  //   const [변수명, set변수명] = useState('hello');
  console.log(num);

  //   const plusHandler = () => {
  //     setNumber(num + 1);
  //   };

  //   const minusHandler = () => {
  //     setNumber(num - 1);
  //   };

  //   let num = 0;

  //   const plusHandler = () => {
  //     num++;
  //     console.log(num);
  //   };

  return (
    <div>
      <h3>클릭할 때 숫자증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHandler}>+</button>
      <button>-</button> */}

      {/* <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button> */}

      <button onClick={() => setNumber(num + 1)}>+</button>
      <button onClick={() => setNumber(num - 1)}>-</button>

      {/* => 코드가 간단해서이렇게작성도가능 */}
    </div>
  );
};

// *useState();
// =>react hook 종류 중 하나로 변수를 정의하고 값을 변경할 때 사용
// =>배열 비구조화 할당을 이용하며 첫번째 값은 변수
// 두번째값은 변수를 변경할 수 있는 함수로 정의
// 단, set이라는이름을 붙여줘야 됨
// ex)
// const [변수명, set변수명] = useState(변수값);
