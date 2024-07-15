import React, { useCallback } from "react";
import { Graphics } from "@pixi/react";
import { IElement } from "../interface/element";

const lineWidth = 2;
function Rectangle(props: IElement) {
  const draw = useCallback(
    (g: any) => {
      const { x, y, color, width, height } = props;
      g.clear();
      g.moveTo(x, y);
      g.lineStyle(lineWidth, color);
      g.drawRect(lineWidth, lineWidth, width - 2 * lineWidth, height - 2 * lineWidth);
    },
    [props]
  );

  return <Graphics draw={draw} />;
}

export default Rectangle;
