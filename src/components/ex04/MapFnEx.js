const nums = [1, 2, 3, 4, 5];
// console.log(nums);

export const MapFnEx = () => {
  // nums.map((n) => console.log(n + "😊"));
  // *map()
  // => 배열을 기준으로 배열의 요소값을 새로운 값으로 반환하는 역할
  // => 반드시 유니크한(고유값) 키(key)값을 넣어줘야 된다
  return (
    <div>
      {nums.map((num) => (
        <i key={num}>{num}</i>
      ))}
    </div>
  );
};
