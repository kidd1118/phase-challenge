import React, { useState } from "react";
import styled from "styled-components";
import { Container, Stage } from "@pixi/react";
import { FederatedPointerEvent } from "pixi.js";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store";
import { IPage } from "../../interface/page";
import { IElement } from "../../interface/element";
import Rectangle from "../rectangle";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@pixi/events";
import { selectElement, setSelectedElementPosition } from "../../store/pages";

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

  // 定义拖动状态
  const [isDragging, setIsDragging] = useState(false);
  const handlePointerDown = (event: FederatedPointerEvent, element: IElement) => {
    setIsDragging(true);
    dispatch(selectElement(element));
  };

  const handlePointerMove = (event: FederatedPointerEvent, element: IElement) => {
    if (isDragging) {
      const { x, y } = {
        x: event.global.x - element.width / 2,
        y: event.global.y - element.height / 2,
      };
      dispatch(setSelectedElementPosition({ x, y }));
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerOutside = () => {
    setIsDragging(false);
  };

  return (
    <CanvasWrapper>
      <Stage style={{ width: "100%", height: "100%" }} options={{ background: 0x1099bb }}>
        {elements &&
          elements.map((element: IElement) => (
            <Container
              key={element.id}
              interactive
              pointerdown={(e: FederatedPointerEvent) => {
                handlePointerDown(e, element);
              }}
              pointerup={() => {
                handlePointerUp();
              }}
              pointerupoutside={() => {
                handlePointerOutside();
              }}
              pointermove={(e: FederatedPointerEvent) => {
                handlePointerMove(e, element);
              }}
            >
              <Rectangle
                x={element.x}
                y={element.y}
                width={element.width}
                height={element.height}
                opacity={element.opacity}
                color={element.color}
                name={element.name}
                id={element.id}
                selected={element.selected}
                type={element.type}
              />
            </Container>
          ))}
      </Stage>
    </CanvasWrapper>
  );
}
export default Canvas;
