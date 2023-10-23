import { Intro } from "./Intro";
import { FoodMenu } from "./FoodMenu";

const FoodMenus = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "제육덮밥",
    dinner: "김치찌개",
  },
  {
    week: "화요일",
    breakfast: "쉐이크",
    lunch: "샤브샤브",
    dinner: "보쌈",
  },
  {
    week: "수요일",
    breakfast: "토스트",
    lunch: "중국집",
    dinner: "스시",
  },
];

const PropsEx = () => {
  return (
    <div>
      <Intro name={"김 현지"} age={25} />
      <Intro name={"함 현지"} age={26} />

      <br />
      <br />
      <FoodMenu menus={FoodMenus} />
    </div>
  );
};

export default PropsEx;
