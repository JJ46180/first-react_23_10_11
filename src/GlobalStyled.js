import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const BaseLayoutSize = {
  padding: "150px 15%",
};

export const fontSize = {
  title: "80px",
  menu: "18px",
  desc: "16px",
};

export const GlobalSyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
    }
`;
// => 전체 영역에서 사용할 수 있는 스타일 처리법
