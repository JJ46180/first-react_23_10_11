import styled from "styled-components";
import { BaseLayoutSize } from "../../../GlobalStyled";

const Section = styled.section`
  height: 70vh;
  background-color: lightgray;
  padding: ${BaseLayoutSize.padding};
  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-top: 50px;
  }
`;

export const Section_1 = () => {
  return (
    <Section>
      <h3>첫번째 섹션</h3>
    </Section>
  );
};
