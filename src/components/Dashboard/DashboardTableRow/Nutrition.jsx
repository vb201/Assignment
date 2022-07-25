import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import tw from "twin.macro";
import { NumberFormatter } from "../../../utils";
import PrimaryButton from "../../Buttons/RightArrowButton";

const Wrapper = styled.div`
  ${tw`flex h-full justify-center items-center`}
`;

const NutritionPieContainer = styled.div`
  min-width: 60px;
  ${tw`h-20 w-20 flex items-center justify-center`}
`;

const ChartInnerItem = styled.div`
  ${tw`absolute m-0 items-center justify-center`}
`;

const CalorieIntakeHeading = styled.div`
  font-size: 12px;
  line-height: 15px;
  ${tw`text-primary px-3 font-bold `}
`;

const CalorieIntakeSubHeading = styled.div`
  font-size: 8px;
  line-height: 9px;
  ${tw`text-secondary px-3 font-bold `}
`;

const CalorieTargetContainer = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;

const CalorieTargetHeading = styled.p`
  font-size: 18px;
  line-height: 20px;
  ${tw`text-primary px-3 font-bold`}
`;

const CalorieTargetSubHeading = styled.p`
  font-size: 10px;
  line-height: 12px;
  ${tw`text-secondary px-3 font-bold`}
`;

const Nutrition = ({ calorieIntake, calorieTarget }) => {
  const shiftSize = 7;
  return (
    <Wrapper>
      <NutritionPieContainer>
        <PieChart
          lineWidth={20}
          style={{
            position: "relative",
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: "8px",
          }}
          label={(calorieIntake) => calorieIntake}
          labelPosition={50}
          radius={PieChart.defaultProps.radius - shiftSize}
          data={[
            { title: "One", value: 10, color: "#F5C90F" },
            { title: "Two", value: 15, color: "#03C7FC" },
            { title: "Three", value: 20, color: "#F45C84" },
          ]}
          labelStyle={{
            fill: "white",
            fontSize: "10px",
          }}
        />
        <ChartInnerItem>
          <CalorieIntakeHeading>{calorieIntake}</CalorieIntakeHeading>
          <CalorieIntakeSubHeading>calories</CalorieIntakeSubHeading>
        </ChartInnerItem>
      </NutritionPieContainer>
      <CalorieTargetContainer>
        <CalorieTargetHeading>
          {NumberFormatter(calorieTarget)}
        </CalorieTargetHeading>
        <CalorieTargetSubHeading>target</CalorieTargetSubHeading>
      </CalorieTargetContainer>
      <PrimaryButton />
    </Wrapper>
  );
};

export default Nutrition;
