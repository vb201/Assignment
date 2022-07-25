import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import DashboardTable from "./DashboardTable";

const Wrapper = styled.div`
  ${tw`flex bg-primary h-screen w-screen items-center justify-center `}
`;

const Contents = styled.div`
  ${tw`flex bg-secondary w-11/12 h-5/6 rounded-3xl`}
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Contents>
        <DashboardTable />
      </Contents>
    </Wrapper>
  );
};

export default Dashboard;
