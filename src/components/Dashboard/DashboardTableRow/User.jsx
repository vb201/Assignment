import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import DummyImage from "../../../assets/users/dummyUser.jpg";
const Wrapper = styled.div`
  ${tw`flex h-full justify-center items-center `}
`;

const UserDetailsContainer = styled.div`
  ${tw`flex flex-col justify-center px-3 `}
`;
const StyledImage = styled.img`
  ${tw`rounded-full w-10`}
`;
const Heading = styled.p`
  font-size: 14px;
  line-height: 17px;
  ${tw`text-primary font-medium`}
`;

const SubHeading = styled.p`
  font-size: 10px;
  line-height: 12px;
  ${tw`text-secondary font-medium`}
`;
const User = ({ name, email }) => {
  return (
    <Wrapper>
      <StyledImage src={DummyImage} alt="user" />
      <UserDetailsContainer>
        <Heading>{name}</Heading>
        <SubHeading>{email}</SubHeading>
      </UserDetailsContainer>
    </Wrapper>
  );
};

export default User;
