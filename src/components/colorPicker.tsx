import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

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
  const [color, setColor] = useState("#00FF00");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
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
