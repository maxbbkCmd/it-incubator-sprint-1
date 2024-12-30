import styled from "styled-components";
import mainImg from "../../../assets/images/Mtk.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <div>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <TitleStyled>
          <h2>Hello</h2>
          <h1>I’m Max Mityukov </h1>
          <p>
            I've been doing web design, front-end and back-end development for a
            year now. Do you need a website design, site layout, or maybe a
            turnkey website? Then contact me
          </p>
          <button>CONTACT ME</button>
        </TitleStyled>
        
        <Photo src={mainImg} alt='myImg' />
      </FlexWrapper>
    </div>
  );
};

const Photo = styled.img`
  width: 632px;
  height: 674px;
  object-fit: cover;
`;

const TitleStyled = styled.div`
  max-width: 447px;

`
