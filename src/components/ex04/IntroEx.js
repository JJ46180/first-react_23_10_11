const users = [
  {
    id: 0,
    name: "함현지",
    age: 25,
  },
  {
    id: 1,
    name: "이현지",
    age: 24,
  },
  {
    id: 2,
    name: "최현지",
    age: 22,
  },
];

export const IntroEx = () => {
  return (
    <div>
      {/* <h2>자기소개</h2>
      <h3>이름: {users[0].name}</h3>
      <h3>나이: {users[0].age}</h3>
      <hr></hr>
      => 이것을 좀 더편하게 입력하기 위한 map()메소드는?! */}
      {users.map((man) => (
        <div key={man.id}>
          <h2>자기소개</h2>
          <h3>이름: {man.name}</h3>
          <h3>나이: {man.age}</h3>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};
