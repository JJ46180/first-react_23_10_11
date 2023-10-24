import styled from "styled-components";
import "../components/style.css";

const Div = styled.div`
  font-size: 16px;
`;

export const MusicApp = () => {
  return (
    <div>
      <div className="box">
        <div className="menu">
          <div className="left_btn"></div>
          <div className="right_btn"></div>
        </div>

        <div className="main_img"></div>
        <h4>Blue bird</h4>
      </div>
    </div>
  );
};
