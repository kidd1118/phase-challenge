import React from "react";
import styled from "styled-components";
import { Stage } from "@pixi/react";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store";
import { IPage } from "../../interface/page";
import { IElement } from "../../interface/element";
import { selectElement } from "../../store/pages";
import Rectangle from "../rectangle";

const CanvasWrapper = styled.div`
  position: relative;
  background: white;
  overflow: hidden;
`;
function Canvas() {
  const dispatch = useAppDispatch();
  const pages: Array<IPage> = useTypedSelector((state: RootState) => state.pages);
  const currentPage: IPage | undefined = pages.find((page: IPage) => page.selected);
  const elements: Array<IElement> = currentPage ? currentPage.elements : [];

  return (
    <CanvasWrapper>
      <Stage style={{ width: "100%", height: "100%" }} options={{ background: 0x1099bb }}>
        {elements &&
          elements.map((element: IElement) => (
            // <Text
            //   text={element.name}
            //   anchor={0.5}
            //   x={element.x}
            //   y={element.y}
            //   click={() => dispatch(selectElement(element.id))}
            //   key={element.id}
            // />
            <Rectangle
              key={element.id}
              x={element.x}
              y={element.y}
              width={element.width}
              height={element.height}
              opacity={element.opacity}
              color={element.color}
              name={element.name}
              id={element.id}
            />
          ))}
      </Stage>
    </CanvasWrapper>
  );
}
export default Canvas;
