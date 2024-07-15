import React from "react";
import styled from "styled-components";
import ColorPicker from "../colorPicker";
import OpacityPicker from "../opacityPicker";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { IPage } from "../../interface/page";
import { RootState } from "../../store";
import { IElement } from "../../interface/element";

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
  const opacity = currentElement ? currentElement.opacity : 255;

  return (
    <RightPanelWrapper>
      <Label>
        X <input type="number" min={0} max={999} value={10} />
      </Label>
      <Label>
        Y <input type="number" min={0} max={999} value={10} />
      </Label>
      <Label>
        O <OpacityPicker value={opacity} />
      </Label>
      <Label>
        B <ColorPicker />
      </Label>
    </RightPanelWrapper>
  );
}

export default RightPanel;
