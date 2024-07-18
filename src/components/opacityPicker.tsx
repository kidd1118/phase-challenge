import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { setSelectedElementOpacity } from "../store/pages";
import { RootState } from "../store";
import { IPage } from "../interface/page";
import { IElement } from "../interface/element";

const OpacityPickerWrapper = styled.div`
  display: flex;
`;

function OpacityPicker() {
  const dispatch = useAppDispatch();
  const pages: Array<IPage> = useTypedSelector((state: RootState) => state.pages);
  const currentPage: IPage | undefined = pages.find((page: IPage) => page.selected);
  const elements: Array<IElement> = currentPage ? currentPage.elements : [];
  const currentElement: IElement | undefined = elements.find(
    (element: IElement) => element.selected
  );
  const opacity = currentElement ? currentElement.opacity : 255;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newOpacity = Number(event.target.value);
    dispatch(setSelectedElementOpacity(newOpacity));
  };

  return (
    <OpacityPickerWrapper>
      <input type="number" min={0} max={255} value={opacity} onChange={handleChange} />
      <input
        type="range"
        min={0}
        max={255}
        value={opacity}
        onChange={handleChange}
        style={{ width: "80px" }}
      />
    </OpacityPickerWrapper>
  );
}

export default OpacityPicker;
