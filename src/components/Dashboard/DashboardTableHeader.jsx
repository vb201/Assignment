import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import stepSVG from "../../assets/images/steps.svg";
import workoutSVG from "../../assets/images/workout.svg";
import nutritionSVG from "../../assets/images/nutrition.svg";

const Wrapper = styled.div`
  ${tw`flex items-center h-20 justify-end mx-3`}
`;
const Content = styled.div`
  ${tw`flex h-full items-center justify-start mx-2`}
`;

const Heading = styled.p`
  ${tw`text-white lg:px-3 font-bold lg:text-lg md:text-sm md:px-2`}
`;
const DashboardTableHeader = () => {
  return (
    <Wrapper>
      <Content className="col-4" />
      <Content className="col-2">
        <img src={stepSVG} alt="step" />
        <Heading>Steps</Heading>
      </Content>

      <Content className="col-2">
        <img src={workoutSVG} alt="workout" />
        <Heading>Workout</Heading>
      </Content>

      <Content className="col-2">
        <img src={nutritionSVG} alt="nutrition" />
        <Heading>Nutrition</Heading>
      </Content>
      <Content className="col-1"></Content>
    </Wrapper>
  );
};

export default DashboardTableHeader;
