import styled from "styled-components";
import { Icon } from "./icon/Icon";


export type IconWrapperPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  text: string;
}

export const IconWrapper = (props: IconWrapperPropsType) => {
  return (
    <StyledWrapper>
      <Icon iconId={props.iconId} width={props.width} height={ props.height } viewBox={ props.viewBox }/>
      <p>{props.text}</p>
    </StyledWrapper>
  );
  
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 270px;
  height: 270px;
  background-color: #2A2A2A;
  border-radius: 29px;
`;