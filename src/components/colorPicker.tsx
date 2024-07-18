import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { setSelectedElementColor } from "../store/pages";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { IPage } from "../interface/page";
import { RootState } from "../store";
import { IElement } from "../interface/element";

const ColorPickerWrapper = styled.div`
  display: flex;
`;

const ColorDisplay = styled.div`
  width: 70px;
  height: 16px;
  align-self: center;
`;

const ColorInput = styled.input`
  opacity: 0;
  display: block;
  width: 16px;
  height: 16px;
  border: none;
`;

const ColorLabel = styled.div`
  width: 16px;
  height: 16px;
  color: white;
`;

function ColorPicker() {
  const dispatch = useAppDispatch();
  const pages: Array<IPage> = useTypedSelector((state: RootState) => state.pages);
  const currentPage: IPage | undefined = pages.find((page: IPage) => page.selected);
  const elements: Array<IElement> = currentPage ? currentPage.elements : [];
  const currentElement: IElement | undefined = elements.find(
    (element: IElement) => element.selected
  );
  const color = currentElement ? currentElement.color : 255;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    dispatch(setSelectedElementColor(newColor));
  };

  return (
    <ColorPickerWrapper>
      <ColorDisplay style={{ background: color }} />
      <ColorInput value={color} type="color" onChange={handleChange} />
      <ColorLabel>{color}</ColorLabel>
    </ColorPickerWrapper>
  );
}

export default ColorPicker;
