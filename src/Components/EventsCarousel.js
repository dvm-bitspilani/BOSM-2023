import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

import MotionSlider from "./MotionSlider";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  body { overflow-x: hidden; }
`;

const Space = styled.div`
  height: ${({ height }) => height}px;
`;

const Wrapper = styled.div`
  margin: auto;
  height: 100vh;
`;

const Element = styled.div`
  /* width: calc(100vw - 60px); */
  width: 260px;
  height: 400px;
  background: blueviolet;
`;

const Text = styled.div`
  font-family: "Montserrat", "sans-serif";
  font-weight: 900;
  font-size: 48px;
`;

function EventsCarousel() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Space height={60} />
      {/* <MotionSlider allowSlideToLast padding={30}>
        {["Today", "This Week", "This Month", "Past Month"].map((item, i) => (
          <Text>{item}</Text>
        ))}
      </MotionSlider> */}
      <Space height={60} />
      <MotionSlider padding={30} gap={30}>
        {[...Array(20)].map((item, i) => (
          <Element />
        ))}
      </MotionSlider>
    </Wrapper>
  );
}

export default EventsCarousel;