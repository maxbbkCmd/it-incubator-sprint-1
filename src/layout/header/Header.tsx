import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/nav/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: #464545;
`;
