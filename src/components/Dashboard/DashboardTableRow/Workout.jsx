import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import performedDateSVG from "../../../assets/images/performedDate.svg";
import scheduleDateSVG from "../../../assets/images/scheduleDate.svg";
import PrimaryButton from "../../Buttons/ArrowButton/RightArrowButton";

const Wrapper = styled.div`
  ${tw`flex h-full justify-center items-center`}
`;

const DateWrapper = styled.div`
  ${tw`flex flex-col justify-center h-full`}
`;

const Contains = styled.div`
  ${tw`flex justify-start items-center py-1`}
`;

const Text = styled.p`
  ${tw`text-white font-semibold text-sm px-2`}
`;
const Workout = ({ performedDate, scheduleDate }) => {
  return (
    <Wrapper>
      <DateWrapper>
        <Contains>
          <img src={performedDateSVG} alt="performedDateSVG" />

          <Text>{performedDate}</Text>
        </Contains>
        <Contains>
          <img src={scheduleDateSVG} alt="scheduleDateSVG" />
          <Text>{scheduleDate}</Text>
        </Contains>
      </DateWrapper>
      <PrimaryButton />
    </Wrapper>
  );
};

export default Workout;
