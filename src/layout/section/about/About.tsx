import { Icon } from "../../../components/icon/Icon";
import myFoto1 from "../../../assets/images/1.png";
import myFoto2 from "../../../assets/images/2.png";
import myFoto3 from "../../../assets/images/3.png";
import styled from "styled-components";

export const About = () => {
  return (
    <StyledWrapper>
      <Icon
        iconId={"simbolIcon"}
        width={"1364"}
        height={"1101"}
        viewBox={"0 0 1364 1101"}
      />
      <h3>ABOUT ME</h3>
      <p>
        Hello again everyone! So, you already know that my name is Gleb. A
        little about myself: student, 18 y.o., athlete-football player, I love
        creativity since childhood, I live in Donetsk, Ukraine. Why programming?
        Everything is elementary - I like it, the profession of the future,
        thanks to which I can provide myself and fulfill my dream - travel, at
        the moment I specialize in web design, front-end and back-end
        development, turnkey websites. Why should you choose me? I approach each
        order with great responsibility and love, as I want to make a name for
        myself, exclude plagiarism and negligence, fully study the project, the
        client and its target audience, work for quality, trying to make an
        order as quickly and uniquely as possible, taking into account all the
        edits and wishes. By trusting me, you will get the maximum return for
        your project, save your nerves and time. If you are interested in me ,
        you want to know something more or use my services, then I will provide
        all my contacts below.
      </p>
      <img src={myFoto1} alt='2' />
      <img src={myFoto2} alt='2' />
      <img src={myFoto3} alt='2' />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
`;
