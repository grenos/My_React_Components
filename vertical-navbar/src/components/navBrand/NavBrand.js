import React from 'react';
import styled from 'styled-components';

const BrandWrapper = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;
  align-self: flex-start;
`;

const Brand = styled.h1`
  font-size: 2.3em;
  color: black;
  background-color: white;
  font-family: 'Special Elite', cursive;
`;

export default () => {
  return (
    <BrandWrapper>
      <Brand>Brand Name</Brand>
    </BrandWrapper>
  );
};
