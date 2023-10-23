export const Intro = ({ name, age }) => {
  // console.log(Props);

  // const name = Props.name;
  // const age = Props.age;

  // const { name, age } = Props;
  // =>객체 비구조화 할당

  return (
    <div>
      <h2>자기소개</h2>
      <h3>이름 : {name}</h3>
      <h3>나이 : {age}</h3>
    </div>
  );
};
