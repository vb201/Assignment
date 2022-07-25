import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import arrowSVG from "../../assets/images/arrow.svg";

const Wrapper = styled.div`
  ${tw`flex h-full rounded-2xl w-10 bg-secondary items-center justify-center ml-2`}
`;
const RightArrowButton = () => {
  return (
    <Wrapper>
      <img src={arrowSVG} alt="arrowSVG" />
    </Wrapper>
  );
};

export default RightArrowButton;
