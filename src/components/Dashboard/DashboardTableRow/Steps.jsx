import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import styled from "styled-components";
import tw from "twin.macro";
import { NumberFormatter } from "../../../utils";

const StepWalkedHeading = styled.div`
  font-size: 12px;
  line-height: 15px;
  ${tw`text-primary px-3 font-bold `}
`;

const StepWalkedSubHeading = styled.div`
  font-size: 8px;
  line-height: 9px;
  ${tw`text-secondary px-3 font-bold `}
`;

const StepWalkedContainer = styled.div`
  min-width: 60px;
  ${tw`h-16 w-16 flex items-center justify-center`}
`;

const StepTargetContainer = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;

const StepTargetHeading = styled.p`
  font-size: 18px;
  line-height: 20px;
  ${tw`text-primary px-3 font-bold`}
`;

const StepTargetSubHeading = styled.p`
  font-size: 10px;
  line-height: 12px;
  ${tw`text-secondary px-3 font-bold`}
`;

const Steps = ({ stepsWalked, stepsTarget }) => {
  return (
    <>
      <StepWalkedContainer>
        <CircularProgressbarWithChildren
          className=""
          value={stepsWalked}
          maxValue={stepsTarget}
          minValue={0}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `#7FD18C`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "#fff",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
          }}
        >
          <StepWalkedHeading>{stepsWalked}</StepWalkedHeading>
          <StepWalkedSubHeading>target</StepWalkedSubHeading>
        </CircularProgressbarWithChildren>
      </StepWalkedContainer>
      <StepTargetContainer>
        <StepTargetHeading>{NumberFormatter(stepsTarget)}</StepTargetHeading>
        <StepTargetSubHeading>target</StepTargetSubHeading>
      </StepTargetContainer>
    </>
  );
};

export default Steps;
