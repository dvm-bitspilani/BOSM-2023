import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { motion, useTransform } from "framer-motion";

import { Context } from "./Context";
import { useRef } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

const ItemWrapper = styled(motion.div)`
  flex: 0 0 auto;

  &:not(:last-child) {
    margin-right: ${props => props.gap}px;
  }
`;

function useDimensions() {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({});
    useLayoutEffect(() => {
        setDimensions(ref.current.getBoundingClientRect().toJSON());
    }, [ref.current]);

    return [ref, dimensions]
}

const MotionWrapper = styled(motion.div)``;

const Item = ({ children, gap, padding, index, offset }) => {
  const { dispatch } = useContext(Context);
  const [itemRef, { x, width }] = useDimensions({ liveMeasure: false });

//   console.log(width);

  const opacity = useTransform(
    offset,
    [(index - 1) * -width, index * -width, (index + 1) * -width],
    [0.2, 1, 0.2]
  );

  const scale = useTransform(
    offset,
    [(index - 1) * -300, index * -300, (index + 1) * -300],
    [0.8, 1, 0.8]
  );

  useEffect(() => {
    if (x !== undefined) {
      dispatch({ type: "ADD_ITEM", item: x - padding });
    }
  }, [x, dispatch, padding]);

  return (
    <ItemWrapper ref={itemRef} gap={gap} style={{ opacity, scale }}>
      <MotionWrapper>{children}</MotionWrapper>
    </ItemWrapper>
  );
};

export default Item;
