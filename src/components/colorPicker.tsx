import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { setSelectedElementColor } from "../store/pages";
import { useAppDispatch } from "../hooks/useTypedSelector";

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

function ColorPicker({ value }: { value: string }) {
  const dispatch = useAppDispatch();
  const [color, setColor] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
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
