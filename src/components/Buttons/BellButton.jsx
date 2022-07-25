import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import bellSign from "../../assets/images/bell.svg";

const Wrapper = styled.div`
  ${tw`flex items-center justify-center bg-cyan rounded-xl `}
`;

const BellButton = styled.img`
  ${tw`m-4`}
`;
const SecondaryButton = () => {
  return (
    <Wrapper>
      <BellButton src={bellSign} alt="bellSign" />
    </Wrapper>
  );
};

export default SecondaryButton;
