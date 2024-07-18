import React, { useCallback } from "react";
import { Graphics } from "@pixi/react";
import { IElement } from "../interface/element";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@pixi/events";
// import { selectElementById } from "../store/pages";
// import { useAppDispatch } from "../hooks/useTypedSelector";

function Rectangle(props: IElement) {
  // const dispatch = useAppDispatch();
  const { x, y, width, height, color, opacity, selected } = props;
  const alpha = opacity / 255;

  const draw = useCallback(
    (g: any) => {
      g.clear();
      g.beginFill(color);
      if (selected) {
        g.lineStyle(2, 0xffd900);
      }
      g.drawRect(0, 0, width, height);
      g.endFill();
    },
    [width, height, color, selected]
  );

  return <Graphics draw={draw} x={x} y={y} alpha={alpha} />;
}

export default Rectangle;
