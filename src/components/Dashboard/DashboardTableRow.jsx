import React from "react";

import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import tw from "twin.macro";
import SecondaryButton from "../Buttons/SecondaryButton";
import TableRowNutrition from "./TableRowNutrition";
import TableRowSteps from "./TableRowSteps";
import TableRowWorkout from "./TableRowWorkout";

const Wrapper = styled.div`
  ${tw`flex h-24 justify-end bg-primary rounded-2xl mx-3 my-4 `}
`;

const Content = styled.div`
  ${tw`flex items-center justify-center mx-2 my-2`}
`;

const Heading = styled.p`
  font-size: 18px;
  line-height: 20px;
  ${tw`text-primary px-3 font-bold`}
`;

const DashboardTableRow = ({ data }) => {
  return (
    <Wrapper>
      <Content className="col-4">
        <Heading>Steps</Heading>
      </Content>
      <Content className="col-2">
        <TableRowSteps
          stepsWalked={data.stepsWalked}
          stepsTarget={data.stepsTarget}
        />
      </Content>

      <Content className="col-2">
        <TableRowWorkout
          performedDate={data.performedDate}
          scheduleDate={data.scheduleDate}
        />
      </Content>

      <Content className="col-2">
        <TableRowNutrition
          calorieIntake={data.calorieIntake}
          calorieTarget={data.calorieTarget}
        />
      </Content>
      <Content className="col-1">
        <SecondaryButton />
      </Content>
    </Wrapper>
  );
};

export default DashboardTableRow;
