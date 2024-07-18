import React, { ChangeEvent } from "react";
import styled from "styled-components";
import ColorPicker from "../colorPicker";
import OpacityPicker from "../opacityPicker";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { IPage } from "../../interface/page";
import { RootState } from "../../store";
import { IElement } from "../../interface/element";
import { setSelectedElementPosition } from "../../store/pages";

const RightPanelWrapper = styled.div`
  padding: 8px;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 16px auto minmax(0, 1fr);
  grid-gap: 8px;
`;

function RightPanel() {
  const dispatch = useAppDispatch();
  const pages: Array<IPage> = useTypedSelector((state: RootState) => state.pages);
  const currentPage: IPage | undefined = pages.find((page: IPage) => page.selected);
  const elements: Array<IElement> = currentPage ? currentPage.elements : [];
  const currentElement: IElement | undefined = elements.find(
    (element: IElement) => element.selected
  );
  const x = currentElement ? currentElement.x : 0;
  const y = currentElement ? currentElement.y : 0;

  const handleChangeX = (event: ChangeEvent<HTMLInputElement>) => {
    const newX = event.target.value;
    dispatch(setSelectedElementPosition({ x: Number(newX), y: Number(y) }));
  };
  const handleChangeY = (event: ChangeEvent<HTMLInputElement>) => {
    const newY = event.target.value;
    dispatch(setSelectedElementPosition({ x: Number(x), y: Number(newY) }));
  };
  return (
    <RightPanelWrapper>
      <Label>
        X <input type="number" min={0} max={999} value={x} onChange={handleChangeX} />
      </Label>
      <Label>
        Y <input type="number" min={0} max={999} value={y} onChange={handleChangeY} />
      </Label>
      <Label>
        O <OpacityPicker />
      </Label>
      <Label>
        B <ColorPicker />
      </Label>
    </RightPanelWrapper>
  );
}

export default RightPanel;
