import React from "react";
import DashboardTableHeader from "./DashboardTableHeader";
import { Data } from "../../data/db";
import DashboardTableRow from "./DashboardTableRow";
import tw from "twin.macro";
import styled from "styled-components";

const Wrapper = styled.div`
  ${tw`flex flex-col w-full`}
`;
const DashboardTable = () => {
  return (
    <>
      <Wrapper>
        <DashboardTableHeader />
        {Data.map((user, index) => {
          return <DashboardTableRow key={index} data={user} />;
        })}
      </Wrapper>
    </>
  );
};

export default DashboardTable;
