import styled from "styled-components";
import { BaseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${BaseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  height: 400px;
  background: url(${(props) => props.$bgImg}) no-repeat center/ cover;
  &:hover {
    opacity: 0.5;
  }
  /* =>자신을 잡아줄때 &를 잡아준다 */
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con
          $bgImg={
            "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"
          }
        ></Con>
        <Con
          $bgImg={
            "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"
          }
        ></Con>
        <Con
          $bgImg={
            "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"
          }
        ></Con>
      </ConWrap>
    </Section>
  );
};
